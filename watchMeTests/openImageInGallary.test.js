const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;
const {snapshotElement} = require('./utils');
const {imageCandiesFocused, gallery, imageCandiesInGalleryRepo} = require('./elements');

describe('Opening Image in Gallery', async() => {
	before(async() => {
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('Check if the "Image Gallery" opens with the correct image.', async() => {

		/**
		 * Navigate to the second image.
		 */
		await suitest.press(VRC.RIGHT);
		await snapshotElement(imageCandiesFocused).timeout(2000);
		/**
		 * Open the "Image Gallery".
		 */
		await suitest.press(VRC.ENTER);
		await snapshotElement(gallery).timeout(2000);
		await snapshotElement(imageCandiesInGalleryRepo);
	});
});
