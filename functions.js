function fname (args){
    /*body of function*/
    return x+y+z;
    /* here is calculates and holds the value it will not output unless asked for*/

    /*the function is only executed when called
    so the return statement*/
}

fname(1,2,3); /*this will only hold the value*/

console.log(fname);/*this will print to log*/

return; /*it is a keyword which will interrupt the processing of the code if run*/

function fname (1,2,3){
    /*body of function*/
    return arguments;
    /* here is calculates and holds the value it will not output unless asked for*/

    /*the function is only executed when called
    so the return statement*/
}



/*anonymus functions or varianle functions - is another way to create a function*/
var anonymus = function(){
    /*body*/
}


/*functions without arguments can take parametrs also*/
/* they will store the parameters in objects format with numbers starting from 0... so we can access the parameters using [] */
var abc = function(){
    console.log(arguments[2]);
}
abc(1,2,3)



/*immediate invoked function expression "IIFE"
*/
(function(a,b){
    console.log(a+b);
})(2,3)


/*ES6 functions FAT ARROW Function*/

var abc = function(x,y){
    console.log(x+y)
}
abc(2,3)

var abc = ()=>{
    console.log(x+y)
}


/***********************************/

/*RECURSION Functions*/

(i) Direct Recursion: Function calls itself
(ii) Functio calls another function <=>


    /*recursions uses temporary memory - which will  use stacks for memory*/
    /*STACK - is a data structure*/

var factorial = (number)=>{
    if (number==0){
        console.log(10);
        return 1;
    }
    else {
        return number*factorial(number-1);
    }
}
console.log(factorial(3));

var length =10;
function fn() {
    console.log(this.length)
}

var obj = {
    length : 5,
    method : function(fn){
        fn();
        arguments[0]();
    }
};
obj.method(fn, 3);


