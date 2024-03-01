// basically when this is called, the logout api is called which automatically
// destroyes/ends the session
// don't need to send any data because nothing is being looked up, added, or changed to the database
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    // console.log('in the logout fetch');
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  