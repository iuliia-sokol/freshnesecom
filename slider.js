// let position = 0;
// const slidesToShow = 3;
// const slidesToScroll = 2;
// const container = document.querySelector(".feedback-slider");
// const track = document.querySelector(".slider-track");
// const items = document.querySelectorAll(".feedback-item");
// const btnPrev = document.querySelector(".btn-prev");
// const btnNext = document.querySelector(".btn-next");
// const itemsCount = items.length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
//   item.style.minWidth = `$(itemWidth)px`;
// });

// btnNext.addEventListener("click", () => {
//   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//   position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//   setPosition();
//   checkBtns();
// });
// btnPrev.addEventListener("click", () => {
//   const itemsLeft = Math.abs(position) / itemWidth;
//   position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//   setPosition();
//   checkBtns();
// });

// const setPosition = () => {
//   track.style.transform = `translateX(${position}px)`;
// };
// const checkBtns = () => {
//   btnPrev.disabled = position === 0;
//   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// };
// checkBtns();

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 3,
  watchOverflow: true,
  loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
