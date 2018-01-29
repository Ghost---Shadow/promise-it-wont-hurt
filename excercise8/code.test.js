const attachTitle = require('./code');

describe('When passed', () => {
  it('MANHATTAN it should return DR. MANHATTAN', () => {
    expect(attachTitle('MANHATTAN')).toBe('DR. MANHATTAN');
  });
  it('empty string it should return DR. ', () => {
    expect(attachTitle('')).toBe('DR. ');
  });
});

