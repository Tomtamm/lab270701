let http = require('http');

http.createServer(funtion (req, res) {
    res.writeHead(200, {'content-Type': 'Text/html'});
    res.end('Hello World');
}).listen(9000);
