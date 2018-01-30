function parsePromised(jsonString) {
  return new Promise((resolve, reject) => {
    let jsonObj;
    try {
      jsonObj = JSON.parse(jsonString);
    } catch (err) {
      reject(err.message);
    }
    resolve(jsonObj);
  });
}

parsePromised(process.argv[2]).then(console.log)
  .catch(console.log);

module.exports = parsePromised;
