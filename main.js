document.getElementById("toggle").addEventListener("click", toggleFunction);

document.getElementById("definition").style.display = "none";

function toggleFunction() {
  
    const toggled = document.getElementById("definition");

    if (toggled.style.display === "none") {
      toggled.style.display = "block";
    } else {
      toggled.style.display = "none";
    }
  }
  
let reviewIndex = 0;

const reviews = document.getElementsByClassName("myReview");

function showReview() {
  
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  reviewIndex++;
   
  if (reviewIndex > reviews.length) {
    reviewIndex = 1;
  }

  reviews[reviewIndex-1].style.display = "block";
  
  setTimeout(showReview, 3000); 
}

showReview();