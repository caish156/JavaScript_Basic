// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.

// Array destructuring

let arr = ["abc", "def"];
let [sourabh, caish] = arr;
console.log(sourabh, caish);

// Unwanted elements of the array can also be thrown away via an extra comma
arr = ["india", "africa", "australia"];
let [winner1, , winner2] = arr;
console.log(winner1, winner2);

// Swap variables trick
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log("a :", a, "b : ", b);

// Object destructuring

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// 01 let { height, width, title } = options;
// console.log(height, width, title);

// 02 extract single property
// let { title } = options;
// console.log(title);

// 03 change variable name & set default value

// let { title: t = "sourabh", width: w = 10, height: h = 20 } = options;
// console.log(t, w, h); // sourabh 10 20 if options is blank
// // or
// console.log(t, w, h); // Menu 100 200

// 04 rest pattern
let { title, ...dimension } = options;
console.log(title, dimension); // Menu { width: 100, height: 200 }
