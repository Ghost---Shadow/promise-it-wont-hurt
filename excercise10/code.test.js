const manyThen = require('./code');

describe('The test should', () => {
  it('return an array', async () => {
    const logArr = [];
    const expectedArr = [1, 2, 3, 4, 5, 'OH NOES'];
    function alwaysThrows() {
      logArr.push('OH NOES');
      throw new Error('OH NOES');
    }

    function iterate(arg) {
      logArr.push(arg);
      return arg + 1;
    }

    await manyThen(iterate, alwaysThrows);
    expect(logArr).toEqual(expectedArr);
  });
});

