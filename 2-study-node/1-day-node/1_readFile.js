// 1、阻塞代码实例   同步
var fs = require('fs')
var data = fs.readFileSync('input.txt');
console.log(data)
console.log(data.toString())
console.log('1同步执行结束')

// 2、非阻塞代码实例   异步
fs.readFile('input.txt', function(err, data) {
  if(err) return console.log(err);
  console.log(data.toString())
})
console.log('2程序执行结束')

