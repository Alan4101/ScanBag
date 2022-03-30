console.log('slider');
const swiper = new Swiper('.swiper', {
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
  });