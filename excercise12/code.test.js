const fetchJson = require('./code');

describe('When asked for', () => {
  it('a valid json, it should return a valid JSON', (done) => {
    const expectedJson = { a: 'a' };
    fetchJson('http://localhost:1337', (val) => {
      expect(val).toEqual(expectedJson);
      done();
    });
  });
  it('an invalid json, it should return an error', (done) => {
    fetchJson('http://localhost:1337', (val) => {
      expect(val).toBe('Error');
      done();
    });
  });
});

