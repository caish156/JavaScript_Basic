// 1. Arrow functions have no “this”
let j = () => console.log(this); // {}
let k = function () {
  console.log(this); // Object [global]
};
function L() {
  console.log(this); // Object [global]
}
// j();
// k();
// L();

let obj = {
  fname: "caish",
  sayHi() {
    j = () => {
      console.log(this);
    };
    j();
  },
};
obj.sayHi(); // in that condition it uses it's parents this.

// 2. Arrows have no “arguments”

j = () => {
  console.log(arguments);
};
L = function () {
  console.log(arguments);
};

// j()
// L() // [Arguments]

// 3. Can’t be called with new
// because it don't have this

j = () => {
  this.fanme = "user";
  console.log(arguments);
};
L = function () {
  this.fanme = "user";
  console.log(arguments);
};
// let newJ = new j();
// console.log(newJ); // j is not a constructor because it don't have this, no this = no calue assigning

let newL = new L();
console.log(newL); // L { fanme: 'user' }

// 4.  short syntax

j = function (user) {
  console.log(user, "good morning");
};
j = (user) => {
  console.log(user, "good morning");
};

j = (user) => console.log(user, "good morning");

j = (user) => console.log(user, "good morning");

j("caish"); // caish good morning
