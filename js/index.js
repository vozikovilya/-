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

var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion__panel = this.nextElementSibling;
    if (accordion__panel.style.maxHeight){
      accordion__panel.style.maxHeight = null;
    } else {
      accordion__panel.style.maxHeight = accordion__panel.scrollHeight + "px";
    } 
  });
}

