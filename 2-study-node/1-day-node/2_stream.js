// 流
// 1、Readable  可读操作
// 2、Writable  可写操作
// 3、Duplex  可读可写操作
// 4、Transform  操作被写入数据，然后读出结果 

// stream对象都是EventEmitter的实例， 常用的事件有：
// 1、 data - 当有数据可读时触发。
// 2、 end - 没有更多的数据可读时触发。
// 3、 error - 在接收和写入过程中发生错误时触发。
// 4、 finish - 所有数据已被写入到底层系统时触发。
var fs = require('fs')
var data = ''

// 读取流

var readerStream = fs.createReadStream('input.txt')

readerStream.setEncoding('UTF8')

readerStream.on('data', function(chunk){
  // chunk 参数 返回的是文件中的数据
  data += chunk + '我是data'
  console.log(111,data)
})

readerStream.on('end', function() {
  console.log(222,data)  // 拿的是data监听器更改过后的数据
})

readerStream.on('error',function(err){
  console.log(333,err.stack)
})
console.log('程序执行完毕')

// 写入流
var fs = require("fs");
var data = '成功写入以内容，菜鸟教程官网地址：www.runoob.com';

var writerStream = fs.createWriteStream('output1.txt');
writerStream.write(data,'UTF8');

writerStream.end();
// 所有数据已被写入到底层系统时触发  写入已完成时触发
writerStream.on('finish', function() {
  console.log('finish',data) // 写入成功后，已经能拿到已经写入的数据了
  console.log("写入完成。");
});

writerStream.on('error', function(err){
  console.log(err.stack);
});
console.log("程序执行完毕");