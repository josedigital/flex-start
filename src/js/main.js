$(function() {

  // hamburger menu
  var $body = $('body'),
      $trigger = $('.js-nav-trigger');

  $trigger.on('click', function() {
    ($trigger, $body).toggleClass('is-active'); 
  });
  

});