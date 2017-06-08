
/*
	        	TIMER
	----------------------------
		Coded in CoffeeScript
		   by Fabiane Lima
 */

(function() {
  $(function() {
    var func, paused, starttimer;
    paused = true;
    starttimer = void 0;
    func = {
      start: function() {
        paused = false;
        func.timer();
        return $('.dimmer').fadeOut();
      },
      pause: function() {
        paused = true;
        $('.dimmer').fadeIn();
        return $('.modal').html('<h1>Timer paused</h1><p>Click the button below to continue.</p><button class="continue">Continue</button>');
      },
      "continue": function() {
        paused = false;
        return $('.dimmer').fadeOut();
      },
      timer: function() {
        var s;
        s = 45;
        return starttimer = setInterval(function() {
          if (paused !== true) {
            if (s > 0) {
              s--;
              $('.timer .time').html(s);
            }
            if (s <= 0) {
              s = 0;
              clearInterval(starttimer);
              $('.dimmer').fadeIn();
              $('.modal').html('<h1>Time out!</h1><p>Click the button below to start over.</p><button class="again">Restart</button>');
            }
            return $('.bar .innerbar').css({
              width: (100 / 45) * s + '%'
            });
          }
        }, 1000);
      }
    };
    $(document).on('click', '.start', function() {
      return func.start();
    });
    $(document).on('click', '.pause', function() {
      return func.pause();
    });
    $(document).on('click', '.continue', function() {
      return func["continue"]();
    });
    return $(document).on('click', '.again', function() {
      return location.reload();
    });
  });

}).call(this);
