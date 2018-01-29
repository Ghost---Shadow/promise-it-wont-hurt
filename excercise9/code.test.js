const jsonParser = require('./code');

describe('When passed a JSON file which is', () => {
  it('valid, it should return it', async () => {
    const expectedJson = { a: 'b' };
    await jsonParser(JSON.stringify(expectedJson)).then((jsonObj) => {
      expect(jsonObj).toEqual(expectedJson);
    });
  });
  it('invalid, it should throw error', async () => {
    await jsonParser('No').then((jsonObj) => {
      expect(jsonObj).toBeFalsy();
    }).catch((err) => {
      expect(err).toMatch(/Unexpected token/i);
    });
  });
  it('empty, it should return it', async () => {
    const expectedJson = {};
    await jsonParser(JSON.stringify(expectedJson)).then((jsonObj) => {
      expect(jsonObj).toEqual(expectedJson);
    });
  });
});
