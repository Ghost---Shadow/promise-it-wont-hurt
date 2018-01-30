function attachTitle(name) {
  return `DR. ${name}`;
}

module.exports.attachTitle = attachTitle;

const promise = new Promise((resolve, reject) => resolve('MANHATTAN'));

promise.then(attachTitle).then(console.log);

module.exports.promise = promise;
