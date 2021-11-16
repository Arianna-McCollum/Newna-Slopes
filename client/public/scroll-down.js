$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('our-story').offset().top }, 'slow');
      return false;
    });
  });