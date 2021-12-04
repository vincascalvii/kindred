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