$(document).ready(function () {
	$('form').on('submit', function (event) {
		event.preventDefault();

		var total = getScore();
		var message;
		
		if (total < 42*1/4) {
			message = "Awesome! You are completely fine.";
		} else if (total < 42*1/2) {
			message = "You are still fine! Don't be sad.";
		} else if (total < 42*3/4) {
			message = "You're most likely to be a lonley person.";
		} else {
			message = "You would need a doctor!";
		}

		var your_score = "<div id='score'>You're score is " + total + '.</div>';
		message = '<div id="message">' + message + '</div>';

		$('#container').html(your_score + message);

		function getScore() {
			var score = 0;

			for (var i = 1; i < 15; i++) {
				var question = i;

				var answer = $('input[name=q' + i + ']:checked').val();

				if (answer) {
					score += parseInt(answer);
				}
			}
			return score;
		};
	});
});