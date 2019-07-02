 //OOPs



//1. Function Prototypes --------- 2. Classes


function Bootcamper1(fname, lname, age, exp, dob) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.exp = function(){console.log(`Experience of ${this.fname} is ${exp}`);}
  this.dob = {date : dob}
}

Bootcamper1.prototype.language = "English";
Bootcamper1.prototype.hobby = ["read","write"];

var myFather = new Bootcamper1("John", "Doe", 50, 20,"april");
var pranee = new Bootcamper1("pranee", "Doe", 50, 20,"april");
console.log(pranee.hobby);


//Classes
//1. Every Class will come with a default method of "constructor"

class Bootcamper2{
  constructor(fname, lname, age, dob){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    //this.exp = function(){console.log(`Experience of ${this.fname} is ${this.age-20}`);} // - in classes we cannot have methods under constructors as constructor itself is a method under Class
    this.dob = {date : dob}
  }
  greeting(){
    console.log(`hi i am ${this.fname}`)
  }
}
//constructor is the first method in classes that gets invoked automatically
var pankaj = new Bootcamper2('pankaj','kumar', 45, 'April 1st');
console.log(pankaj);
pankaj.greeting();

/* ----------------------------------------- */