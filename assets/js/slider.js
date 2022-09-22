let slide = new Array(
  "slide-01.jpg",
  "slide-02.jpg",
  "slide-03.jpg",
  "slide-04.jpg"
);

let number = 0;

function changeSlide(direction) {
  number = number + direction;
  if (number < 0) number = slide.length - 1;
  if (number > slide.length - 1) number = 0;
  let slidePicture = "assets/img/" + slide[number];
  document.querySelector("#slide").src = slidePicture;
}
setInterval("changeSlide(1)", 4000);

function listeners() {
  let previousBtn = document.querySelector("#previous");
  let nextBtn = document.querySelector("#next");
  // Fonctions
  previousBtn.addEventListener("click", function () {
    changeSlide(-1);
  });
  nextBtn.addEventListener("click", function () {
    changeSlide(+1);
  });
}
listeners();
