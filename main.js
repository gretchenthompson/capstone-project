document.getElementById("toggle").addEventListener("click", toggleFunction);

function toggleFunction() {
    const toggle=document.getElementById("definition");

    if (toggle.style.display === "none") {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none";
    }
  }
  

let reviewIndex = 0;
showReview();

function showReview() {
  
  const reviews = document.getElementsByClassName("myReview");
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviewIndex++;
  if (reviewIndex > reviews.length) {reviewIndex = 1}
  reviews[reviewIndex-1].style.display = "block";
  setTimeout(showReview, 3000); // Change image every 3 seconds
}