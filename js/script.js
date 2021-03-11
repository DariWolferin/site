(() => {
   window.onload = () => {
      let header__burger = document.querySelector('.menu__icon');
      let header__menu = document.querySelector('.menu__body');
      let body = document.querySelector('body');
      header__burger.addEventListener('click', (e) => {
         header__burger.classList.toggle('active');
         header__menu.classList.toggle('active');
         body.classList.toggle('lock');
      })
   }
})();
let swiperAbout = new Swiper('.about-slider__slider', {
   slidesPerView: 1,
   spaceBetween: 20,
   autoplay: true,
   speed: 1500,
   // centeredSlides: true,
   grabCursor: true,
   loop: true,
   effect: 'slide',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 15,
      },
      450: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      700: {
         slidesPerView: 3,
         spaceBetween: 25,
         centeredSlides: true,
      },
   }
});

let swiperText = new Swiper('.main__slider', {
   loop: true,
   autoplay: false,
   effect: 'fade',
});
let swiperImg = new Swiper('.main__main-slider', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   loop: true,
   autoplay: true,
   speed: 1500,
   effect: 'fade',
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   controller: {
      control: swiperText,
   },
});

let swiperTeam = new Swiper('.about-team__slider', {
   slidesPerView: 1,
   spaceBetween: 20,
   autoplay: true,
   speed: 1500,
   // centeredSlides: true,
   grabCursor: true,
   loop: true,
   effect: 'slide',
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 15,
      },
      450: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      700: {
         slidesPerView: 3,
         spaceBetween: 25,
         centeredSlides: true,
      },
   }
});

