const suitest = require('suitest-js-api');
const {snippetHomepageOpened} = require('./common');
const {assert, VRC, PROP} = suitest;

describe('Navigating on Homepage', () => {
	before(async () => {
		await assert.openApp();
		await snippetHomepageOpened();
	});

	it('Check if the navigation arrows function throughout the "Homepage" and that the focus is displayed correctly.', async () => {
		/**
		 * Make sure that the first element is focused
		 *
		 */
		await assert.element('Cominandes 1 title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * Navigate all the way to the last element in list
		 *
		 * To speed things up, we increased button press interval, but also increased the max limit, this way if some button presses will not be processed, there are "spare" ones.
		 *
		 */
		await assert.press(VRC.RIGHT).until(
			suitest.element('Big Bunny title focused').matches([
				PROP.TEXT_COLOR,
				PROP.TEXT_CONTENT,
			])
		).repeat(8).interval(500);
		/**
		 * Press "right" one more time to ensure nothing happens
		 *
		 */
		await assert.press(VRC.RIGHT).interval(1000);
		await assert.element('Big Bunny title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * Navigate all the way to the left
		 */
		await assert.press(VRC.LEFT).until(
			suitest.element('Cominandes 1 title focused').matches([
				PROP.TEXT_COLOR,
				PROP.TEXT_CONTENT,
			])
		).repeat(8).interval(500);
		/**
		 * Press "left" one more time to ensure nothing happens
		 */
		await assert.press(VRC.LEFT).interval(1000);
		await assert.element('Cominandes 1 title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		/**
		 * Press "up" and "down" and validate that nothing happens
		 */
		await assert.press(VRC.UP).interval(1000);
		await assert.element('Cominandes 1 title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
		await assert.press(VRC.DOWN).interval(1000);
		await assert.element('Cominandes 1 title focused').matches([
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
		]).timeout(2000);
	});
});