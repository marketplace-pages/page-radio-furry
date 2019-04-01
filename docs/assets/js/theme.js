'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	let elPlayer = $('#player');
	elPlayer.mediaelementplayer({
		success: function (player, node) {
			$(player).closest('.mejs__container').attr('lang', mejs.i18n.language());
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
