const { attachTitle, promise } = require('./code');

describe('When passed', () => {
  it('MANHATTAN it should return DR. MANHATTAN', () => {
    expect(attachTitle('MANHATTAN')).toBe('DR. MANHATTAN');
  });
  it('empty string it should return DR. ', () => {
    expect(attachTitle('')).toBe('DR. ');
  });
  it('the promise, it should fulfill it', async () => {
    await promise.then(attachTitle).then((output) => {
      expect(output).toBe('DR. MANHATTAN');
    });
  });
});

