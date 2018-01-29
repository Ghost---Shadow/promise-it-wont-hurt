function parsePromised(jsonString) {
  return new Promise((success, fail) => {
    let jsonObj;
    try {
      jsonObj = JSON.parse(jsonString);
    } catch (err) {
      fail(err.message);
    }
    success(jsonObj);
  });
}

parsePromised(process.argv[2]).then(console.log)
  .catch(console.log);

module.exports = parsePromised;
