// delete a post
const delButtonHandler = async (event) => {
  console.log('the delete button');
  if (event.target.hasAttribute('data-deleteId')){
    const id = event.target.getAttribute('data-deleteId');
    
    // Send a DELETE request to the comment api
    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });
    if(response.ok){
      document.location.reload();
    } else{
      alert('unable to delete the post');
    }
  }
 };
  
  document
    .querySelector(".postInfo")
    .addEventListener("click", delButtonHandler);
  /////////////////////////////////////////////////////////

  