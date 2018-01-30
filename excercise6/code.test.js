const promise = require('./code');

describe('The promise should', () => {
  it('reject with correct message', (done) => {
    promise.catch((err) => {
      expect(err.message).toBe('SECRET VALUE');
      done();
    });
  });
});

