const qHttp = require('q-io/http');

function fetchJson(url1, url2, cb) {
  qHttp.read(url1)
    .then(userId => qHttp.read(`${url2}/${userId}`))
    .then(msg => JSON.parse(msg))
    .then(cb);
}

module.exports = fetchJson;
