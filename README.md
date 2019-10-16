# Suitest JavaScript API demo - Mocha integration

This repository holds a minimal set-up, required to launch [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) e2e tests with [Mocha test runner](https://github.com/mochajs/mocha).

## Demo set up for Suitest JS API with Mocha test runner

Demo set-up is targeting `test/` folder in this repo. Dummy test example would run on any HTML-based app,
so you can use your own app for testing.

1. Copy `.suitestrc.dist` file as `.suitestrc` and fill in it's contents 
 with your values according to [documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).
2. In terminal run `yarn` or `npm i`.
3. Run `yarn interactive` or `npm run interactive` for interactive mode or
 `yarn automated` or `npm run automated` for automated.
4. In order to debug your test, run `yarn debug` or `npm run debug` and connect debugger to `localhost:9121`.
 More info on debugging can be found in [our docs](https://suite.st/docs/suitest-api/debugging/).
 
 ## Example tests
 
 In `watchMeTests` folder you can find some Suitest tests written for
 WatchMe app (every Suitest account has this app by default). Those tests
 rely on some elements from Suitest "Element repository" and configuration
 where base url set to `http://file.suite.st/sampleapp/index-hbbtv.html` - HbbTv
 configuration in WatchMe app. So make sure you properly adjusted `.suitestrc` file
and then you can launch them with `npm run interactive:watchMe` or 
`npm run automated:watchMe`.

## Reporters

There are few examples of how Suitest can be used with different reporters.

### mocha-junit-reporter reporter

Example script: `automated:watchMe:junit`

Also possible to add `[hash]` to file name or path to prevent overriding results.

Results can be viewed by running `npx xunit-viewer --results=./reports/junit --port=0`

### mocha's xunit reporter

Example script: `automated:watchMe:xunit`

Directory for reports should exists otherwise it throws error.

Results can be viewed by running `npx xunit-viewer --results=./reports/xunit --port=0`

### mochawesome reporter

Example script: `automated:watchMe:mochawesome`

Generates html and json reports.

### tap reporter

Example script: `automated:watchMe:tap`
