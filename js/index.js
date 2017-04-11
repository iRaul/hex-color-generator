$(document).ready(function() {

  var btn = $('.change-color-btn');
  var hexColor = $('.hex-color');

  var generate = function() {
    newColour = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

    if(newColour.length < 7) {
      generate();
    }
  }

  btn.on('click', function() {
      generate();

      $('body').css('background-color', newColour);
      btn.css('color', newColour);
      hexColor.text(newColour);
  });
});
