const {snippetHomepageOpened} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;

describe('Opening Image in Gallery', async() => {
	before(async() => {
		await snippetHomepageOpened();
	});

	it('Check if the "Image Gallery" opens with the correct image.', async() => {

		/**
		 * Navigate to the second image.
		 */
		await suitest.press(VRC.RIGHT);
		await assert.element('image (candies) focused').matches([
			PROP.BORDER_COLOR,
			PROP.BORDER_STYLE,
			PROP.CLASS,
			PROP.ID,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
		]).timeout(2000);
		/**
		 * Open the "Image Gallery".
		 */
		await assert.press(VRC.ENTER);
		await assert.element('gallery').matches([
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.WIDTH,
		]).timeout(2000);
		await assert.element('image (candies) in gallery').matches([
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.WIDTH,
		]);
	});
});
