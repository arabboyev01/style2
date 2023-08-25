const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Start the slider
showSlide(currentIndex);
