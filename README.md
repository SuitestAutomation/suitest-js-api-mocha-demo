# Suitest JavaScript API demo - Mocha integration

This repository holds a minimal set-up, required to launch [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) e2e tests with [Mocha test runner](https://github.com/mochajs/mocha).

## Demo set up for Suitest JS API with Mocha test runner

1. Copy `.suitestrc.dist` file as `.suitestrc` and fill in it's contents 
with your values according to [documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).
2. Write your tests in `test/` folder. There is an example in `test/dummy.test.js`.
3. In terminal run `yarn` or `npm i`.
4. Run `yarn run interactive` or `npm run interactive` for interactive mode or
 `yarn run automated` or `npm run automated` for automated.

## Debugging tests with IDE

**Webstorm**
Create `Node.js` configuration where
1. _Working directory_ path to project root folder.
2. _JavaScript file_ `./node_modules/.bin/suitest`.
3. _Application parameters_ `interactive --inspect-brk=[available port for debugger] ./node_modules/.bin/_mocha --no-timeouts --exit`.

**VS code**
Debug config can be like:
```
{
    "type": "node",
    "request": "launch",
    "name": "Any config name",
    "program": "${workspaceFolder}/node_modules/.bin/suitest",
    "args": [
         "interactive",
         "--inspect-brk=9121",
         "./node_modules/.bin/_mocha",
         "--no-timeouts",
         "--exit"
    ],
    "cwd": "${workspaceFolder}",
    "autoAttachChildProcesses": true
}
```

## Debugging test with chrome devtools

1. Run `npm run debug`.
2. Open `http://localhost:[port]/json/list`.
3. Visit path specified in `devtoolsFrontendUrl`.
