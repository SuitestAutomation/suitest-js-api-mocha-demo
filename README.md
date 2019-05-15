# Suitest JavaScript API demo - Mocha integration

This repository holds a minimal set-up, required to launch [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) e2e tests with [Mocha test runner](https://github.com/mochajs/mocha).

## Demo set up for Suitest JS API with Mocha test runner

1. Copy `.suitestrc.dist` file as `.suitestrc` and fill in it's contents 
 with your values according to [documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).
2. Write your tests in `test/` folder. There is an example in `test/dummy.test.js`.
3. In terminal run `yarn` or `npm i`.
4. Run `yarn interactive` or `npm run interactive` for interactive mode or
 `yarn automated` or `npm run automated` for automated.
5. In order to debug your test, run `yarn debug` or `npm run debug` and connect debugger to `localhost:9121`.
 More info on debugging can be found in [our docs](https://suite.st/docs/suitest-api/debugging/).
 
 ## Example tests
 
 In `watchMeTests` folder you can find some suitest tests written for
 WatchMe app (every suitest account has this app by default). Those tests
 rely on some elements from suitest "Element repository" and configuration
 where base url set to `http://file.suite.st/sampleapp/index-hbbtv.html` - hbbtv
 configuration in WatchMe app. So make sure you properly adjusted `.suitestrc` file
and then you can launch them with `npm run interactive:watchMe` or 
`npm run automated:watchMe`.
