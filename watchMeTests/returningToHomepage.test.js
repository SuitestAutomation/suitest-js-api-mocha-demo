const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;
const {snippetHomepageOpened} = require('./common');
const {snapshotElement} = require('./utils');
const {player, imageCandiesFocused, folderPathImages, imageInFolderChariesFocused} = require('./elements');

describe('Returning to Homepage', async() => {
	before(async() => {
		await snippetHomepageOpened();
	});

	it(`Check if returning to the "Homepage" works with the "BACK" button and that the focus has the correct position
	 every time`, async() => {
		/**
		 * Navigate to the first image and open it in the "Image Gallery".
		 */
		await assert.press(VRC.RIGHT);
		await snapshotElement(imageCandiesFocused).timeout(2000);
		await suitest.press(VRC.ENTER);
		await snapshotElement(player).timeout(2000);
		/**
		 * Press the "Back" button and make sure that the last opened image is focused.
		 */
		await assert.press(VRC.BACK);
		await snapshotElement(imageCandiesFocused).timeout(2000);
		/**
		 * Navigate to the "Image Folder".
		 */
		await assert.press([VRC.LEFT,VRC.DOWN]);

		/**
		 * Open the "Image Folder" and check that the image is focused.
		 */
		await assert.press(VRC.ENTER);
		await snapshotElement(folderPathImages).timeout(2000);
		await snapshotElement(imageInFolderChariesFocused);
		/**
		 * Return to the "Homepage" and check if the last element is focused.
		 */
		await assert.press(VRC.BACK);
		await assert.element({
			css: 'div#directory-structure_WidgetStrip>div:nth-child(2)>div:nth-child(1)',
			index: 1,
		}).matches([
			{
				name: PROP.BORDER_COLOR,
				val: 'rgba(20, 23, 176, 1)',
			},
			{
				name: PROP.BORDER_STYLE,
				val: 'solid',
			},
			{
				name: PROP.CLASS,
				val: 'widget container button item folder folder-main listitem active focus buttonFocussed',
			},
			{
				name: PROP.LEFT,
				val: 31,
			},
			{
				name: PROP.TEXT_COLOR,
				val: 'rgba(255, 255, 255, 1)',
			},
			{
				name: PROP.TEXT_CONTENT,
				val: '7 Images',
			},
			{
				name: PROP.TOP,
				val: 315,
			},
		]).timeout(2000);
	})
});
