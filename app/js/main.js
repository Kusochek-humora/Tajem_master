$('.text__slider').slick({
  arrows: false,
  dots: true,
  infinite: true
});

$('.test__slider').slick({
  arrows: true,
  dots: false
  

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