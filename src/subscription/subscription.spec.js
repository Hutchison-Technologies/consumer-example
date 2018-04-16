'use strict';

describe('subscription', () => {
  let mockPubSubSubscription;
  let sut;
  const googleSubName = 'some cool subscription';

  beforeEach(() => {
    mockPubSubSubscription = jest.fn(subscriptionName => googleSubName);
    jest.mock('@google-cloud/pubsub', () => {
      return () => {
        return { subscription: mockPubSubSubscription };
      };
    });
    sut = require('./subscription').default;
  });

  it('calls google pubsub subscription', () => {
    const subName = 'testiepoo';
    sut(subName);
    expect(mockPubSubSubscription.mock.calls.length).toBe(1);
  });

  it('returns a subscription from google pubsub', () => {
    const subName = 'testiepoo';
    const actual = sut(subName);
    expect(actual).toEqual(googleSubName);
  });
});
