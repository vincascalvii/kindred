/* ================================================================

	PLAY / PAUSE AUDIO

================================================================ */

(function() {

	var play = document.querySelectorAll('.audio-play');

	play.addEventListener('click', function() {
		var audio = this.nextElementSibling;
		if ( audio ) audio.play();
		this.classList.add('disabled');
		play.parentNode.querySelector('.audio-pause').classList.add('active');
	}, false);

	var pause = document.querySelectorAll('.audio-pause');

	pause.addEventListener('click', function() {
		var audio = this.parentNode.querySelector('.audio-file');
		if ( audio ) audio.pause();
		this.classList.remove('active');
		this.nextElementSibling.classList.remove('disabled');
	}, false);


})();