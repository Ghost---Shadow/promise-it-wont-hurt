/*
first().then(msg =>
  second(msg)).then((msg) => {
  console.log(msg);
});
*/
first()
  .then(msg => second(msg))
  .then(console.log);
