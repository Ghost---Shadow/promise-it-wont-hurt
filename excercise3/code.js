function onReject(error) {
  console.log(error.message);
}

const promise = new Promise(((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
}));

promise.then((msg) => {
  console.log(msg);
}, onReject);

module.exports = promise;
