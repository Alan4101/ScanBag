const slider_about = {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination-about',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-about-btn-prev',
    prevEl: '.swiper-about-btn-next',
    clickable: true,

  },
  slidesPerView: 5,
  spaceBetween: 30,
        
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // when window width is >= 769px
      769: {
        slidesPerView: 5,
        spaceBetween: 30
      }
  }
}
const slider_feedback = {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination-feedback',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,

  },
  slidesPerView: 3,
  spaceBetween: 30,
        
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // when window width is >= 769px
      769: {
        slidesPerView: 3,
        spaceBetween: 30
      }
  }
}
// const swiper = new Swiper('.swiper', slider_feedback);

const swiper1 = new Swiper('.swiper-about', slider_about);