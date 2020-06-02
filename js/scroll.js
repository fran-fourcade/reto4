$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $('.navbar').addClass('afterscroll');
  } else {
    $('.navbar').removeClass('afterscroll');
  }
})