const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
  describe('seconds', () => {
    it('should return seconds', () => {
      const actual = formatDate(3);
      const expected = '3s';
      assert.equal(actual, expected);
    });

    it('should return 0 seconds if no value is passed', () => {
      const actual = formatDate();
      const expected = '0s';
      assert.equal(actual, expected);
    });
  });

  describe('minutes', () => {
    it('should work for one digit minutes and seconds', () => {
      const actual = formatDate(63);
      const expected = '1m 3s';
      assert.equal(actual, expected);
    });

    it('should work for 2 digits minutes and seconds', () => {
      const actual = formatDate(923);
      const expected = '15m 23s';
      assert.equal(actual, expected);
    });

    it('should return only minutes', () => {
      const actual = formatDate(900);
      const expected = '15m';
      assert.equal(actual, expected);
    });
  });

  describe('hours', () => {
    it('should work for one digit hours, minutes and seconds', () => {
      const actual = formatDate(3663);
      const expected = '1h 1m 3s';
      assert.equal(actual, expected);
    });

    it('should work for 2 digits hours, minutes and seconds', () => {
      const actual = formatDate(44123);
      const expected = '12h 15m 23s';
      assert.equal(actual, expected);
    });

    it('should work for hours only', () => {
      const actual = formatDate(43200);
      const expected = '12h';
      assert.equal(actual, expected);
    });

    it('should work for hours and minutes', () => {
      const actual = formatDate(43920);
      const expected = '12h 12m';
      assert.equal(actual, expected);
    });

    it('should work for hours and seconds', () => {
      const actual = formatDate(43250);
      const expected = '12h 50s';
      assert.equal(actual, expected);
    });
  });
});
