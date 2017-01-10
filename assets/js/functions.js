$(function(){
// Animate breathing effect

//
// Get Session input
    var sessionInput = 0;
    $('.sessionCount').html(sessionInput);
    $('.psession').click(function(){
      sessionInput += 1;
      if (sessionInput < 0) {
        sessionInput = 0;
      }
      $('.sessionCount').html(sessionInput);
      console.log(sessionInput);
    });

    $('.msession').click(function(){
      sessionInput -= 1;
      if (sessionInput < 0) {
        sessionInput = 0;
      }
      $('.sessionCount').html(sessionInput);
      console.log(sessionInput);
    });

// Get Break input
    var breakInput = 0;
    $('.breakCount').html(breakInput);
    $('.pbreak').click(function(){
      breakInput += 1;
      if (breakInput < 0) {
        breakInput = 0;
      }
      $('.breakCount').html(breakInput);
      console.log(breakInput);
    });

    $('.mbreak').click(function(){
      breakInput -= 1;
      if (breakInput < 0) {
        breakInput = 0;
      }
      $('.breakCount').html(breakInput);
      console.log(breakInput);
    });

// Animate Session radial progress

    $('.session').css('background-color', '#00FFA7');
    window.randomize = function() {
		var fill_rotation = 180;
		var fix_rotation = 180 * 2;
    $('.session').css('background-color', 'transparent');
		$('.session .fill, .session .mask.full').css('-webkit-transform', 'rotate(' + fill_rotation + 'deg)');
		$('.session .fill.fix').css('-webkit-transform', 'rotate(' + fix_rotation + 'deg)');
    $('.session .mask, .session .fill').css('transition', 'transform '+ (sessionInput*60) +'s');
    $('.break').hide();

  	};
  	$('.sessionMask').click(function(){
      window.randomize();
      $('.bg-glow').addClass('shadow-glow');
      $('.sessionMask').addClass('sessionProgBar');

    });

// Animate Break radial progress
// Reset All
  $('.resetAll').click(function(){
    location.reload();
  });

});
