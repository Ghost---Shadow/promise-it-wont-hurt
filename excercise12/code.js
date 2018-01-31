const qHttp = require('q-io/http');

function fetchJson(url, cb) {
  qHttp.read().then((data) => {
    try {
      cb(JSON.parse(data));
    } catch (err) {
      cb('Error');
    }
  });
}

fetchJson('http://localhost:1337', console.log);

module.exports = fetchJson;

