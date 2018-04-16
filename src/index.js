'use strict';

import Listener from './listener';
import Subscription from './subscription';

const subscription = Subscription(process.env['SUB_TOPIC']);

// Main entry point
console.info('starting up..');
Listener(subscription);
