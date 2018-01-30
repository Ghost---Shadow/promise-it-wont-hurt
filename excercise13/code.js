const qHttp = require('q-io/http');

qHttp.read('http://localhost:7000')
  .then(userId => qHttp.read(`http://localhost:7001/${userId}`))
  .then(msg => JSON.parse(msg))
  .then(console.log);
