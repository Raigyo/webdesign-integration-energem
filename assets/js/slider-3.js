const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel");
const item = document.querySelector(".item");
const images = document.querySelector(".carousel").children;
const dots = document.querySelectorAll(".dot");
const totalImages = images.length;
let index = 0;
const intervalId = setInterval("nextImage('next')", 4000);

dots.forEach((dot, i) => {
  console.log(dot);
  if (dot.classList.contains("active")) dot.classList.remove("active");
  if (i === index) dot.classList.add("active");
});

prev.addEventListener("click", () => {
  clearTimeout(intervalId);
  nextImage("prev");
});

next.addEventListener("click", () => {
  clearTimeout(intervalId);
  nextImage("next");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}

function slideImage() {
  carousel.forEach((item) => {
    item.style.transform = "translateX(${-100 * index}%)";
  });
}
