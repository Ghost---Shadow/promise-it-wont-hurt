const myFun = require('./code');

describe('When passed two promise returning functions', () => {
  it('should return valid string', (done) => {
    const s1 = 'str1';
    const s2 = 'str2';
    function f1() {
      return new Promise((resolve) => {
        resolve(s1);
      });
    }

    function f2(arg) {
      return new Promise((resolve) => {
        resolve(arg + s2);
      });
    }

    function cb(arg) {
      expect(arg).toBe(s1 + s2);
      done();
    }
    myFun(f1, f2, cb);
  });
});

