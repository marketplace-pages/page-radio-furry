'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	let elRadio = $('#radio');
	let elSource = $('#radio source').attr('src');
	let count = Math.floor((Math.random() * 1000000) + 1);

	elRadio.mediaelementplayer({
		success: function (player, node) {
			$(player).closest('.mejs__container');

			alert(player);
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
