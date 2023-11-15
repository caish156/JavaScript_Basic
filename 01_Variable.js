//  we have 3 way to define a variable

let app = "sourabh";

const App = "caish";

var APP = "hello";

console.log(app, APP, App);

var APP = "lalall"; // var  allow to redeclare

// let app = " kdkdkdkd"// let don't allow & give SyntaxError: Identifier 'app' has already been declared

//  same with const.

// App = "sksks" // TypeError: Assignment to constant variable

// var is function scoped
function foo() {
  var a = 10;
  if (a) {
    console.log(a);
    var a = 20;
  }
  console.log(a);
}

// same with let
function foo1() {
  let a = 10;
  if (a) {
    console.log(a);
  }
  console.log(a);
}
foo();
// foo1(); 
// ReferenceError: Cannot access 'a' before initialization
// foo1(); // 10, 10
// if i removed declaration of  a inside if

// let is block scoped {}
{
    let a = 10
}
console.log(a) //ReferenceError: a is not defined