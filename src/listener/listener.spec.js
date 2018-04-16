'use strict';

import Sut from './listener';

describe('listener', () => {
  describe('given a null subscription', () => {
    it('returns an object with an error string', () => {
      const result = Sut(null, () => {});
      expect(result.error).toBeDefined();
      expect(result.error).toEqual(expect.stringContaining('subscription'));
    });
  });
  describe('when supplied valid args', () => {
    it('assigns a handler to the message event on the subscriber', () => {
      const mockSubscriber = { on: jest.fn() };
      const routeFn = () => {};
      const result = Sut(mockSubscriber, routeFn);
      expect(result.error).not.toBeDefined();
      expect(mockSubscriber.on.mock.calls.length).toBe(1);
      expect(mockSubscriber.on.mock.calls[0][0]).toBe('message');
      expect(mockSubscriber.on.mock.calls[0][1]).toEqual(expect.any(Function));
    });
  });
});
