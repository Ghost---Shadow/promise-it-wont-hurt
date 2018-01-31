const all = require('./code');

describe('When passed two promises', () => {
  it('with numbers, both should complete', (done) => {
    let thisCounter = 0;
    const expectedOutput = [1, 2];
    function sameFun(resolve) {
      thisCounter += 1;
      resolve(thisCounter);
    }
    all(new Promise(sameFun), new Promise(sameFun)).then((arr) => {
      expect(arr).toEqual(expectedOutput);
      done();
    });
  });

  it('with strings, both should complete', (done) => {
    let thisCounter = 0;
    const expectedOutput = ['abc', 'def'];
    function sameFun(resolve) {
      thisCounter += 1;
      resolve(expectedOutput[thisCounter - 1]);
    }
    all(new Promise(sameFun), new Promise(sameFun)).then((arr) => {
      expect(arr).toEqual(expectedOutput);
      done();
    });
  });

  it('with undefined, both should complete', (done) => {
    const expectedOutput = [undefined, undefined];
    function sameFun(resolve) {
      resolve();
    }
    all(new Promise(sameFun), new Promise(sameFun)).then((arr) => {
      expect(arr).toEqual(expectedOutput);
      done();
    });
  });
});

