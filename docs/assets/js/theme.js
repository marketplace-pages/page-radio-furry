'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	$('#radio').mediaelementplayer({
		success: function (me) {
			// Generate random number and append to the streaming URL's get parameters
			// in order to avoid cached playback.
			let source = radio.attr('src');
			let i = Math.floor((Math.random() * 1000000) + 1);
			me.setSrc(source + '?nocache=' + i);

			// Start player.
			me.play();

			// Some mobile devices don't allow autoplay
			// Check if player is paused after me.play(); above.
			// If yes, remove src from player.
			let playPause = $('#play-pause');
			if (me.paused === true) {
				me.setSrc('');
			}

			// Play and pause player on click.
			// Increase nocache number in src url every time to avoid cached playback.
			document.getElementById('play-pause')['onclick'] = function () {
				if (me.paused) {
					i++;
					me.setSrc(source + '?nocache=' + i);
					me.play();
				} else {
					me.setSrc('');
				}
			};
		}
	});
}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	extJS_initPlayer();
});
