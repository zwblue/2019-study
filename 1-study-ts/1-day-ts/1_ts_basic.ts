/*
  基础 赋值
*/
const hello: string = 'hello world'  // 常量

/*
  ts 类
*/
class Site {
  name(): void {
    console.log('Runoob')
  }
}
var obj = new Site();
obj.name()

var str = 2  // 默认ts给其弄成数值
str = 10 //str 现在是 number 类型
console.log(str)

interface IPerson { 
  firstName:string, 
  lastName:string, 
  sayHi: ()=>string 
} 
// 这个接口用来判断下面对像中属性的类型控制

var customer:IPerson = { 
  firstName:"Tom",
  lastName:"Hanks", 
  sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
  firstName:"Jim",
  lastName:"Blakes", 
  sayHi: ():string =>{return "Hello!!!"} 
} 

console.log("Employee  对象 ") 
console.log(employee.firstName) 
console.log(employee.lastName)

console.log('接口或数组')
interface Person {
  [index:number]:string 
}
var body: Person ={
  0: 'zw',
  1: '12'
}



interface Person {
  age: number
}
interface Musician extends Person {
  instrument: string
}
  
var drummer = <Musician> {}
drummer.age = 27
drummer.instrument = 'music'