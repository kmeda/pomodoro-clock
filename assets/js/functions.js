$(function(){

//Initialize
$('.session').css('background-color', '#00FFA7');
$('.breakTimer').hide();

var sessionInterval = 6
var breakInterval = 6

// Animate Session radial progress
    window.session = function() {
                      $('.session').css('background-color', 'transparent');
                      $('.break, .breakMask').hide();
                      $('.bg-glow').addClass('shadow-glow');
                      $('.maskContainer').addClass('innerShadow');
                      $('.session .fill, .session .mask.full').css({"animation": "sessionAnimate180"+ " "+(sessionInput*sessionInterval)+"s" +" "+ "linear"+" "+ "forwards"+" "+ "running"+" "+ "1" });
                      $('.session .fill.fix').css({"animation": "sessionAnimate360"+ " "+(sessionInput*sessionInterval)+"s"+" "+"linear"+" "+"forwards" +" "+ "running"+" "+ "1"});
                      $('.maskContainer').html("<div class='alert'>Session</div>");

    };
// Animate Break radial progress
      window.break = function() {
                      $('.break').css('background-color', 'transparent');
                      $('.breakTimer').show();
                      $('.sessionTimer').hide();
                      $('.break .fill, .break .mask.full').css({"animation": "sessionAnimate180"+ " "+(breakInput*breakInterval)+"s" +" "+ "linear"+ " "+"forwards"+" "+ "running"+" "+ "1" });
                      $('.break .fill.fix').css({"animation": "sessionAnimate360"+ " "+(breakInput*breakInterval)+"s"+" "+"linear"+ " "+"forwards" +" "+ "running"+" "+ "1"});
                      $('.breakMask').append("<div class='alert'>Break</div>");

  	};

// Reset All
  $('.resetAll').click(function(){
    location.reload();
  });

// Get Session input
                    var sessionInput = 1;
                    $('.sessionCount').html('0'+sessionInput);
                    $('.min').html('00:');
                    $('.sec').html('00');

                    $('.psession').click(function(){
                      sessionInput += 1;
                      sessionClock.totalSeconds = sessionInput * sessionInterval;
                      if (sessionInput < 1) {
                        sessionInput = 1;
                      }
                      if (sessionInput.toString().length < 2 ) {
                          $('.sessionCount').html('0'+sessionInput);
                      } else {
                        $('.sessionCount').html(sessionInput);
                      }
                    });

                    $('.msession').click(function(){
                      sessionInput -= 1;
                      sessionClock.totalSeconds = sessionInput * sessionInterval;
                      if (sessionInput < 1) {
                        sessionInput = 1;
                      }
                      if (sessionInput.toString().length < 2 ) {
                          $('.sessionCount').html('0'+sessionInput);
                      } else {
                        $('.sessionCount').html(sessionInput);
                      }

                    });
// Get Break input
                      var breakInput = 1;
                      $('.breakCount').html('0'+breakInput);
                      //$('.min').html('00:');
                      //$('.sec').html('00');
                      //$('.sessionTimer').html('00:00:00');
                      $('.pbreak').click(function(){
                        breakInput += 1;
                        breakClock.totalSeconds = breakInput * breakInterval;
                        if (breakInput < 1) {
                          breakInput = 1;

                        }
                        if (breakInput.toString().length < 2 ) {
                            $('.breakCount').html('0'+breakInput);
                            //$('.sessionTimer').html('0'+sessionInput+':00:00');
                        } else {
                          $('.breakCount').html(breakInput);
                          //$('.sessionTimer').html(sessionInput+':00:00');
                        }


                      });

                      $('.mbreak').click(function(){
                        breakInput -= 1;
                        breakClock.totalSeconds = breakInput * breakInterval;
                        if (breakInput < 1) {
                          breakInput = 1;
                        }
                        if (breakInput.toString().length < 2 ) {
                            $('.breakCount').html('0'+breakInput);
                            //$('.sessionTimer').html('0'+sessionInput+':00:00');
                        } else {
                          $('.breakCount').html(breakInput);
                          //$('.sessionTimer').html(sessionInput+':00:00');
                        }

                      });
//Timer run
var sessionClock = {
  totalSeconds: sessionInput * sessionInterval,

  start: function () {
    var self = this;
		function pad(val) { return val > 9 ? val : "0" + val; }
    this.interval = setInterval(function () {
      self.totalSeconds -= 1;
      console.log(sessionClock.totalSeconds);

      $(".sessionTimer .min").html(pad(Math.floor(self.totalSeconds / 60 % 60) + ':'));
      $(".sessionTimer .sec").html(pad(parseInt(self.totalSeconds % 60)));

      if (sessionClock.totalSeconds === 0) {
        sessionClock.pause();
        $('.break, .breakMask').show();
        window.break();
        breakClock.start();
      }
    }, 1000);
  },

  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },

  resume: function () {
    if (!this.interval) this.start();
  }
};

var breakClock = {
  totalSeconds: breakInput * breakInterval,

  start: function () {
    var self = this;
		function pad(val) { return val > 9 ? val : "0" + val; }
    this.interval = setInterval(function () {
      self.totalSeconds -= 1;

      $(".breakTimer .min").html(pad(Math.floor(self.totalSeconds / 60 % 60) + ':'));
      $(".breakTimer .sec").html(pad(parseInt(self.totalSeconds % 60)));

      if (breakClock.totalSeconds === 0) {
        breakClock.pause();

      }
    }, 1000);
  },

  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },

  resume: function () {
    if (!this.interval) this.start();
  }
};

//Main Control Click
$('.maskContainer2').click(function(){
  window.session();
  sessionClock.start();
  $(this).hide();
  $('.psession, .msession, .pbreak, .mbreak').css('pointer-events', 'none');
});

});





//Main loop
/*

//Toggle switch to pause/continue
$('.sessionTimer').click(function(){
  $('.session .fill, .session .mask.full, .session .fill.fix').toggleClass('paused');
  if (!sessionClock.interval) {
    sessionClock.resume();
  } else {
    sessionClock.pause();
  }

});

$('.breakTimer').click(function(){
  $('.break .fill, .break .mask.full, .break .fill.fix').toggleClass('paused');
  if (!breakClock.interval) {
    breakClock.resume();
  } else {
    breakClock.pause();
  }

});


$('.session .fill, .session .mask.full, .session .fill.fix').on('animationend', function(){
  sessionClock.pause();
  breakClock.start();
  //breakClock.pause();
  $('.break, .breakMask').show();
  //$('.breakMask').css('pointer-events', 'all');
  //$('.breakTimer').css('z-index', '14');
  window.break();

});



On click - start animation for session duration - One click event && start timer based on input
On click - pause animation - Toggle event - Pause timer
On click - resume animation - Toggle event - Continue timer
On session animation complete - detect event & stop animation - Clear timer
Start break animation - ?? On detection start animation for break duration - Break timer on
On click - pause animation - Toggle event - Timer Pause
On click - resume - Toggle event - Timer continue
On animation complete - detect event & stop animation - timer clear


Loop this while input > 0 and On first click event







*/
