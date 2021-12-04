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
	document.getElementById('light-toggle').addEventListener('click', function() {
		document.querySelector('.header').classList.toggle('light-off');
		document.querySelector('.main').classList.toggle('light-off');
		document.querySelector('.footer').classList.toggle('light-off');
		document.querySelector('.sidebar').classList.toggle('light-off');
		this.classList.toggle('active');
	}, false);


	// Show / hide the volume control
	document.getElementById('volume-control').addEventListener('click', function() {
		document.querySelector('.volume-setting').classList.toggle('active');
		this.classList.toggle('active');
	}, false);

	// Polyfill for "matches" - IE9+
	if ( !Element.prototype.matches ) {
		Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector;
	}

	// Polyfill for "closest" - IE9+
	if ( !Element.prototype.closest ) {
		Element.prototype.closest = function(s) {
			var el = this;
			do {
				if ( Element.prototype.matches.call(el, s) ) return el;
				el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);
			return null;
		};
	}

	// Hide the volume setting if clicked outside
	window.addEventListener('click', function(e) {
		if ( !e.target.id = 'volume-control' &&
			 !e.target.closest('.volume-setting') ) {
			document.querySelector('.volume-setting').classList.remove('active');
		}
	}, false);

	// Adjust the volume of all audio files at once
	document.querySelector('input[name="volume-control"]').addEventListener('change', function() {
		var audio = document.querySelectorAll('.audio-file');
		for ( var i = 0; i < audio.length; i++ ) {
			audio[i].volume = this.value;
		}
		document.querySelector('.volume-setting output').value = Math.round( this.value * 100 );
	}, false);

	// Hide the volume setting on mobile Safari because it will not work
	var ua = window.navigator.userAgent;
	var iOS = !!ua.match(/iP(ad|hone)/i);
	var webkit = !!ua.match(/WebKit/i);
	var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
	if ( iOSSafari ) document.querySelector('.volume').style.display = 'none';

})();