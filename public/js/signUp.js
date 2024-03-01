
const signupFormHandler = async (event) => {
    event.preventDefault();

    // gets the info entered into each part of the form
    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passwordConfirm = document.querySelector('#password-signup-confirm').value.trim();
    // console.log(`username: ${userName}, email: ${email}, password: ${password}`)
    // console.log('in the form');

    // if the two password values are not the same, alerts the user
    if(password != passwordConfirm){
        alert("your passwords didn't match");
        return;
    }
    
    // if the user has entered in everything, does a POST request
    if (userName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        // sends userName, password, and email to the api where it's then added to the database
        // the password is hashed with a hook in the User model
        body: JSON.stringify({ userName, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // if all is good, sends the user back to the home page
        document.location.replace('/');
      } else {
        alert('Username or Email is already in use');
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

  