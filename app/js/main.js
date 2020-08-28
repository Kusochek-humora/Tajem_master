$('.text__slider').slick({
  arrows: false,
  dots: true,
  infinite: true
});

$('.test__slider').slick({
  arrows: true,
  dots: false


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
