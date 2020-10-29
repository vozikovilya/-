$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.nav__list').toggleClass('active');
  });
});



var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


$( "#accordion" ).accordion({
  collapsible: true,
  icons: false,
}
);