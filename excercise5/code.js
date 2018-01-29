const promise = new Promise((success, failure) => {
  success('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');
