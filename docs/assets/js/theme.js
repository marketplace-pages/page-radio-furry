'use strict';

/**
 * BG Images.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_getBgImages() {
	let messages, attachments, attach_url;
	let images = [];

	$.ajax({
		url: 'assets/img/images.json',
		method: 'GET',
		dataType: 'json',
		cache: false
	}).done(function (data) {
		messages = data;
		let i = 0;
		const j = messages.length;
		for (; i < j; i++) {
			attachments = messages[i].attachments;

			let m = 0;
			const n = attachments.length;
			for (; m < n; m++) {
				attach_url = attachments[m].url;
				images.push(attachments[m].url);

			}

		}
	});

	return images;
}

function extJS_runBgImages() {
	let images, element, index, iterations;
	images = extJS_getBgImages();
	element = $('#section-main');

	index = 0;
	iterations = 0;

	let updateImage01 = function () {
		if (index >= images.length) {
			index = 0;
			iterations++;
		}

		element.css('background-image', 'url(' + images[index] + ')').fadeIn(1000);

		index++;
	};

	let updateImage02 = function () {
		element.fadeOut(1000, updateImage01);
	};

	updateImage02();

	setInterval(updateImage02, 10000);
}

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
	let count = extJS_getRadioRandomSource;
	let source = 'http://213.248.20.102:8881/';

	elRadio.mediaelementplayer({
		defaultAudioWidth: 150,
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

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	extJS_runBgImages();
	extJS_runRadio();
});
