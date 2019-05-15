const {snippetHomepageOpened, snippetOpenVideo} = require('./common');

const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE, VIDEO_STATE} = suitest;

describe('Forwarding/Rewinding video', async() => {
	before(async() => {
		await snippetHomepageOpened();
		/**
		 * Navigate to the video and open it using the snippet test.
		 */
		await snippetOpenVideo();
	});

	it('forwarding rewinding video', async() => {
		await assert.video().matches([
			{
				name: PROP.VIDEO_LENGTH,
				val: 1810,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 1000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_URL,
				val: 'http://file.suite.st/sampleapp/api/video/a84d67e5-c6d4-41c0-9f70-cd8c7a5f6f4f.mp4',
			},
		]).timeout(10000);
		/**
		 * Focus the "Forward" button on the control panel.
		 */
		await assert.press(VRC.DOWN);
		await assert.element('\'pause\' button focused').matches([
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.IMAGE,
			PROP.TEXT_COLOR,
			PROP.TOP,
		]).timeout(2000);
		await assert.press(VRC.RIGHT);
		await assert.element('\'forward\' button focused').matches([
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.IMAGE,
			PROP.TOP,
		]).timeout(2000);
		/**
		 * Forward the video.
		 */
		await assert.press(VRC.ENTER).repeat(4).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_LENGTH,
				val: 30000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 1810,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_URL,
				val: 'http://file.suite.st/sampleapp/api/video/a84d67e5-c6d4-41c0-9f70-cd8c7a5f6f4f.mp4',
			},
		]).timeout(3000);
		/**
		 * Focus the Rewind button and rewind video.
		 */
		await assert.press(VRC.LEFT).until(
			suitest.element('\'rewind\' button focused').matches([
				PROP.CLASS,
				PROP.HEIGHT,
				PROP.IMAGE,
				PROP.TOP,
			])
		).repeat(6);
		await suitest.press(VRC.ENTER).repeat(6).interval(2000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_LENGTH,
				val: 35000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 7000,
				type: COMP.LESSER,
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_URL,
				val: 'http://file.suite.st/sampleapp/api/video/a84d67e5-c6d4-41c0-9f70-cd8c7a5f6f4f.mp4',
			},
		]).timeout(2000);
	});
});

