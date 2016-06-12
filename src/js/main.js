$(function() {

  var $body = $('body'),
      $trigger = $('.js-nav-trigger'),
      $bio = $('.full-bio'),
      $viewbio = $('.js-view-bio');

  $trigger.on('click', function() {
    ($trigger, $body).toggleClass('is-active'); 
  });
  

});