// 模块系统

// 1、 export的用法  对外暴露属性或方法，
// export是一个对象，强行给其加属性。export.xx 抛出，并接收时用变量.xx 来使用
var hello = require('./hello')
console.log('hello',hello) // hello { world: function }
hello.world()

// 2、 module.exports 的用法  暴露对象(类似class，包含了很多属性和方法)
// 直接将 = 后面的对象抛出来用 require接收 来赋给一个变量
var hello = require('./hello1')
console.log('hello',hello) // hello { world: function }
hello()