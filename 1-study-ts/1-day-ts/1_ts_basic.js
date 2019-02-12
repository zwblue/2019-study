/*
  基础 赋值
*/
var hello = 'hello world'; // 常量
/*
  ts 类
*/
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('Runoob');
    };
    return Site;
}());
var obj = new Site();
obj.name();
var str = 2; // 默认ts给其弄成数值
str = 10; //str 现在是 number 类型
console.log(str);
// 这个接口用来判断下面对像中属性的类型控制
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log('接口或数组');
var body = {
    0: 'zw',
    1: '12'
};
console.log(body);
