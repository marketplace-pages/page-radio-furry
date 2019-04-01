'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	let elPlayer = $('#player');
	let elSource = $('#player source').attr('src');
	elPlayer.mediaelementplayer({
		success: function (player, node) {
			$(player).closest('.mejs__container');
			let count = Math.floor( ( Math.random() * 1000000 ) + 1 );
			let source = $('#player source');
			$(player).setSrc( elSource + '?nocache=' + i );

			alert(elSource);
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
