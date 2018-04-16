# consumer-example

An example repo to demonstrate consuming MQTT messages from GCP.

## Install

Install the dependencies by running `yarn` or `npm i` from the root directory.

## Usage

Set the environment variables:

* GOOGLE_APPLICATION_CREDENTIALS: Path to GCP service account credentials file. Service account must have sufficient PubSub privileges.
* SUB_TOPIC: Topic to subscribe to.

Then run the example with `yarn start` or `npm run start`.

## Testing

Run `yarn test` or `npm test` to run all tests.
