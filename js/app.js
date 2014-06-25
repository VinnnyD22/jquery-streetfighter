$(document).ready(function () {

	$(".ryu").mouseenter(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	$('.ryu').mouseleave(function () {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	$('.ryu').mousedown(function () {
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show();
		$('.hadouken').animate({'left': '300px'}, 500,
			function() {
				$(this).hide();
				$(this).css({'left': '-170px'});
			}
		);		
	});

	$('.ryu').mouseup(function () {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	function playHadouken () {
		$('#hadouken-sound')[0].volume = .5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	$(document).keydown(function(x) {
		if (x.keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).keyup(function(x) {
		if(x.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-still').show();
		}
	});
		
});