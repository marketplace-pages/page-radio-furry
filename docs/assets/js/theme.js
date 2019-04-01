'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	let elPlayer = $('#player');
	let elSource = $('#player source').attr('src');
	let count = Math.floor( ( Math.random() * 1000000 ) + 1 );

	elPlayer.mediaelementplayer({
		success: function (player, node) {
			$(player).closest('.mejs__container');
			$(player).setSrc( elSource + '?nocache=' + count );

			alert(elSource + count);
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
