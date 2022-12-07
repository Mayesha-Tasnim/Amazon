//slider

let slideIndex = 0;

showSlides();

function showSlides() {
  var i;

  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//pink slider
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");
rightbtn.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide");
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftbtn.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});

//slider2
const leftbtna = document.querySelector(".l-btn-a");
const rightbtnb = document.querySelector(".r-btn-b");
rightbtnb.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide2");
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftbtna.addEventListener("click", function (event) {
  const conent = document.querySelector(".product-slide2");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});
