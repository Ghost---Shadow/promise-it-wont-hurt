function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(arg) {
  console.log(arg);
  return arg + 1;
}

function manyThen(myFun1, errFun) {
  return Promise.resolve(1)
    .then(myFun1)
    .then(myFun1)
    .then(myFun1)
    .then(myFun1)
    .then(myFun1)
    .then(errFun)
    .then(myFun1)
    .then(myFun1)
    .then(myFun1)
    .then(myFun1)
    .then(myFun1)
    .catch(err => console.log(err.message));
}

// manyThen(iterate, alwaysThrows);

module.exports = manyThen;
