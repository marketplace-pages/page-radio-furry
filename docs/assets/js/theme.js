'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	let elRadio = $('#radio');
	let elSource = $('#radio source').attr('src');
	let count = Math.floor((Math.random() * 1000000) + 1);
	let source = 'http://213.248.20.102:8881';

	elRadio.mediaelementplayer({
		success: function (media, node) {
			let target = $(media).closest('.mejs__container');
			let button = target.find('.mejs__playpause-button');

			media.setSrc('');

			if ( media.pause === true ) {
				alert('Paused!')
			}
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
