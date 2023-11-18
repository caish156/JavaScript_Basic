// call is used to make method reusable.
let obj1 = {
  user: "abcd",
  password: "kskksks",
  login() {
    console.log(this.user, this.password);
  },
};
obj1.login();
// suppose if we have another object & we want same output from it
let obj2 = {
  user: "peter",
  password: "parker",
};

obj1.login.call(obj2);
// what if we have function rather than object

function login(arr = ["a", "b", "c"]) {
  let [a, b, c] = arr;
  console.log(this.user, this.password, a, c);
}

login.call(obj1, ["caish115", "kdkdk@gmail.com", 252525252525]);

// apply is same as call but it take an array as arguments

//Bind
// bind only binds the this of particular object with function for future use rather than calling like call & apply.

let newfunc1 = login.bind(obj1);
let newfunc2 = login.bind(obj2);
newfunc1();
newfunc2();

// Losing “this”
let obj3 = {
  fname: "karl",
  sayHi() {
    console.log(this.fname);
  },
};
let newfunc3 = obj3.sayHi.bind(obj3);
newfunc3();

obj3 = {
  fname: "brown",
  sayHi() {
    console.log(this.fname);
  },
};
setTimeout(newfunc3, 1000);

// so here the solution is to bind the method wit object
// let newfunc3 = obj3.sayHi.bind(obj3); place it in up side in code
// Usually we apply bind to fix this for an object method, so that we can pass it somewhere.
// For example, to setTimeout.
