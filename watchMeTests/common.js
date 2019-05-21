const suitest = require('suitest-js-api');
const {assert, VRC} = suitest;
const {homepage, menu, folderAllItemsFocused, videoBigBunnyFocused} = require('./elements');
const {snapshotElement} = require('./utils');

/**
 * Reusable helper functions, a.k.a. "Run test" line in test editor
 */
module.exports = {

	/**
	 * Make sure that home page is opened
	 * @returns {Promise<void>}
	 */
	snippetHomepageOpened: async() => {
		await snapshotElement(homepage).timeout(10000);
		await snapshotElement(menu);
		await snapshotElement(folderAllItemsFocused);
	},

	/**
	 * Open video to start playback
	 * @returns {Promise<void>}
	 */
	snippetOpenVideo: async() => {
		await assert.press(VRC.RIGHT).until(
			suitest.element(videoBigBunnyFocused.selector).matches(videoBigBunnyFocused.props)
		).interval(1000).repeat(7);
		await assert.press(VRC.ENTER);
	}

};
