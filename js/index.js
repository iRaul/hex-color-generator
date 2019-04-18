$(document).ready(function() {

  var btn = $('.change-color-btn');
  var hexColor = $('.hex-color');

  var generate = function() {
    newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

    if(newColor.length < 7) {
      generate();
    }
  }

  btn.on('click', function() {
      generate();

      $('body').css('background-color', newColor);
      btn.css('color', newColor);
      hexColor.val(newColor);
  });

  hexColor.on('click', function() {
    $(".copied").fadeIn(1200).fadeOut(1800);
    $(this).focus();
    $(this).select();
    document.execCommand('copy');
    $(this).blur();
  });
});
