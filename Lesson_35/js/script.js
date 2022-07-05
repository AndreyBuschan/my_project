$(document).ready(function () {
  $('.sliderHeader').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
/*     autoplay: true */
  });
});

$(document).ready(function () {
  $('.sliderGitar').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true
  });
});

$(document).ready(function () {
  $('.sliderPartners').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true
  });
});

