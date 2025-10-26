var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const element = document.querySelector(".swiper-button-prev");
element.remove();

const del = document.querySelector(".swiper-button-next");
del.remove();
