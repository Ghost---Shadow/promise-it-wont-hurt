/*
first().then(msg =>
  second(msg)).then((msg) => {
  console.log(msg);
});
*/

/*
first()
  .then(msg => second(msg))
  .then(console.log);
  */

function myFun(f1, f2, cb) {
  f1()
    .then(msg => f2(msg))
    .then(cb);
}

module.exports = myFun;

// myFun(first, second, console.log);
