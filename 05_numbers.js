// Methods of Number:

let num = 10.25326363;
let num1 = "jdjdd";

// ƒ toFixed() // method of Number values formats this number using fixed-point notation.
console.log(num.toFixed(2)); //10.25

// ƒ toString() //
console.log(typeof num.toString()); // convert number to string

// ƒ valueOf() return value of number object
let c = new Number(23);
console.log(c);
console.log(c.valueOf());

// static method
// isNaN() // Returns true if arg is number
console.log(Number.isNaN(num)); // false
console.log(isNaN(num)); // false
console.log(isNaN(num1)); // true

// parseFloat // A floating point number parsed from the given string.
let age = "32.89llldodl";
console.log(parseFloat(age)); //32.89

// parseInt //A integer number parsed from the given string.
console.log(parseInt(age)); //32
