const qHttp = require('q-io/http');

qHttp.read('http://localhost:1337').then((data) => {
  console.log(JSON.parse(data));
});

