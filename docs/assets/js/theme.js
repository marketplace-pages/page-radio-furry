'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//function extJS_initJPlayer() {
//const player = new Plyr('#player', {});

document.addEventListener('DOMContentLoaded', () => {
	const source = 'http://213.248.20.102:8881';
	const audio = document.querySelector('audio');
	const player = new Plyr(audio, {});

	if (!Hls.isSupported()) {
		audio.src = source;
	} else {
		const hls = new Hls();
		hls.loadSource(source);
		hls.attachMedia(audio);
		window.hls = hls;
		player.on();
	}
	window.player = player;
});
//}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	//extJS_initJPlayer();
});
