
const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const content = document.querySelector('#comment-text').value;
        // Send a POST request to the API endpoint
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 
            'Content-Type': 'application/json' 
        },
      });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.reload;
    }
  };
  
  document
    .querySelector('.newComment')
    .addEventListener('submit', newCommentFormHandler);


