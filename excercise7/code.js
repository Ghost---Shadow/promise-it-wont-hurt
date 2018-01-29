first().then(msg =>
  second(msg)).then((msg) => {
  console.log(msg);
});
