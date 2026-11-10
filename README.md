# Suitest JavaScript API demo - Mocha integration

This repository contains a minimal setup for running [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) end-to-end tests using the [Mocha test runner](https://github.com/mochajs/mocha).

## Setup

### 1. Configure Suitest credentials

Copy `.suitestrc.dist` to `.suitestrc` in the project root and fill in the required values according to the [Suitest environment setup documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).

The `.suitestrc.dist` file contains placeholders for your Suitest credentials, device configuration, and presets. Replace the placeholder values with valid IDs and credentials for your environment.

The repository also includes example configuration files in `config-examples/`. These demonstrate how to define configurations for single-device and parallel execution, including how to share credentials using `extends`.

Keep your local `.suitestrc` file private if it contains credentials or other sensitive values.

### 2. Install dependencies

Install the project dependencies using either npm or Yarn:

```bash
npm install
```

Alternatively:

```bash
yarn
```

### 3. Run the tests

The default test scripts target the `test/` directory. The included dummy test can run against any HTML-based application, so you can use your own application for testing.

#### Single-device execution

Run the dummy test using the default configuration:

```bash
npm run start
```

#### Parallel execution

Run the dummy test using the parallel configuration:

```bash
npm run parallel
```

The parallel scripts explicitly load `config-examples/.suitestrc.parallel.json`. This configuration uses `presets` to define the device and application configuration for each test run.

**Important:** Explicit top-level `deviceId` and `appConfigId` values take precedence over presets. When running with presets, make sure these fields are not set in the effective configuration.

### 4. Debugging

To debug a test, run:

```bash
npm run start:debug
```

The debugger starts with `--inspect-brk=9121`. Connect your debugger to `localhost:9121`.

For more information, see the [Suitest debugging documentation](https://suite.st/docs/suitest-api/debugging/).

## Configuration files

The `config-examples/` directory contains the following examples:

| File | Purpose |
| --- | --- |
| `.suitestrc.base.json` | Shared Suitest credentials (`tokenId` and `tokenPassword`) |
| `.suitestrc.json` | Example configuration for running tests on a single device |
| `.suitestrc.parallel.json` | Example configuration for running tests using presets |

The example configurations use `extends` to inherit shared settings from `.suitestrc.base.json`, avoiding duplicated credentials.

The `extends` value is a path to another configuration file, resolved relative to the directory containing the file that declares it. Relative paths can point to files in the same directory or elsewhere in the project.

These files are examples for reference. Adapt them to your environment before running tests.

## Available commands

| Command | Description |
| --- | --- |
| `npm run start` | Run the dummy test with the JUnit reporter |
| `npm run start:logs` | Run the dummy test and save Suitest logs to `e2e/` |
| `npm run start:debug` | Start the debugger and run the debug test |
| `npm run start:repl` | Run the REPL test |
| `npm run parallel` | Run the dummy test using the parallel configuration |
| `npm run parallel:logs` | Run the dummy test in parallel and save Suitest logs |
| `npm run start:watchMe` | Run the WatchMe tests with the JUnit reporter |
| `npm run parallel:watchMe` | Run the WatchMe tests using the parallel configuration |
| `npm run parallel:watchMe:junit` | Run parallel WatchMe tests and generate separate JUnit XML reports |
| `npm run parallel:watchMe:junit:win` | Windows variant of the parallel JUnit command |
| `npm run parallel:watchMe:xunit` | Run parallel WatchMe tests using Mocha's xunit reporter |
| `npm run parallel:watchMe:xunit:win` | Windows variant of the parallel xunit command |
| `npm run parallel:watchMe:tap` | Run parallel WatchMe tests using the TAP reporter |
| `npm run parallel:watchMe:mochawesome` | Run parallel WatchMe tests and generate Mochawesome HTML and JSON reports |
| `npm run parallel:watchMe:mochawesome:win` | Windows variant of the parallel Mochawesome command |
| `npm run parallel:slack-reporter` | Run the dummy test using the Slack reporter |
| `npm run parallel:slack-reporter:win` | Windows variant of the parallel Slack reporter command |

## Example tests

The `watchMeTests/` directory contains Suitest tests for the WatchMe app, which is available by default in every Suitest account.

These tests rely on elements defined in the Suitest Element Repository and on an application configuration whose base URL is set to [https://watchme.suite.st/hbbtv.html](https://watchme.suite.st/hbbtv.html). This corresponds to the HbbTV configuration in the WatchMe app.

Make sure your device, application configuration, credentials, and Element Repository are set up correctly before running these tests.

Run the tests on a single device:

```bash
npm run start:watchMe
```

Or run them using the parallel configuration:

```bash
npm run parallel:watchMe
```

## Reporters

This repository includes examples of different Mocha reporters. The parallel WatchMe scripts demonstrate how to generate reports for individual devices.

### JUnit reporter (`mocha-junit-reporter`)

Example scripts:

- `parallel:watchMe:junit`
- `parallel:watchMe:junit:win`

These scripts generate JUnit XML reports in `reports/junit/`, using `SUITEST_DEVICE_ID` to distinguish the output files.

To view the reports, run:

```bash
npx xunit-viewer --results=./reports/junit --server
```

### XUnit reporter

Example scripts:

- `parallel:watchMe:xunit`
- `parallel:watchMe:xunit:win`

These scripts generate XML reports in `reports/xunit/`. Make sure the output directory exists before running the tests.

To view the reports, run:

```bash
npx xunit-viewer --results=./reports/xunit --server
```

### Mochawesome reporter

Example scripts:

- `parallel:watchMe:mochawesome`
- `parallel:watchMe:mochawesome:win`

These scripts generate HTML and JSON reports in `reports/html/`. The report filenames and titles include the device ID.

### TAP reporter

Example script: `parallel:watchMe:tap`

This script runs the WatchMe tests using Mocha's TAP reporter.

### Slack reporter (`mocha-ci-slack-reporter`)

To use the Slack reporter, install it as a development dependency:

```bash
npm install --save-dev mocha-ci-slack-reporter
```

The reporter requires the following options:

- `username` — the name displayed as the sender.
- `channel` — the Slack channel where reports are sent.
- `url` — the Incoming Webhook URL from your Slack application.
- `testTitle` — the title of the report message. You can include `SUITEST_DEVICE_ID` to identify the device.

Example scripts:

- `parallel:slack-reporter`
- `parallel:slack-reporter:win`

See the [mocha-ci-slack-reporter documentation](https://github.com/hiddentao/mocha-ci-slack-reporter#usage) for details on configuring the reporter.

**Security note:** Incoming Webhook URLs contain secrets. Never commit them to the repository or publish them in public sources.