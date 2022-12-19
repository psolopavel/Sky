const swiper = new Swiper('.main-comp__slider', {
   loop: true,
   spaceBetween: 30,
   centeredSlides: true,
   touchRatio: 2,
   grabCursor: true,
   parallax: true,
   slidesPerView: 1,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   breakpoints: {
      200: {
         slidesPerView: 0.7,
      },
      600: {
         slidesPerView: 1,
      }
   },
   speed: 1200,
   // pagination: {
   //    el: '.controll-main-block__dots',
   //    clickable: true,
   // },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});

const swiper2 = new Swiper('.b-swipper__slider', {
   loop: true,
   spaceBetween: 30,
   centeredSlides: true,
   touchRatio: 2,
   grabCursor: true,
   parallax: true,
   slidesPerView: 1,
   speed: 1200,
   autoplay: {
      delay: 6000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.b-swipper__next',
      prevEl: '.b-swipper__prev',
   },
   // breakpoints: {
   //    200: {
   //       slidesPerView: 0.7,
   //    },
   //    600: {
   //       slidesPerView: 1,
   //    }
   // },
   pagination: {
      el: '.b-swipper__dots',
      clickable: true,
   },
   // on: {
   //   init: function (swiper){
   //     const AllSlider = document.querySelector('.fraction-controll__all')
   //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
   //   },
   //   slideChange: function (swiper){
   //     const CurentSlider = document.querySelector('.fraction-controll__current')
   //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
   //   },
   // },
});

const swiper3 = new Swiper('.swipper-pupels__slider', {
   loop: true,
   spaceBetween: 64,
   touchRatio: 2,
   grabCursor: true,
   parallax: true,
   speed: 1200,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   // navigation: {
   //    nextEl: '.b-swipper__next',
   //    prevEl: '.b-swipper__prev',
   // },
   breakpoints: {
      300: {
         slidesPerView: 1,
      },
      1100: {
         slidesPerView: 1.5,
      }
   },
   pagination: {
      el: '.swipper-pupels__dots',
      clickable: true,
   },
   // on: {
   //   init: function (swiper){
   //     const AllSlider = document.querySelector('.fraction-controll__all')
   //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
   //   },
   //   slideChange: function (swiper){
   //     const CurentSlider = document.querySelector('.fraction-controll__current')
   //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
   //   },
   // },
});