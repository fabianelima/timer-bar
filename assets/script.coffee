###
	        	TIMER
	----------------------------
		Coded in CoffeeScript
		   by Fabiane Lima
###
$ ->
	paused = true
	starttimer = undefined
	func =
		start: ->
			paused = false
			func.timer()
			$('.dimmer').fadeOut()

		pause: ->
			paused = true
			$('.dimmer').fadeIn()
			$('.modal').html('<h1>Timer paused</h1><p>Click the button below to continue.</p><button class="continue">Continue</button>')

		continue: ->
			paused = false
			$('.dimmer').fadeOut()

		timer: ->
			s = 45
			starttimer = setInterval ->
				if paused isnt true
					if s > 0
						s--
						$('.timer .time').html(s)
					if s <= 0
						s = 0
						clearInterval(starttimer)

						$('.dimmer').fadeIn()
						$('.modal').html('<h1>Time out!</h1><p>Click the button below to start over.</p><button class="again">Restart</button>')

					$('.bar .innerbar').css { width: (100 / 45) * s + '%' }
			, 1000

	$(document).on 'click', '.start', -> func.start()
	$(document).on 'click', '.pause', -> func.pause()
	$(document).on 'click', '.continue', -> func.continue()
	$(document).on 'click', '.again', -> location.reload()
