const promise = new Promise((success, fail) => {
  success('I FIRED');
  fail(new Error('I DID NOT FIRE'));
});

function onRejected(err) {
  console.log(err.message);
}

promise.then(console.log, onRejected);

module.exports = promise;
