// 1. Primitive
// number
// bigInt
// string
// Boolean
// null
// undefined
// Symbol


// Number
let a = 10
console.log(typeof a)
console.log(a)

// string
let b = "name"
console.log(b)
console.log(b)

// Boolean
let c = true
console.log(typeof c)
console.log(c)

// null
console.log(typeof null) //object 
console.log(null) //standalone value, value not assigned yet 

// undefined
console.log(typeof undefined) // value not defined
console.log(undefined)

let d = Symbol("kd%662") //The following syntax with the new operator will throw a TypeError:
console.log(typeof d)
console.log(d)

// ----OUTPUT ----- //

// number;
// 10;
// name;
// name;
// boolean;
// true;
// object;
// null;
// undefined;
// undefined;
// symbol;
// Symbol(kd % 662);

// 2. Non - Primitive

// Array
// Object
// function

let arr = [1, 2, 3, 4, 5, 6]
console.log("arr", typeof arr)

let foo = function () {
    console.log(typeof foo)
}

console.log(typeof foo)


