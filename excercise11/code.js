let counter = 0;

function all(promise1, promise2) {
  return promise1.then(() => {
    counter += 1;
    return promise2;
  }).then(() => {
    counter += 1;
  });
}

module.exports.all = all;
module.exports.thatCounter = counter;

// console.log(getPromise1(), getPromise2());
