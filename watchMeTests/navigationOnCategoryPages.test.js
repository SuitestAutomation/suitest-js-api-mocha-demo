const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;
const {pictureBtnFocused, watchmeBtnFocused, pageContent} = require('./elements');
const {snapshotElement} = require('./utils');


describe('Navigation on Category Pages', async() => {
	before(async() => {
		await snippetHomepageOpened();
	});

	it(`Check if the navigation through the categories in the menu bar functions correctly
	 and if the category pages have the right content`, async() => {
		await suitest.press(VRC.UP);
		await snapshotElement(watchmeBtnFocused).timeout(2000);
		/**
		 * Navigate to "Pictures" category and open it. 
		 */
		await suitest.press(VRC.RIGHT).repeat(2);
		await snapshotElement(pictureBtnFocused).timeout(2000);
		await assert.press(VRC.ENTER);
		await snapshotElement(pageContent).timeout(2000);
		/**
		 * Navigate to" Videos" category, open it.
		 */
		await suitest.press([VRC.UP, VRC.RIGHT, VRC.ENTER]);
		await snapshotElement(pageContent).timeout(2000);
	});
});
