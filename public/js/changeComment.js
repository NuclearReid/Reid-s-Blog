//update a comment  --> do the page render first
document.querySelector('.updateComment').addEventListener('submit', async function(event) {
    event.preventDefault();
    const content = document.getElementById('comment-content').value;
    const commentId = document.getElementById('comment-id').value;
    const blogPostId = document.getElementById('blogPost-id').getAttribute('data-blogpostid'); 
    const response = await fetch(`/api/blog/updateComment/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace(`/blogpost/${blogPostId}`);
    } else {
        // Handle error response
        console.error(error);
    }
  });
  /////////////////////////////////////////////////////////
  
  
  