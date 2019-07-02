
/* Prototypal inheritance */

function Brick(w,h) {
    this.width = w;
    this.height = h;
  }

function BlueGlassBrick(w,h) {
Brick.call(this,w,h);
this.opacity = 0.5;
this.color = 'blue';
}
var stone = new BlueGlassBrick(10,20);

console.log(stone);
stone.color = "black";
console.log(stone.color);

/* Class inheritance */

class Person {
    constructor(name,age,exp){
        this.name =name;
        this.age = age;
        this.exp = exp;
    }
}

class Teacher extends Person {
    constructor(name, age, exp, sub, grade){
        super(name, age, exp);//  inherit from parent
        this.sub = sub;
        this.grade = grade;
    }
}

var pranee = new Teacher ('pranee', 30, 10, 'chemistry', 'A+');
console.log(pranee)
