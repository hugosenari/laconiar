import laconiar from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(laconiar('🐰')).toEqual('👉 🐰 👈');
    expect(laconiar()).toEqual('No args passed!');
  });
});
