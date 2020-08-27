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
         arrows: true,
         slidesToShow: 1,
         responsive: [
            {
               breakpoint: 768,
               settings: "unslick",
            },
         ],
      }
   );
});

