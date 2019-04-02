'use strict';

/**
 * Radio.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_getRadioRandomSource() {
	let out;

	out = Math.floor((Math.random() * 1000000) + 1);

	return out;
}

function extJS_runRadio() {
	let elRadio = $('#radio');
	let count = extJS_getRadioRandomSource();
	let source = 'http://213.248.20.102:8881/';

	elRadio.mediaelementplayer({
		defaultAudioWidth: 100,
		audioVolume: 'vertical',
		audioWidth: 0,
		audioHeight: 0,
		startVolume: 0.5,
		loop: false,
		enableAutosize: false,
		enableKeyboard: false,
		features: ['playpause', 'volume'],
		showPosterWhenEnded: false,
		pauseOtherPlayers: true,
		success: function (media, node) {
			let target = $(media).closest('.mejs__container');
			let button = target.find('.mejs__playpause-button');

			media.setSrc(source + '?nocache=' + count);
			media.load();
			media.play();

			button.on('click', function (e) {
				if (media.readyState > 0) {
					media.pause();
					media.setSrc('');
					media.load();
					button.removeClass('mejs__pause').addClass('mejs__play');
				} else {
					count++;
					media.setSrc(source + '?nocache=' + count);
					media.load();
					media.play();
					button.removeClass('mejs__play').addClass('mejs__pause');
				}

				return false;
			});
		}
	});
}