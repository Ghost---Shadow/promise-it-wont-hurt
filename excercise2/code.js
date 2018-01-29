const promise = new Promise(((fulfill, reject) => {
  setTimeout(() => {
    fulfill('FULFILLED!'); // Yay! Everything went well!
  }, 300);
}));

promise.then((msg) => {
  console.log(msg);
});

module.exports = promise;
