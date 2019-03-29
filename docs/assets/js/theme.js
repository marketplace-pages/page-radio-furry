'use strict';

/**
 * jPlayer.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initJPlayer() {
	let streamTitle, streamURL, jPRadioStream;

	streamTitle = 'Radio W.T.F. - Live Stream';
	streamURL = 'http://213.248.20.102:9000';

	jPRadioStream = {
		title: streamTitle,
		oga: streamURL
	};

	let ready = false;

	$('#jp-init-radio').jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer('setMedia', jPRadioStream);
		},
		pause: function () {
			$(this).jPlayer('clearMedia');
		},
		error: function (event) {
			if (ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
				$(this).jPlayer('setMedia', jPRadioStream).jPlayer('play');
			}
		},
		cssSelectorAncestor: '#jp-container-radio',
		swfPath: '',
		supplied: 'oga',
		preload: 'none',
		wmode: 'window',
		useStateClassSkin: true,
		autoBlur: false,
		keyEnabled: true
	});
}

/**
 * Stats.
 * ---------------------------------------------------------------------------------------------------------------------
 */

function extJS_initStats() {
	let getJSON, updateTime;
	let server, streams, nonstop, live, stream;
	let elStreamName, elStreamListeners, elStreamTitle, elStreamGenre;
	let streamName, streamListeners, streamTitle, streamGenre;

	getJSON = 'https://stream.radio.wtf/radio.status.json.xsl';
	updateTime = 2000;

	$.ajax({
		url: getJSON,
		method: 'GET',
		dataType: 'json',
		cache: false,
	}).done(function (data) {
		server = data.server;
		streams = server.streams;
		nonstop = streams['/nonstop'];
		live = streams['/live'];

		if (live === undefined || !live.name) {
			stream = nonstop;
		} else {
			stream = live;
		}

		elStreamName = $('#ice-stream-name');
		elStreamListeners = $('#ice-stream-listeners');
		elStreamTitle = $('#ice-stream-title');
		elStreamGenre = $('#ice-stream-genre');

		streamName = stream.name;
		streamListeners = stream.listeners;
		streamTitle = stream.title;
		streamGenre = stream.genre;

		elStreamName.empty().text(streamName);
		elStreamListeners.empty().text(streamListeners);
		elStreamTitle.empty().text(streamTitle);
		elStreamGenre.empty().text(streamGenre);
	});

	setTimeout(extJS_initStats, updateTime);
}

/**
 * Loading functions.
 * ---------------------------------------------------------------------------------------------------------------------
 */

$(function () {
	extJS_initJPlayer();
	//extJS_initStats();
});
