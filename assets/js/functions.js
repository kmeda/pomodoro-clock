$(function(){
// Animate breathing effect

//
// Get Session input
    var sessionInput = 1;
    $('.sessionCount').html(sessionInput);
    $('.psession').click(function(){
      sessionInput += 1;
      if (sessionInput < 1) {
        sessionInput = 1;
      }
      $('.sessionCount').html(sessionInput);
      console.log(sessionInput);
    });

    $('.msession').click(function(){
      sessionInput -= 1;
      if (sessionInput < 1) {
        sessionInput = 1;
      }
      $('.sessionCount').html(sessionInput);
      console.log(sessionInput);
    });

// Get Break input
    var breakInput = 1;
    $('.breakCount').html(breakInput);
    $('.pbreak').click(function(){
      breakInput += 1;
      if (breakInput < 1) {
        breakInput = 1;
      }
      $('.breakCount').html(breakInput);
      console.log(breakInput);
    });

    $('.mbreak').click(function(){
      breakInput -= 1;
      if (breakInput < 1) {
        breakInput = 1;
      }
      $('.breakCount').html(breakInput);
      console.log(breakInput);
    });

// Animate Session radial progress

    $('.session').css('background-color', '#00FFA7');
    window.session = function() {
		var fill_rotation = 180;
		var fix_rotation = 180 * 2;
    $('.session').css('background-color', 'transparent');
		$('.session .fill, .session .mask.full').css('-webkit-transform', 'rotate(' + fill_rotation + 'deg)');
		$('.session .fill.fix').css('-webkit-transform', 'rotate(' + fix_rotation + 'deg)');
    $('.session .mask, .session .fill').css('transition', 'transform '+ (sessionInput*10) +'s');
    $('.break, .breakMask').hide();

  	};
  	$('.maskContainer2').click(function(){
      window.session();
      $('.bg-glow').addClass('shadow-glow');
      $('.maskContainer').addClass('sessionProgBar');

    });

// Animate Break radial progress

    //$('.break').css('background-color', '#FF3100');
    window.break = function() {
		var fill_rotation = 180;
		var fix_rotation = 180 * 2;
    $('.break').css('background-color', 'transparent');
		$('.break .fill, .break .mask.full').css('-webkit-transform', 'rotate(' + fill_rotation + 'deg)');
		$('.break .fill.fix').css('-webkit-transform', 'rotate(' + fix_rotation + 'deg)');
    $('.break .mask, .break .fill').css('transition', 'transform '+ (breakInput*10) +'s');


  	};
  	$('.breakMask').click(function(){
      window.break();
      //$('.bg-glow').addClass('shadow-glow');
      //$('.sessionMask').addClass('sessionProgBar');

    });
// Reset All
  $('.resetAll').click(function(){
    location.reload();
  });

});
