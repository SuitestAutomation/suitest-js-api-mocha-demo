const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, VIDEO_STATE} = suitest;


describe('Returning to Homepage', () => {
	before(async() => {
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('Check if returning to the "Homepage" works with the "Back" button and that the focus has the correct position every time.', async () => {
		await assert.press(VRC.RIGHT).interval(1000);
		await assert.element('Cominandes 2 title focused').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		await assert.press(VRC.ENTER).interval(1000);
		await assert.element('Playback panel').visible().timeout(10000);
		/**
		 * Press on the "Back" button.
		 */
		await assert.press(VRC.LEFT).until(
			suitest.element('Back button focused').matches([
				PROP.BG_COLOR,
				PROP.OPACITY,
				PROP.TEXT_CONTENT,
			])
		).repeat(3).interval(1000);
		await assert.press(VRC.ENTER).interval(1000);
		/**
		 * Check that the "Homepage" is opened and "Cominandes 2" video is focused.
		 */
		await assert.video().doesNot().exist().timeout(3000);
		await assert.element('Logo').matches([
			PROP.IMAGE,
			PROP.OPACITY,
		]).timeout(2000);
		await assert.element('Cominandes 2 title focused').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * Navigate to the "Cominandes 3" video and open it.
		 */
		await assert.press(VRC.RIGHT).interval(1000);
		await assert.element('Cominandes 3 title focused').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(4000);
		/**
		 * Open the video and check that it is opened.
		 */
		await assert.press(VRC.ENTER).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
		]).timeout(12000);
		await assert.element('Playback panel').visible().timeout(5000);
		/**
		 * Return to the "Homepage" and check if the "Cominandes 3" video is focused.
		 */
		await assert.press(VRC.BACK).interval(1000);
		await assert.video().doesNot().exist().timeout(5000);
		await assert.element('Cominandes 3 title focused').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(10000);
	});
});
