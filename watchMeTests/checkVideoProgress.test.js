const {snippetHomepageOpened, snippetOpenBigBunnyVideo} = require('./common');
const suitest = require('suitest-js-api');
const {assert, VRC, PROP, COMP, VIDEO_STATE, VALUE} = suitest;


describe('Check Video Progress', () => {
	before(async() => {
		await assert.openApp();
		await snippetHomepageOpened();
		/**
		 * Navigate to the video and open it using the snippet test.
		 */
		await snippetOpenBigBunnyVideo();
	});

	it('Check if video progress attributes are changed accordingly with video playback.', async () => {
		await assert.video().matches([
			{
				name: PROP.VIDEO_STATE,
				val: VIDEO_STATE.PLAYING,
			},
		]).timeout(8000);
		/**
		 * Check the video progress assets on the playback panel.
		 */
		await assert.element('Playback panel').visible().timeout(10000);
		await assert.element('Current time').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			{
				name: PROP.TEXT_CONTENT,
				val: '00:0',
				type: COMP.START,
			},
		]).timeout(0);
		await assert.element('Finish time').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			{
				name: PROP.TEXT_CONTENT,
				val: '09:56',
			},
		]).timeout(0);
		await assert.element('Progress bar').matches([
			PROP.BG_COLOR,
			PROP.HEIGHT,
			{
				name: PROP.WIDTH,
				val: VALUE.REPO,
				type: COMP.APPROX,
				deviation: 100,
			},
		]).timeout(0);
		await assert.element('Progress status').matches([
			PROP.BG_COLOR,
			{
				name: PROP.WIDTH,
				val: 4,
				type: COMP.EQUAL_LESSER,
			},
		]).timeout(0);
		/**
		 * Wait until video reaches 30s playback and check that progress assets are changed.
		 */
		await assert.video().matches([
			{
				name: PROP.VIDEO_POSITION,
				val: 30500,
				type: COMP.GREATER,
			},
		]).timeout(40000);
		if (await suitest.element('Playback panel').doesNot().exist()) {
			await assert.press(VRC.ENTER);
		}
		await assert.element('Current time').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			{
				name: PROP.TEXT_CONTENT,
				val: '00:3',
				type: COMP.START,
			},
		]).timeout(0);
		await assert.element('Progress status').matches([
			PROP.BG_COLOR,
			PROP.OPACITY,
			{
				name: PROP.WIDTH,
				val: 30,
				type: COMP.EQUAL_GREATER,
			},
			{
				name: PROP.WIDTH,
				val: 32,
				type: COMP.EQUAL_LESSER,
			},
		]).timeout(0);
		/**
		 * Forward the video until it reaches 5 min position and check that the progress has changed properly.
		 */
		await assert.press(VRC.RIGHT).until(
			suitest.element('Forward button focused').matches([
				PROP.BG_COLOR,
				PROP.OPACITY,
				PROP.TEXT_CONTENT,
			])
		).repeat(3).interval(1000);
		await assert.press(VRC.ENTER).until(
			suitest.video().matches([
				{
					name: PROP.VIDEO_POSITION,
					val: 290000,
					type: COMP.GREATER,
				},
			])
		).repeat(30).interval(1000);
		await assert.video().matches([
			{
				name: PROP.VIDEO_POSITION,
				val: 301000,
				type: COMP.GREATER,
			},
			{
				name: PROP.VIDEO_POSITION,
				val: 310000,
				type: COMP.LESSER,
			},
		]).timeout(20000);
		await assert.element('Current time').matches([
			PROP.OPACITY,
			PROP.TEXT_COLOR,
			{
				name: PROP.TEXT_CONTENT,
				val: '05:0',
				type: COMP.START,
			},
		]).timeout(0);
		await assert.element('Progress status').matches([
			PROP.BG_COLOR,
			PROP.OPACITY,
			{
				name: PROP.WIDTH,
				val: 314,
				type: COMP.EQUAL_LESSER,
			},
		]).timeout(0);
	});
})