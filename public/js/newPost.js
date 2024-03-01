
const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    // gets the values from the new post form
    const title = document.querySelector('#blog-title').value;
    const content = document.querySelector('#blog-text').value;
        
      // Send a POST request to the API endpoint
      const response = await fetch('/api/blog', {
        method: 'POST',
        // sends the title and content
        body: JSON.stringify({ title, content }),
        headers: { 
            'Content-Type': 'application/json' 
        },
      });
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
    }
  };
  
  document
    .querySelector('.newPost')
    .addEventListener('submit', newPostFormHandler);


