const promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onRejected(err) {
  console.log(err.message);
}

promise.then(console.log, onRejected);

module.exports = promise;
