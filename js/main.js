/* ================================================================

	PLAY / PAUSE AUDIO

================================================================ */

(function() {

	var play = document.querySelectorAll('.audio-play');

	for ( var i = 0; i < play.length; i++ ) {
		play[i].addEventListener('click', function() {
			var audio = this.nextElementSibling;
			if ( audio ) audio.play();
			this.classList.add('disabled');
			this.parentNode.querySelector('.audio-pause').classList.add('active');
		}, false);
	}

	var pause = document.querySelectorAll('.audio-pause');

	for ( var j = 0; j < play.length; j++ ) {
		pause[j].addEventListener('click', function() {
			var audio = this.parentNode.querySelector('.audio-file');
			if ( audio ) audio.pause();
			this.classList.remove('active');
			this.nextElementSibling.classList.remove('disabled');
		}, false);
	}

})();

/* ================================================================

	SIDEBAR

================================================================ */

(function() {

	// Pause all sounds when this button is clicked
	document.getElementById('pause-all').addEventListener('click', function() {

		// First pause all the audio files
		var audio = document.querySelectorAll('.audio-file');
		for ( var i = 0; i < audio.length; i++ ) {
			audio[i].pause();
		}

		// Then hide all the pause buttons
		var pause = document.querySelectorAll('.audio-pause');
		for ( var j = 0; j < audio.length; j++ ) {
			pause[j].classList.remove('active');
		}

		// Then enable the icon so user can play again
		var play = document.querySelectorAll('.audio-play');
		for ( var k = 0; k < play.length; k++ ) {
			play[k].classList.remove('disabled');
		}

	}, false);


	// Toggle the brightness of the screen
	document.getElementById('.light-toggle').addEventListener('click', function() {
		document.querySelector('.header').classList.toggle('light-off');
		document.querySelector('.main').classList.toggle('light-off');
		document.querySelector('.sidebar').classList.toggle('light-off');
		this.classList.toggle('active');
	}, false);


	// Show / hide the volume control
	document.getElementById('.light-toggle').addEventListener('click', function() {
		document.querySelector('.volume-setting').classList.toggle('active');
		this.classList.toggle('active');
	}, false);


	// Adjust the volume of all audio files at once
	document.querySelector('input[name="volume-control"]').addEventListener('change', function() {
		var audio = document.querySelectorAll('.audio-file');
		for ( var i = 0; i < audio.length; i++ ) {
			audio[i].volume = this.value;
		}
	}, false);

})();