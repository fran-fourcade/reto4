$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $('.navbar').addClass('afterscroll');
    $('.navbar').addClass('has-background-black-ter');

  } else {
    $('.navbar').removeClass('has-background-black-ter');
  }
})