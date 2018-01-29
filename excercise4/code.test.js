const promise = require('./code');

describe('It should', () => {
  it('throw an error', async () => {
    await promise.then((msg) => {
      expect(msg).toBe('I FIRED');
    }, (err) => {
      expect(err).toBeFalsy();
    });
  });
});

