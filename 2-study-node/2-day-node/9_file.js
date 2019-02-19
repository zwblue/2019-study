var fs = require("fs");
// 文件 file

// 1、打开文件 ===> fs.open(path, flags[, mode], callback)  
// path - 文件的路径
// flags - 文件打开的行为。具体值详见下文
// 异步打开文件
// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
// callback - 回调函数，带有两个参数如：callback(err, fd)。
/*
  r	以读取模式打开文件。如果文件不存在抛出异常。
  r+	以读写模式打开文件。如果文件不存在抛出异常。
  rs	以同步的方式读取文件。
  rs+	以同步的方式读取和写入文件。
  w	以写入模式打开文件，如果文件不存在则创建。
  wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
  w+	以读写模式打开文件，如果文件不存在则创建。
  wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
  a	以追加模式打开文件，如果文件不存在则创建。
  ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
  a+	以读取追加模式打开文件，如果文件不存在则创建。
  ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
*/

// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(3333, fd)
//   console.log("文件打开成功！");     
// });

 
// 2、获取文件信息 ===> fs.stat(path, callback)
/*
  stats.isFile()	如果是文件返回 true，否则返回 false。
  stats.isDirectory()	如果是目录返回 true，否则返回 false。
  stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
  stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
  stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
  stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
  stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
*/

// fs.stat('input.txt',function(err, stats) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log('读取文件信息成功', stats)
//   console.log("读取文件信息成功");     
//   // 检测文件类型
//   console.log("是否为文件(isFile) ? " + stats.isFile());
//   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });

// 3、写入文件内容 ===> fs.writeFile(file, data[, options], callback)file - 文件名或文件描述符。
/*
  file - 文件名或文件描述符。
  data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
  options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
  callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
*/

// console.log("准备写入文件");
// fs.writeFile('input.txt', '我是通过fs.writeFile 写入文件的内容',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("--------我是分割线-------------")
//    console.log("读取写入的数据！");
//    fs.readFile('input.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });


// 4、读取文件 ===> fs.read(fd, buffer, offset, length, position, callback)
/*
  fd - 通过 fs.open() 方法返回的文件描述符。
  buffer - 数据写入的缓冲区。
  offset - 缓冲区写入的写入偏移量。
  length - 要从文件中读取的字节数。
  position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
  callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
*/


// var buf = new Buffer.alloc(100); 
// // buffer的长度大概为12
// console.log(8888, "准备打开已存在的文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！", fd);
//    console.log("准备读取文件：");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + "  字节被读取");
      
//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//       fs.close(fd, function(err){
//         if (err){
//            console.log(err);
//         } 
//         console.log("文件关闭成功");
//      });
//    });
// });


// 4、关闭文件 ===> fs.close(fd, callback)  
/*
  fd - 通过 fs.open() 方法返回的文件描述符。
  callback - 回调函数，没有参数。
*/

// 5、截取文件 ===> fs.ftruncate(fd, len, callback)  
/*
  fd - 通过 fs.open() 方法返回的文件描述符。
  len - 文件内容截取的长度
  callback - 回调函数，没有参数。
*/

// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("准备打开文件！");
//   console.log("准备读取文件：");
//   fs.ftruncate(fd,12, function(err, bytes){
//      if (err){
//         console.log(err);
//      }
//      console.log('文件截取成功。');
//      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//      if (err){
//          console.log(err);
//       }
//       console.log(bytes + "  字节被读取");
      
//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//       fs.close(fd, function(err){
//         if (err){
//            console.log(err);
//         } 
//         console.log("文件关闭成功");
//      });
//     });
//   });
// });


// 6、删除文件 ===> fs.unlink(path, callback)  
/*
  path - 文件路径
  callback - 回调函数，没有参数。
*/

// console.log("准备删除文件！");
// fs.unlink('input1.txt', function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件删除成功！");
// });

// 6、创建目录 ===> fs.mkdir(path[, options], callback)  
/*
  path - 文件路径
  recursive - 是否以递归的方式创建目录，默认为 false。  没找到区别
  mode - 设置目录权限，默认为 0777。
  callback - 回调函数，没有参数。
*/


// console.log('在当前目录创建/zw/a文件目录'); 
// // 绝对路径找不到。。。
// fs.mkdir('./zw/a', {recursive: true} ,function(err) {
//   if(err) {
//     return console.error(err)
//   }
//   console.log('目录创建成功')
// })


// 7、读取目录 ===> fs.readdir(path, callback)  
/*
  path - 文件路径
  callback - 回调函数，没有参数。
*/

// fs.readdir('./zw', function(err, files) {
//   if(err) {
//     return console.error(err);
//   }
//   files.forEach(element => {
//     console.log(element)
//   });
// })


// 8、删除目录 ===> fs.rmdir(path, callback)  
/*
  path - 文件路径
  callback - 回调函数，没有参数。
*/
console.log("准备删除目录 ./zw  注意只有文件夹内容为空时才能删除");
fs.rmdir('./zw/a', function(err) {
  if(err) {
    return console.error(err);
  }
  fs.readdir("./zw",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
  });
})

// fs.exists(path, callback) 检查指定的文件是否存在