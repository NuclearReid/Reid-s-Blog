// // delete a post
document.querySelectorAll(".postInfo").forEach((deleteButton) => {
  deleteButton.addEventListener("click", async (e) => {
    console.log(e.target);
    const id = e.target.dataset.id;
    console.log(id);
    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.reload();
    }
  });
});
/////////////////////////////////////////////////////////





  // update a blog post
  const updatePostHandler = async (event) => {
    event.preventDefault();
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
  }