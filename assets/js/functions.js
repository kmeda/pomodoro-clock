$(function(){


$('.bg-glow').addClass('shadow-glow');
$('.sessionMask').addClass('sessionProgBar');



window.randomize = function() {
		var rotation = Math.floor(Math.random() * 180);
		var fill_rotation = 180;
		var fix_rotation = 180 * 2;
		console.log(rotation);

		$('.session .fill, .session .mask.full').css('-webkit-transform', 'rotate(' + fill_rotation + 'deg)');
		$('.session .fill.fix').css('-webkit-transform', 'rotate(' + fix_rotation + 'deg)');


	}
	setTimeout(window.randomize, 200);
	$('.session').click(window.randomize);


});
