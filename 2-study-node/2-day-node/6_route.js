// 1、url
var http = require("http");
var url = require('url')
// var pathname = url.parse(request.url).pathname;
http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname; // 可以获得当前端口号后面的路径
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(pathname);
  response.end();
}).listen(8888);