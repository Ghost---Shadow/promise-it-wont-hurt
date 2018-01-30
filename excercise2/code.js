const promise = new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve('FULFILLED!'); // Yay! Everything went well!
  }, 300);
}));

promise.then((msg) => {
  console.log(msg);
});

module.exports = promise;
