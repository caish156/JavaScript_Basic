// Function object, NAMED FUNCTION EXPRESSION (NFE)

function func(params) {
  console.log("write a function & check type");
}
console.log(typeof func);
// In JavaScript, functions are objects.
// so functions is as callable “action objects”. We can not only call them,
// but also treat them as objects: add/remove properties, pass by reference etc.

// 1. The “name” property
console.log(func.name); // func

// 2. The “length” property describe the length of arguments
function func1(a, b, c, d) {}
console.log(func1.length); // 4

// 3. Custom properties
function sayHi() {
  sayHi.count++;
  console.log(sayHi.count);
}
sayHi.count = 0;
sayHi();
sayHi();

// Named Function Expression is a term for Function Expressions that have a name.

// 1. bacis named expression
let hello = function (arg) {
  console.log("Hello", arg);
};

hello("sourabh");

// 2. provide additional name

let hello1 = function hello(abc) {
  abc ? console.log("Hello ", abc) : hello("guest");
};

hello1();
hello1("caish");
// if we assign function to another variable, here additional name will work
welcome = hello1;

welcome();
welcome("raja");



