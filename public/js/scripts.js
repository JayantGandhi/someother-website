$(document).ready(function(){
  var $siteLogo  = $('.navbar-brand');
  var $viewContainer = $('.view-container');

  $viewContainer.on('change', function(e){
    console.log('woohooo!');
    if($(e.target).children('.view-fram').hasClass('ng-animate')) {
      $siteLogo.addClass('spin');
    } else {
      $siteLogo.removeClass('spin');
    }
  });

  var dragAndDrop = function () {

  }
});