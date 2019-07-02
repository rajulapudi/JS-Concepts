/*Objects are key:value pairs*/
var bootcamp = {
    "course": "MERN",
    "strength": "12",
    "instructor": "prash"
}

console.log(bootcamp);

/*output will be 

console.log(bootcamp);
{ course: 'MERN', strength: '12', instructor: 'prash' }

so ** course will be stored as 

*/

var ggg = {
    1 : 2,
    3 : 4
}

/*if the key is a numeric to access value of 4 in the above example with need to do only []. we cannot use ggg.3 */

/*ggg.3 => will give Error

ggg[3] - is ok*/

var epic = {
    pranee : {age:30, country:"india"},
         hobby : [ "sleep", "read", "code"],
    duty : function()
    {
        console.log("this is a function in object")
    }
}


/*WINDOW = its the parent of everything in the JAVASCRIPT and it is stored as object and nested objects

All the predefined the functions are there is window object

alert
console
etc everything are stored as objects*/



