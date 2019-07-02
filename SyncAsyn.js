Underhood of the Javascript and ES6  :

Syntax Parsers::
A program that reads your code and determines what it does and if its grammar is valid.



Execution Contexts,
a wrapper to help manage the code that is running.,



Lexical Environments
Lexical means 'having to do with words or grammar'. A lexical environment exists in programming languages in which where you write something is important. (where is it wriiten and whats around that)
--------------

Name value pairs and objects :

Address (Name) :: '100 - Street No 1' (Value pair)

Object : Its collection of name value pairs.,

------------------

Global Environment, Global Object ::
_____________________________________

JS Engine creates Global Object and 'this'

this in console
window in console ., alwways a global object in global execution contest.,

this = window ; object in global level

Global means it is not inside a function.,

var a = "Hello World!";
function b(){

}
The above a and b are attached to window object. Crosscheck.

-------------------------------------------------------

The execution context : Creation and Hoisting
_____________________________________________

var a = "Hello World!";
function b(){
	console.log("Called b!");
}
b();
console.log(a);
-----------------
b();
console.log(a);
var a = "Hello World!";
function b(){
	console.log("Called b!");
}
//In other programming languages, you can't call functions before defining.,

O/p : Called b!
		undefined
		if you remove "var a = "Hello World!";" you ll get error!

This phenomenon is called 'Hoisting'. Setup Memory Space for variables and Functions "Hoisting" before executing, there are available in memory.


-----------------------------------------------------------------------------

Concept of undefined :
__________________________

 var a;
 console.log(a) is 'undefined'
---------------
 console.log(a) is error., a is not defined
----
 var a;
 console.log(a);
 if(a === undefined){
 	console.log("a is undefined");
 }
 else{
 	console.log("a is defined")
 }

 dont do a = undefined

 -----------------------------------------------------------------------

Creation Phase and Execution Phase :
____________________________________

function b(){
	console.log("Called b!");
}
b();
console.log(a);

var a = "Hello World!";

console.log(a);

------------------------------------------------------


Single Threaded, Synchronous Execution::
_________________________________________

Single Threaded: One command(process) at a time.

Synchronous : One at a time, only one , in the order, execution/


----------------------------------

Function Invocation and The Execution Stack ::
______________________________________________

Function Invocation, is runnuing the function
function() in JS

ex:

function b(){

}
function a(){
	b();
}
a();

The execution stack is created,Every function creates new execution context.,


function a(){
	b();
	var c;
}
function b(){
	var d;
}
a();
var d; //synchronous, line by line


--------------------------------------------------------------------

Function Context and Variable Environments ::
---------------------------------------------

Variable Environment : Where is the variable


function b(){
	var myVar;
	console.log(myVar);
}
function a(){
	var myVar =2;
	console.log(myVar);
	b();
}
var myVar=1;
console.log(myVar);
a();
console.log(myVar);

Now in global execution context,  var myVar =1, is created

Now every  execution context, will have its own variable environment
(Scope)



__________________________________________________________

The Scope Chain:
________________

function b(){
	console.log(myVar);
}
function a(){
	var myVar =2;
	b();
}
var myVar=1;
a();

O/p : It should be undefined ?? (Lexical Environments)

------

function a(){

	function b(){
		console.log(myVar);
	}
	var myVar =2;
	b();
}
var myVar=1;
a();
b(); ??? O/p ??

------

function a(){

	function b(){
		console.log(myVar);
	}
	var myVar =2;
	b();
}
var myVar=1;
a(); ??? O/p ????

------------------------------------------------

Scope: Where a variable is available in code.

ES6 : New way of creating variable 'let'

https://codeburst.io/difference-between-let-and-var-in-javascript-537410b2d707

var vs let
