const promise = require('./code');

describe('It should', () => {
  it('throw an error', async () => {
    await promise.then((msg) => {
      expect(msg).toBeFalsy();
    }, (err) => {
      expect(err.message).toBe('REJECTED!');
    });
  });
});

