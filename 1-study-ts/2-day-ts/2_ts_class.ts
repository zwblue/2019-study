/*
  类
*/

class Car {
  engine : string // 就是构造中engine 先一定要在之前把类型确定好
  constructor(engine: string) {
    this.engine = engine
  }
  disp():void {
    console.log('发动机为：' + this.engine)
  }
}
var obj = new Car("Engine 1")
console.log(obj)
obj.disp();

/*
  类中的静态方法
*/
class Person {
  static classType = 'person'
  age: number
  name: string
  constructor(name: string, age: number) {
      this.age = age
      this.name= name
    }
  play():string {
  return '这个人的年龄是' + this.age + Person.classType
  }
  }
  console.log(Person)
  console.log(222,Person.classType)
  Person.classType = 'Animal'
  console.log(222,Person.classType)
  var zw = new Person('zuowang',23)
  console.log(333, zw,  zw.play())
 
/*
  ts类中的继承
*/
class Person1 {
  name: string
  sex: number
  age: number
  constructor (name: string, sex: number, age: number) {
    this.name = name
    this.sex = sex
    this.age = age
  }
  eat(): void {
    console.log('人都有吃的行为')
  }
}
class Student extends Person1 {
  schoolClass : string
  constructor (name: string, sex: number, age: number, schoolClass: string) {
    super(name, sex, age)
    this.schoolClass = schoolClass
  }
  eat(): void {
    super.eat()
    console.log('学生也有吃的行为。这是重写的方法')
  }
}
let  zuowang = new Student('zw',1,17,'初中三年级')
console.log(zuowang)
zuowang.eat()
console.log(zuowang instanceof Person1)
console.log(zuowang instanceof Student)

class Encapsulate { 
  str1:string = "hello" 
  private str2:string = "world" 
}
var obj1 = new Encapsulate() 
console.log(obj1.str1)     // 可访问 
// console.log(obj1.str2)   // 编译错误， str2 是私有的

interface ILoan { 
  interest:number 
  age: number
} 

class AgriLoan implements ILoan { 
  interest: number; 
  rebate:number 
  age:number
  
  constructor(interest:number,rebate:number, age: number) { 
     this.interest = interest 
     this.rebate = rebate 
     this.age =age
  } 
} 

var obj2 = new AgriLoan(10,1,1) 
console.log("利润为 : "+obj2.interest+"，抽成为 : "+obj2.rebate )