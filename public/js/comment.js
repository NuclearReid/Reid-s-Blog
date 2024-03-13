
// to make a new comment
const newCommentFormHandler = async (event) => {
  event.preventDefault();
  console.log("in comment Form");

  // Collects the info from the comment text box
  const commentPost = document.querySelector("#comment-text").value;
  // gets the blogPost id so the comment can then be attached to that value in the database
  // it's used so when you click on a blog post you get the comments for it
  const blogPost_Id = document.querySelector("#postId").dataset.blogid;
  
  if(!commentPost){
    alert('you need to enter a comment');
    return;
  }
  // Send a POST request to the comment api
  const response = await fetch("/api/blog/comment", {
    method: "POST",
    // sends the comment text and the blogPost (the api will add it to the database)
    body: JSON.stringify({ commentPost, blogPost_Id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // this was just for troubleshooting
  console.log(response);
  console.log(blogPost_Id);

  if (response.ok) {
    // If it talks to the api correctly
    // reloads the page so the new comment will be loaded up to/displayed
    document.location.reload();
  }
};

document
  .querySelector(".newComment")
  .addEventListener("submit", newCommentFormHandler);
/////////////////////////////////////////////////////////


// delete a comment
document.querySelectorAll(".commentInfo").forEach((deleteButton) => {
  deleteButton.addEventListener("click", async (e) => {
    console.log(e.target);
    const id = e.target.dataset.id;
    console.log(id);
    const response = await fetch(`/api/blog/comment/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.reload();
    }
  });
});
/////////////////////////////////////////////////////////

//update a comment  --> do the page render first
document.querySelector('.updateComment').addEventListener('submit', async function(event) {
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
  } else {
      // Handle error response
      console.error('Failed to update post');
  }
});
/////////////////////////////////////////////////////////





