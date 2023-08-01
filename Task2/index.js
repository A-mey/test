const http = require('http');
const {sum} = require('./sum');

const host = 'localhost';
const port = 8005;

const requestListener = function(_req, res) {}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
  console.log(sum([1,2,3,4,5]))
});