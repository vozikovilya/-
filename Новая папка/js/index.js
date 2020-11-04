$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.nav__list').toggleClass('active');
  });
});



var mySwiper = new Swiper('.section-first__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  slideClass: 'section-first__slide',
  wrapperClass: 'section-first__wrapper',

  pagination: {
    el: '.section-first__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.section-first__button--next',
    prevEl: '.section-first__button--prev',
  },
});


$( "#accordion" ).accordion({
  collapsible: true,
  icons: false,
  heightStyle: "content",
}
);