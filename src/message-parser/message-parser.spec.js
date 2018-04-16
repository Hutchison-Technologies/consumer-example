'use strict';

import Sut from './message-parser';

describe('message-parser', () => {
  describe('given null object', () => {
    const message = null;

    it('returns object with error string', () => {
      const result = Sut(message);
      expect(result.error).toEqual(expect.stringContaining('message'));
    });
  });
  describe('given object with no id', () => {
    const message = {
      data: [],
      attributes: {}
    };

    it('returns object with error string', () => {
      const result = Sut(message);
      expect(result.error).toEqual(expect.stringContaining('id'));
    });
  });
  describe('given object with no data', () => {
    const message = {
      id: 0,
      attributes: {}
    };

    it('returns object with error string', () => {
      const result = Sut(message);
      expect(result.error).toEqual(expect.stringContaining('data'));
    });
  });
  describe('given object with no attributes', () => {
    const message = {
      id: 0,
      data: []
    };

    it('returns object with error string', () => {
      const result = Sut(message);
      expect(result.error).toEqual(expect.stringContaining('attributes'));
    });
  });
  describe('given object with invalid data', () => {
    const message = {
      id: 0,
      data: "not real JSON i'm afraid",
      attributes: {}
    };

    it('returns object with error string', () => {
      const result = Sut(message);
      expect(result.error).toEqual(expect.stringContaining('JSON'));
    });
  });
  describe('given object with invalid attributes', () => {
    const message = {
      id: 0,
      data: JSON.stringify({ some: 'thing' }),
      attributes: 'clearly not an object'
    };

    it('returns object with error string', () => {
      const result = Sut(message);
      expect(result.error).toEqual(expect.stringContaining('attributes'));
    });
  });
});
