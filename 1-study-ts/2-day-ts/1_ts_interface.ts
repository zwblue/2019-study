/*
  接口 继承
*/


/*
  单继承
*/

interface Person {
  age: number
}
interface Musician extends Person {
  instrument: string
}
  
var drummer = <Musician> {}
drummer.age = 27
drummer.instrument = 'music'

/*
  多继承
*/
interface Person1 {
  age: number
}
interface Person2 {
  name: string
}
interface Teacher extends Person1, Person2 {
  job: string
}

var teacher1: Teacher = {
  age: 12,
  name: 'zuowang',
  job: 'teacher student'
}
console.log(teacher1)