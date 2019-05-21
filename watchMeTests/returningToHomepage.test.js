const suitest = require('suitest-js-api');
const {assert, VRC} = suitest;
const {snippetHomepageOpened} = require('./common');
const {snapshotElement} = require('./utils');
const {player, imageCandiesFocused, folderPathImages, imageInFolderChariesFocused, imagesFolder} = require('./elements');

describe('Back navigation', async() => {

	before(async() => {
		await suitest.startTest('Back navigation');
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('should navigate to "Homepage" after "Back" button press', async() => {
		/**
		 * Navigate to the first image and open it in the "Image Gallery".
		 */
		await assert.press(VRC.RIGHT);
		await snapshotElement(imageCandiesFocused);
		await suitest.press(VRC.ENTER);
		await snapshotElement(player);
		/**
		 * Press the "Back" button and make sure that the last opened image is focused.
		 */
		await assert.press(VRC.BACK);
		await snapshotElement(imageCandiesFocused);
		/**
		 * Navigate to the "Image Folder".
		 */
		await assert.press([VRC.LEFT, VRC.DOWN]);
		/**
		 * Open the "Image Folder" and check that the image is focused.
		 */
		await assert.press(VRC.ENTER);
		await snapshotElement(folderPathImages);
		await snapshotElement(imageInFolderChariesFocused);
		/**
		 * Return to the "Homepage" and check if the last element is focused.
		 */
		await assert.press(VRC.BACK);
		await snapshotElement(imagesFolder)
	});

});
