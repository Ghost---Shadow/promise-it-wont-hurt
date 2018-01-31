function all(promise1, promise2) {
  let counter = 0;
  return new Promise((resolve) => {
    const valArray = [];
    function incrementAndResolve(index, val) {
      counter += 1;
      valArray[index] = val;
      if (counter === 2) {
        resolve(valArray);
      }
    }
    promise1.then((val) => {
      incrementAndResolve(0, val);
    });
    promise2.then((val) => {
      incrementAndResolve(1, val);
    });
  });
}

module.exports = all;

// all(getPromise1(), getPromise2()).then(console.log);
