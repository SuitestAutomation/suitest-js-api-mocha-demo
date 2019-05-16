const suitest = require('suitest-js-api');
const {PROP, COMP, VALUE} = suitest;

module.exports = {
	pausedBtnFocused: {
		selector: '\'pause\' button focused',
		props: [
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.IMAGE,
			PROP.TEXT_COLOR,
			PROP.TOP,
		]
	},
	forwardBtnFocused: {
		selector: '\'forward\' button focused',
		props: [
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.IMAGE,
			PROP.TOP,
		]
	},
	rewindBtnFocused: {
		selector: '\'rewind\' button focused',
		props: [
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.IMAGE,
			PROP.TOP,
		]
	},
	homepage: {
		selector: 'homepage',
		props: [
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.WIDTH,
		]
	},
	menu: {
		selector: 'menu',
		props: [
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.WIDTH,
		]
	},
	folderAllItemsFocused: {
		selector: 'folder (all files) focused',
		props: [
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
		]
	},
	videoBigBunnyFocused: {
		selector: 'video (big bunny) focused',
		props: [
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
			}
		]
	},
	watchmeBtnFocused: {
		selector: '\'watchme\' button focused',
		props: [
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.IMAGE,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.WIDTH
		]
	},
	pictureBtnFocused: {
		selector: '\'pictures\' button focused',
		props: [
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
			}
		]
	},
	imageCandiesFocused: {
		selector: 'image (candies) focused',
		props: [
			PROP.BORDER_COLOR,
			PROP.BORDER_STYLE,
			PROP.CLASS,
			PROP.ID,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP
		]
	},
	gallery: {
		selector: 'gallery',
		props: [
			PROP.BG_COLOR,
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.WIDTH
		]
	},
	imageCandiesInGalleryRepo: {
		selector: 'image (candies) in gallery',
		props: [
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.WIDTH
		]
	},
	folderPathImages: {
		selector: 'folder path (images)',
		props: [
			PROP.CLASS,
			PROP.HEIGHT,
			PROP.ID,
			PROP.LEFT,
			PROP.TEXT_COLOR,
			PROP.TEXT_CONTENT,
			PROP.TOP,
			PROP.WIDTH
		]
	},
	imageInFolderChariesFocused: {
		selector: 'image in folder (cherries) focused',
		props: [
			PROP.HEIGHT,
			PROP.ID,
			PROP.TEXT_COLOR,
			PROP.WIDTH
		]
	},

	/*
	* You might want to define element selectors in code instead of Element Repository
	* in case it is important for you to have branching and versioning for elements
	*/
	pageContent: {
		selector: {css: '.widget.container.filteredHolder'},
		props: {
			[PROP.CLASS]: 'widget container filteredHolder listitem active focus',
			[PROP.LEFT]: -89,
			[PROP.TOP]: 220,
		}
	},
	imageCandiesInGallery: {
		selector: {css: '#imageplayer_img'},
		props: {
			[PROP.BG_COLOR]: 'rgba(0, 0, 0, 0)',
			[PROP.IMAGE]: './api/image/6210d214-89b9-4ea6-8150-815760d695b5-093FD491'
		}
	},
	player: {
		selector: {css: '#detail-ui-container'},
		props: {
			[PROP.CLASS]: 'active componentcontainer container focus listitem widget',
			[PROP.HEIGHT]: 720,
			[PROP.WIDTH]: 1280
		}
	},
	imagesFolder: {
		selector: {css: 'div#directory-structure_WidgetStrip>div:nth-child(2)>div:nth-child(1)'},
		props: [
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
		]
	}
};
