$(document).ready(function(){
  var $siteLogo  = $('.navbar-brand');
  var $viewFrame = $('.view-frame');

  $viewFrame.on('change', function(e){
    if($(e.target).hasClass('ng-animate')) {
      $siteLogo.addClass('spin');
    } else {
      $siteLogo.removeClass('spin');
    }
  });
});