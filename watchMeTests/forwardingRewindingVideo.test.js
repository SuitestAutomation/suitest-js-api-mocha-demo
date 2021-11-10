const {snippetHomepageOpened, snippetOpenVideo, snippetOpenBigBunnyVideo} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VIDEO_STATE} = suitest;

describe('Forwarding/Rewinding Video', async() => {
	before(async() => {
		await assert.openApp();
		await snippetHomepageOpened();
		/**
		 * Navigate to the video and open it using the snippet test.
		 */
		await snippetOpenBigBunnyVideo();
	});

	it('Check if video playback can be forwarded and then rewound with the buttons in the control panel.', async () => {
		await assert.video().matches([
			{
				name: PROP.VIDEO_URL,
				val: 'https://file.suite.st/watchmedemo/videos/BigBuckBunny.mp4',
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 3000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_LENGTH,
				val: 596000,
				type: COMP.APPROX,
				deviation: 1000,
			},
		]).timeout(15000);
		/**
		 * Focus the "Forward" button on the control panel.
		 */
		await assert.press(VRC.DOWN).interval(1000);
		await assert.element('Pause button focused').matches([
			PROP.BG_COLOR,
			PROP.OPACITY,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		await assert.press(VRC.RIGHT).until(
			suitest.element('Forward button focused').matches([
				PROP.BG_COLOR,
				PROP.OPACITY,
				PROP.TEXT_CONTENT,
			])
		).repeat(3).interval(1000);
		/**
		 * Forward the video.
		 */
		await assert.press(VRC.ENTER).repeat(4).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 45000,
				type: COMP.GREATER,
			},
		]).timeout(5000);
		/**
		 * Focus the "Rewind" button and rewind video.
		 */
		await assert.press(VRC.LEFT).until(
			suitest.element('Rewind button focused').matches([
				PROP.BG_COLOR,
				PROP.OPACITY,
				PROP.TEXT_CONTENT,
			])
		).repeat(6).interval(1000);
		await assert.press(VRC.ENTER).repeat(4).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 30000,
				type: COMP.LESSER,
			},
		]).timeout(3000);
	});
});

