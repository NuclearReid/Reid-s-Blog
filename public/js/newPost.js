
const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#blog-title').value;
    const content = document.querySelector('#blog-text').value;
        // Send a POST request to the API endpoint
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 
            'Content-Type': 'application/json' 
        },
      });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
    }
  };
  
  document
    .querySelector('.newPost')
    .addEventListener('submit', newPostFormHandler);


