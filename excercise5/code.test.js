const promise = require('./code');

describe('It should', () => {
  it('throw an error', (done) => {
    const myArray = [];
    const expectedArray = ['MAIN PROGRAM', 'PROMISE VALUE'];
    promise.then((msg) => {
      myArray.push(msg);
      expect(myArray).toEqual(expectedArray);
      done();
    });
    myArray.push('MAIN PROGRAM');
  });
});
