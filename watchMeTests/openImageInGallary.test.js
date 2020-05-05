const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC} = suitest;
const {snapshotElement} = require('./utils');
const {imageCandiesFocused, gallery, imageCandiesInGalleryRepo} = require('./elements');

describe('Image gallery', async() => {

	before(async() => {
		await suitest.startTest();
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('should open correct image', async() => {
		/**
		 * Navigate to the second image.
		 */
		await suitest.press(VRC.RIGHT);
		await snapshotElement(imageCandiesFocused);
		/**
		 * Open the "Image Gallery".
		 */
		await suitest.press(VRC.ENTER);
		await snapshotElement(gallery);
		await snapshotElement(imageCandiesInGalleryRepo);
	});

});
