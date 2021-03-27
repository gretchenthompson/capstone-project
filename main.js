// add click event to toggle button
document.getElementById("toggle").addEventListener("click", toggleFunction);

// on page load hide content div
document.getElementById("definition").style.display = "none";

function toggleFunction() {
  // get hidden content div
    const toggled = document.getElementById("definition");

    // if div is already hidden, show it
    if (toggled.style.display === "none") {
      toggled.style.display = "block";
    } else {
      // else hide it
      toggled.style.display = "none";
    }
  }
  
// on page load set index to 0
let reviewIndex = 0;

// get all reviews
const reviews = document.getElementsByClassName("myReview");

function showReview() {
  
  // hide all reviews
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  // set next review index item
  reviewIndex++;

  // if the index item is more than the list of reviews 
  // is long, reset index back to the first item
  if (reviewIndex > reviews.length) {
    reviewIndex = 1;
  }

  // subtract 1 to get 
  //to proper index that starts at 0
  reviews[reviewIndex-1].style.display = "block";
  
  // after 3 seconds run this function again forever
  setTimeout(showReview, 3000); 
}

// run function for the first time
// on page load
showReview();