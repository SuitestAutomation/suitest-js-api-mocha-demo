const suitest = require('suitest-js-api');
const {snippetHomepageOpened} = require('./common');

const {assert, VRC, PROP, COMP, VIDEO_STATE} = suitest;

describe('Starting Video Playback', () => {
	before(async() => {
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('Check if the video is accessible from the "Homepage" and that playback starts correctly.', async () => {
		/**
		 * Navigate to the third video.
		 */
		await assert.press(VRC.RIGHT).until(
			suitest.element('Cominandes 3 title focused').matches([
				PROP.TEXT_COLOR,
				PROP.TEXT_CONTENT,
			])
		).repeat(5).interval(1000);
		/**
		 * Play the video.
		 */
		await assert.press(VRC.ENTER).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_URL,
				val: 'https://file.suite.st/watchmedemo/videos/03_caminandes_llamigos_1080p.mp4',
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 2000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_LENGTH,
				val: 150000,
				type: COMP.APPROX,
				deviation: 1000,
			},
		]).timeout(15000);
	});
});