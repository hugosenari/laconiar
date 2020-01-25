import laconiar from './index';
/* eslint global-require: [0] */

describe('index.js', () => {
  it('should require something', () => {
    const { R: target } = laconiar()();
    const expected = require('fs');
    expect(target.fs).toEqual(expected);
    expect(target.fs).toEqual(expected);
  });

  it('should use defaults', () => {
    const expected = 'spam';
    const { R: target } = laconiar({ fs: expected })();
    expect(target.fs).toEqual(expected);
    expect(target.fs).toEqual(expected);
  });

  it('should return laconiar factory', () => {
    const target = laconiar().factory();
    const expected = require('fs');
    expect(target.fs).toEqual(expected);
  });

  it('should return laconiar factory', () => {
    const { R: target } = laconiar({}, `${__dirname}/`)();
    const expected = laconiar;
    expect(target.index).toEqual(expected);
  });
});
