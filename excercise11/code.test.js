const { all, thatCounter } = require('./code');

describe('When passed two promises', () => {
  it('both should complete', (done) => {
    let thisCounter = 0;
    function sameFun() {
      thisCounter += 1;
    }
    all(new Promise(sameFun), new Promise(sameFun)).then(() => {
      expect(thisCounter).toBe(thatCounter);
      done();
    });
  });
});

