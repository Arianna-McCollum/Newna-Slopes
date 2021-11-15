$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#OurStory').offset().top }, 'slow');
      return false;
    });
  });