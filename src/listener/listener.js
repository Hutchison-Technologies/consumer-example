'use strict';

import parser from '../message-parser';

const messageHandler = () => {
  return message => {
    message.ack();

    const { id, data, attributes, error } = parser(message);
    if (error) {
      console.error(`ERROR PARSING MESSAGE: ${error}`);
      return;
    }

    // log the message to console
    console.log(Object.assign({ id }, data, attributes));
    return;
  };
};

const error = text => {
  return { error: text };
};
const isFunction = value => typeof value === 'function';

export default subscription => {
  if (!subscription) {
    return error('null subscription given');
  }

  const handler = messageHandler();
  // Listen for new messages indefinitely
  subscription.on(`message`, handler);
  return {};
};
