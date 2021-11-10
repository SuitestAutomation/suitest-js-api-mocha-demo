const suitest = require('suitest-js-api');
const {assert, VRC, PROP} = suitest;

/**
 * Reusable helper functions, a.k.a. "Run test" line in test editor
 */
module.exports = {

	/**
	 * @description Make sure that home page is opened
	 * @returns {Promise<void>}
	 */
	async snippetHomepageOpened() {
		await assert.element('App').exists().timeout(10000);
		await assert.element('Logo').matches([
			PROP.IMAGE,
			PROP.OPACITY,
		]).timeout(5000);
		await assert.element('Caminandes 1').visible().timeout(10000);
		await assert.element('Cominandes 1 img').matches([
			PROP.IMAGE,
			PROP.IMAGE_LOAD_STATE,
		]).timeout(5000);
		await assert.element('Cominandes 1 title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(5000);
	},

	/**
	 * @description Open video to start playback
	 * @returns {Promise<void>}
	 */
	async snippetOpenBigBunnyVideo() {
		await assert.press(VRC.RIGHT).until(
			suitest.element('Big Bunny title focused').matches([
				PROP.TEXT_COLOR,
				PROP.TEXT_CONTENT,
			])
		).repeat(6).interval(800);
		await assert.press(VRC.ENTER).interval(1000);
	},

};
