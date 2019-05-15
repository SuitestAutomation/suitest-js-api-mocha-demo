const {snippetHomepageOpened} = require('./common');
const {pageContent} = require('./selectors');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;


describe('Navigation on Category Pages', async() => {
	before(async() => {
		await snippetHomepageOpened();
	});

	it(`Check if the navigation through the categories in the menu bar functions correctly
	 and if the category pages have the right content`, async() => {
		await suitest.press(VRC.UP);
		await assert.element('\'watchme\' button focused').matches([
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.IMAGE,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.WIDTH,
		]).timeout(2000);
		/**
		 * Navigate to "Pictures" category and open it. 
		 */
		await suitest.press(VRC.RIGHT).repeat(2);
		await assert.element('\'pictures\' button focused').matches([
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.IMAGE,
			PROP.LEFT,
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			{
				name: PROP.WIDTH,
				val: VALUE.REPO,
				type: COMP.APPROX,
				deviation: 5,
			},
		]).timeout(2000);
		await assert.press(VRC.ENTER);
		await assert.element(pageContent).matches({
			[PROP.CLASS]: 'widget container filteredHolder listitem active focus',
			[PROP.LEFT]: -89,
			[PROP.TOP]: 220,
		}).timeout(2000);
		/**
		 * Navigate to" Videos" category, open it.
		 */
		await assert.press([VRC.UP, VRC.RIGHT, VRC.ENTER]);
		await assert.element(pageContent).matches({
			[PROP.CLASS]: 'widget container filteredHolder listitem active focus',
			[PROP.LEFT]: -89,
			[PROP.TOP]: 220,
		}).timeout(2000);
	});
});
