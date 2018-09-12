
const http = require('http');
const fs = require('fs');

const file = fs.appendFile('hello-world.txt', 'Hello to this great world', (err) =>{
  if (err) throw err;
  console.log(`The file was created and the data was appended`);
});


const server = http.createServer(file);

server.listen(3000, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log('Server is listneing on port 3000...');
});
