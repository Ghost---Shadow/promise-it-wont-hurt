const promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch((err) => {
  console.log(err.message);
});

module.exports = promise;
