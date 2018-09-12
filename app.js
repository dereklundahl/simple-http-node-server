
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }
});


server.listen(3000);

console.log('listneing on port 3000...');
