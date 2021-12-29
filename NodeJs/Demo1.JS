// console.log("Hello World!");
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from server!');
    res.end();
})

const PORT = 8000;

server.listen(PORT);

console.log(`Server is runing on port ${PORT}`);