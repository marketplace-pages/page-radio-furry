'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(window).load(function () {

	let target = $('.player-container').closest('.mejs__container'),
		playerId = target.attr('id'),
		player = mejs.players[playerId],
		button = target.find('.mejs__playpause-button'),
		i = Math.floor((Math.random() * 1000000) + 1),
		source = 'http://213.248.20.102:8881/;';

	button.on('click', function (e) {

		if (player.media.readyState > 0) {
			player.pause();
			player.setSrc('');
			player.load();
			button.removeClass('mejs__pause').addClass('mejs__play');
		} else {
			i++;
			player.setSrc(source + '?nocache=' + i);
			player.load();
			player.play();
			button.removeClass('mejs__play').addClass('mejs__pause');
		}

		return false;
	});
});

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	extJS_initPlayer();
});
