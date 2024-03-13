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
document.querySelector('.updatePost').addEventListener('submit', async function(event) {
  event.preventDefault();
  const title = document.getElementById('blog-title').value;
  const content = document.getElementById('blog-content').value;
  const postId = document.getElementById('post-id').value; 

  const response = await fetch(`/api/blog/updatePost/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      // Handle success response
      console.log('Post updated successfully!');
      document.location.replace('/');
  } else {
      // Handle error response
      console.error('Failed to update post');
  }
});