const fetchJson = require('./code');
const http = require('http');

describe('When asked for', () => {
  let server1;
  let server2;
  const port1 = 8001;
  const port2 = 8002;
  const url1 = `http://localhost:${port1}`;
  const url2 = `http://localhost:${port2}`;
  const expectedJson = { a: 'a' };
  beforeEach(() => {
    server1 = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(expectedJson));
    }).listen(port1);
    server2 = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(expectedJson));
    }).listen(port2);
  });

  afterEach(() => {
    server1.close(() => { console.log('Server1 closed!'); });
    server2.close(() => { console.log('Server1 closed!'); });
  });

  it('a valid json, it should return a valid JSON', (done) => {
    fetchJson('', (val) => {
      expect(val).toEqual(expectedJson);
      done();
    });
  });
  it('an invalid json, it should return an error', (done) => {
    done();
    fetchJson('http://localhost:1387', (val) => {
      expect(val).toBe('Error');
      done();
    });
  });
});

