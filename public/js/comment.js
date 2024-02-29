const newCommentFormHandler = async (event) => {
  event.preventDefault();
  console.log("in comment Form");

  // Collect values from the login form
  const commentPost = document.querySelector("#comment-text").value;
  const blogPost_Id = document.querySelector("#postId").dataset.blogid;
  // Send a POST request to the API endpoint

  console.log(blogPost_Id);
  const response = await fetch("/api/blog/comment", {
    method: "POST",
    body: JSON.stringify({ commentPost, blogPost_Id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  console.log(blogPost_Id);

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.reload();
  }
};

document
  .querySelector(".newComment")
  .addEventListener("submit", newCommentFormHandler);
