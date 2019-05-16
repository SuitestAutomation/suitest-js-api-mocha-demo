const suitest = require('suitest-js-api');
const {assert, VRC} = suitest;
const {homepage, menu, folderAllItemsFocused, videoBigBunnyFocused} = require('./elements');
const {snapshotElement} = require('./utils');

module.exports = {

	snippetHomepageOpened: async() => {
		await snapshotElement(homepage).timeout(10000);
		await snapshotElement(menu);
		await snapshotElement(folderAllItemsFocused);
	},

	snippetOpenVideo: async() => {
		await assert.press(VRC.RIGHT).until(
			suitest.element(videoBigBunnyFocused.selector).matches(videoBigBunnyFocused.props)
		).interval(1000).repeat(7);
		await assert.press(VRC.ENTER);
	}

};
