// utils
var util = require('util'); 

/* 1、util.inherits  间接继承 */
function Base() { 
  this.name = 'base'; 
  this.base = 1991; 
  this.sayHello = function() { 
  console.log('Hello ' + this.name); 
  }; 
} 
Base.prototype.showName = function() { 
  console.log(this.name);
};
function Sub() { 
  this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objSub = new Sub(); 
objSub.showName(); 
// objSub.sayHello();   报错  他只能继承prototype原型上的方法   不能继承内部的方法


/* 2、util.inspect  输出对象为字符串，方便调试 */
var inspect = new Base()
console.log(util.inspect(inspect)); 

/* 3、util.isArray  判断是否为数组 */
var isArray1 = util.isArray('object')
var isArray2 = util.isArray([])
console.log('isArray1','isArray2',isArray1,isArray2)
/* 4、util.isRegExp  判断是否为正则表达式 */
util.isRegExp(/some regexp/)

/* 5、util.isDate()  判断是否为日期 */
util.isDate(new Date())

/* 6、util.isError()  判断是否为错误对象 */
util.isError(new Error())