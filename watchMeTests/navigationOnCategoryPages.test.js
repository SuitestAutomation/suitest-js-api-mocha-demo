const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;
const {pictureBtnFocused, watchmeBtnFocused, pageContent} = require('./elements');
const {snapshotElement} = require('./utils');


describe('Navigation on Category Pages', async() => {
	before(async() => {
		await suitest.startTest('WatchMe test', {name: 'Navigation'});
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('Should work as expected', async() => {
		/**
		 *  Navigation through the categories in the menu bar functions correctly
		 *  and category pages have the right content
		 */
		await suitest.press(VRC.UP);
		await snapshotElement(watchmeBtnFocused);
		/**
		 * Navigate to "Pictures" category and open it. 
		 */
		await suitest.press(VRC.RIGHT).repeat(2);
		await snapshotElement(pictureBtnFocused);
		await assert.press(VRC.ENTER);
		await snapshotElement(pageContent);
		/**
		 * Navigate to" Videos" category, open it.
		 */
		await suitest.press([VRC.UP, VRC.RIGHT, VRC.ENTER]);
		await snapshotElement(pageContent);
	});
});
