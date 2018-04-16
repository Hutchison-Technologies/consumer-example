'use strict';

import PubSub from '@google-cloud/pubsub';

export default subscriptionName => {
  return PubSub().subscription(subscriptionName);
};
