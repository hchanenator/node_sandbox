var http = require('http')
var dt = require('./lib/myModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('it works!  ' + dt.myDateTime());
}).listen(8080);

