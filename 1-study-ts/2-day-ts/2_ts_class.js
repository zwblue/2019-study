/*
  类
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log('发动机为：' + this.engine);
    };
    return Car;
}());
var obj = new Car("Engine 1");
console.log(obj);
obj.disp();
/*
  类中的静态方法
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
    }
    Person.prototype.play = function () {
        return '这个人的年龄是' + this.age + Person.classType;
    };
    Person.classType = 'person';
    return Person;
}());
console.log(Person);
console.log(222, Person.classType);
Person.classType = 'Animal';
console.log(222, Person.classType);
var zw = new Person('zuowang', 23);
console.log(333, zw, zw.play());
/*
  ts类中的继承
*/
var Person1 = /** @class */ (function () {
    function Person1(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Person1.prototype.eat = function () {
        console.log('人都有吃的行为');
    };
    return Person1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, sex, age, schoolClass) {
        var _this = _super.call(this, name, sex, age) || this;
        _this.schoolClass = schoolClass;
        return _this;
    }
    Student.prototype.eat = function () {
        _super.prototype.eat.call(this);
        console.log('学生也有吃的行为。这是重写的方法');
    };
    return Student;
}(Person1));
var zuowang = new Student('zw', 1, 17, '初中三年级');
console.log(zuowang);
zuowang.eat();
console.log(zuowang instanceof Person1);
console.log(zuowang instanceof Student);
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj1 = new Encapsulate();
console.log(obj1.str1); // 可访问 
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate, age) {
        this.interest = interest;
        this.rebate = rebate;
        this.age = age;
    }
    return AgriLoan;
}());
var obj2 = new AgriLoan(10, 1, 1);
console.log("利润为 : " + obj2.interest + "，抽成为 : " + obj2.rebate);
