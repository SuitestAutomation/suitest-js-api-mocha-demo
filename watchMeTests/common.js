const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VALUE} = suitest;

module.exports = {

	snippetHomepageOpened: async() => {
		await assert.openApp();
		await assert.element('homepage').matches([
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.WIDTH,
		]).timeout(10000);
		await assert.element('menu').matches([
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.WIDTH,
		]);
		await assert.element('folder (all files) focused').matches([
			PROP.BORDER_COLOR,
			PROP.BORDER_STYLE,
			PROP.CLASS,
			{
				name: PROP.HEIGHT,
				val: VALUE.REPO,
				type: COMP.APPROX,
				deviation: 1,
			},
			PROP.ID,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			{
				name: PROP.WIDTH,
				val: VALUE.REPO,
				type: COMP.APPROX,
				deviation: 1,
			},
		]);
	},

	snippetOpenVideo: async() => {
		await assert.openApp();
		await assert.press(VRC.RIGHT).until(
			suitest.element('video (big bunny) focused').matches([
				PROP.BORDER_COLOR,
				PROP.BORDER_STYLE,
				PROP.CLASS,
				{
					name: PROP.HEIGHT,
					val: VALUE.REPO,
					type: COMP.APPROX,
					deviation: 1,
				},
				PROP.ID,
				{
					name: PROP.LEFT,
					val: VALUE.REPO,
					type: COMP.APPROX,
					deviation: 3,
				},
				PROP.TEXT_COLOR,
				PROP.TEXT_CONTENT,
				PROP.TOP,
				{
					name: PROP.WIDTH,
					val: VALUE.REPO,
					type: COMP.APPROX,
					deviation: 1,
				},
			])
		).interval(1000).repeat(7);
		await assert.press(VRC.ENTER);
	}

};
