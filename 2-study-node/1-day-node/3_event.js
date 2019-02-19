// 1、事件驱动程序
// 引入 events 模块
var event = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new event.EventEmitter();
var connectHandler = function connected() {
  console.log('连接成功。')
  eventEmitter.emit('data_received');
}
// 定义事件：
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function() {
  console.log('数据接收成功。')
})
eventEmitter.emit('connection')
console.log('程序执行完毕')

var fun1 = function(arg1,arg2) {
  console.log('listener1', arg1, arg2)
}
eventEmitter.on('someEvent', fun1)
eventEmitter.addListener('someEvent', function(arg1,arg2) {
  console.log('listener3', arg1, arg2)
})
eventEmitter.on('someEvent', function(arg1,arg2) {
  console.log('listener2', arg1, arg2)
})
eventEmitter.removeListener('someEvent', fun1) // 这样可以移除，但直接回调不可好移除
eventEmitter.emit('someEvent', 'arg1 参数', 'arg2 参数')
console.log('查看这个事件监听的函数方法', eventEmitter.listeners('someEvent'))
console.log('查看这个事件监听的函数方法的个数', eventEmitter.listenerCount('someEvent'))
// eventEmitter的方法
// 1、addListener(event, listener)  与 on 的作用差不多。 
// 2、on(event, listener)
// 3、once(event, listener)
// 4、removeListener(event, listener)
// 5、removeAllListener([event])
// 6、listeners('eventName')
// 7、listenerCount('eventName')
// 8、emit('eventName',参数1, 参数2, 参数3)