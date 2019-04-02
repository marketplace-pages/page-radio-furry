'use strict';

/**
 * BG Images.
 * ---------------------------------------------------------------------------------------------------------------------
 */

let discordImages = {
	api: async function (server, channel, limit = '', token = '') {
		const api = discord.api.channelMessages(channel, limit);
		let meta, response, messages;

		meta = {
			method: 'GET',
			localCache: true,
			headers: new Headers({
				'Authorization': 'Bot ' + atob(token)
			}),
		};

		response = await fetch(api, meta);
		messages = await response.json();

		return messages;
	},
	out: async function (server, channel, limit = '', token = '') {
		let messages, attachments, attach_url;
		let images = [];

		messages = await this.api(server, channel, limit, token);

		let i = 0;
		const j = messages.length;

		for (; i < j; i++) {
			attachments = messages[i].attachments;

			let m = 0;
			const n = attachments.length;
			for (; m < n; m++) {
				attach_url = attachments[m].url;

				if (attachments.width !== null) {
					images.push(attach_url);
				}
			}

		}

		return images;
	}
};

async function extJS_runBgImages() {
	let images, element, index, iterations;

	images = await discordImages.out(
		'303327594793795588',
		'303556951672094722',
		'100',
		'TlRNNE5qZzFPREF4TVRRME1qVTBORGMxLkR5NW9fQS5mbTlpdkxCYUt2aTlaZE5JRW9KUGtSQ0Q1V0k='
	);

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