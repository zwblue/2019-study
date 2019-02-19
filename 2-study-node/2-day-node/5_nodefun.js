// 函数当参数传递
function say(word) {
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "函数入参调用");

// 在本地8888系统上写入hello world
var fs = require('fs')
var http = require("http");
var htmlFile = fs.readFileSync('./index.html')
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(htmlFile);
  response.end();
}).listen(8888);

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(9999 + ": Hello World");
  response.end();
}

http.createServer(onRequest).listen(9999);