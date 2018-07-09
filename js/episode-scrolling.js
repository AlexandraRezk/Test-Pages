$(function() {
  var $window = $(window);
  var $leftBlueShelf = $('#left-blue-shelf');
  var leftScreen = $('.left-screen').offset().top - $window.height();

  $window.on('scroll', function() {

    if (leftScreen < $window.scrollTop()) {
      $leftBlueShelf.animate({ 'left': '75%' }, 250);
    }

  });

});