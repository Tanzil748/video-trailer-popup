const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", function () {
  trailerContainerEl.classList.remove("active");
});

closeEl.addEventListener("click", function () {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
