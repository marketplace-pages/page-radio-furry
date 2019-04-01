'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initPlayer() {
	let elRadio = $('#radio');
	//let elSource = $('#radio source').attr('src');
	let count = Math.floor((Math.random() * 1000000) + 1);
	let source = 'http://213.248.20.102:8881/';

	elRadio.mediaelementplayer({
		success: function (media, node) {
			let target = $(media).closest('.mejs__container');
			let button = target.find('.mejs__playpause-button');

			button.on('click', function (e) {
				if (media.readyState > 0) {
					media.pause();
					media.setSrc('');
					media.load();
					button.removeClass('mejs__play').addClass('mejs__pause');
				} else {
					count++;
					media.setSrc(source + '?nocache=' + count);
					media.load();
					media.play();
					button.removeClass('mejs__pause').addClass('mejs__play');
				}
			});
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
