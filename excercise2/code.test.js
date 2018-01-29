const promise = require('./code');

describe('It should', () => {
  it('return the same string', async () => {
    await promise.then((msg) => {
      expect(msg).toBe('FULFILLED!');
    });
  });
});

