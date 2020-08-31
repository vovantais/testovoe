$(document).ready(function () {
   function BurgerToggle() {
      let menu = $('.header__menu').removeClass('active');
      let toggle = $('.header__toggle').removeClass('active');
      $(toggle).on('click', function () {
         $(menu).toggleClass('active');
         $(this).toggleClass('active');
         $('body').toggleClass('lock');
      });
   }
   BurgerToggle();

   $('.slider').slick(
      {
         slidesToShow: 1,
         arrows: true,
         infinite: true,
         speed: 1000,
         autoplay: true,
         autoplaySpeed: 2500,
         adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 768,
               settings: "unslick",
            },
         ],
      }
   );
});

