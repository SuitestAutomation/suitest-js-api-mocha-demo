const suitest = require('suitest-js-api');
const {snippetHomepageOpened, snippetOpenBigBunnyVideo} = require("./common");
const {assert, VRC, PROP, COMP, VIDEO_STATE} = suitest;


describe('Pausing/Resuming Video', () => {
	before(async() => {
		await assert.openApp();
		await snippetHomepageOpened();
		/**
		 * Navigate to the video and open it using the snippet test.
		 */
		await snippetOpenBigBunnyVideo();
	});

	it('Check if video playback can be paused and then resumed with the buttons in the control panel.', async () => {
		await assert.video().matches([
			{
				name: PROP.VIDEO_POSITION,
				val: 1000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
		]).timeout(10000);
		/**
		 * Focus the "Pause" button on the control panel.
		 */
		await assert.press(VRC.DOWN).interval(1000);
		await assert.element('Pause button focused').matches([
			PROP.BG_COLOR,
			PROP.OPACITY,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * Pause the video.
		 */
		await assert.press(VRC.ENTER).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PAUSED,
			},
		]).timeout(5000);
		await assert.sleep(2000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PAUSED,
			},
		]).timeout(2000);
		await assert.element('Play button focused').matches([
			PROP.BG_COLOR,
			PROP.OPACITY,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * Resume the video for several seconds.
		 */
		await assert.press(VRC.ENTER).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
		]).timeout(2000);
		await assert.sleep(2000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_POSITION,
				val: 1000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
		]).timeout(2000);
	});
});