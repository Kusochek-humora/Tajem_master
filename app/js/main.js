



  $('.burger__menu').click(function(event)
  {
    $('.menu2,.burger__menu').toggleClass('active');
  });


$('.text__slider').slick({
  arrows: false,
  dots: true,
});

$('.test__slider').slick({
  arrows: true,
  dots: false
});
$('.team__inner2').slick({
  arrows: false,
  dots: true,
  responsive: [{
      breakpoint: 940,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 706,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 631,
      settings: {
        
      }
    },

  



]

});
$('.expertise__inner2').slick({
  arrows: false,
  dots: true
});

// $(document).ready(function () {
//   $("#gallery").fancybox({
//     'autoScale': 'true',
//     'showCloseButton': 'true',
//     'showNavArrows': 'true'
//   });
// })
$('[data-fancybox="gallery"]').fancybox({
  autoScale: true,
  showCloseButton: true,
  showNavArrows: true,
  loop: true
});


  
