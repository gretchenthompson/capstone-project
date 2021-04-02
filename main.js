//add click event to toggle button
document.getElementById("toggle").addEventListener("click", toggleFunction);
//on page load hide content div
document.getElementById("definition").style.display = "none";

function toggleFunction() {
    //get hidden content div
    const toggled = document.getElementById("definition");
    //if div is already hidden, show it
    if (toggled.style.display === "none") {
      toggled.style.display = "block";
    } else {
      //else hide it
      toggled.style.display = "none";
    }
  }
  
//on page load set review to 0 
let review = 0;
//get all reviews
const reviews = document.getElementsByClassName("myReview");

function showReview() {
  //hide all reviews
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  //set next review 
  review++;
  //if review is more than the list of reviews length
  //reset review back to first
  if (review > reviews.length) {
    review = 1;
  }
  //subtract 1 to get to review that starts at 0
  reviews[review-1].style.display = "block";
  //after 3 seconds run this function again 
  setTimeout(showReview, 3000); 
}
//run function for the first time on page load
showReview();