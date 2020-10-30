// Burger Menu

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.nav__list').toggleClass('active');
  });
});

// Swiper

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

// Accordion

$( "#accordion" ).accordion({
  collapsible: true,
  icons: false,
}
);