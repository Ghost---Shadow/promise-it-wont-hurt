const fetchJson = require('./code');
const http = require('http');

describe('When asked for', () => {
  let server;
  const expectedJson = { a: 'a' };
  beforeEach(() => {
    server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(expectedJson));
    }).listen(1337);
  });

  afterEach(() => {
    server.close(() => { console.log('Server closed!'); });
  });

  it('a valid json, it should return a valid JSON', (done) => {
    fetchJson('http://localhost:1337', (val) => {
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

