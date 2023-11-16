// what is Array
// The Array object, enables storing a collection of multiple items or data type(primitive or objects) under a single variable name,
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

let arr = [1, 2, 3, 4];
// or
let arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1, arr);

// how to copy a array
// Shallow Copy // copy only refrences.

// They are not the same object (o1 = == o2).
// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are equal.
// Their prototype chains are equal.
let arrcopy = arr;
arrcopy.push(21);
console.log(arrcopy, arr);

// Deep copy = only values
let arr02 = Array.from(arr);
console.log(arr, arr02);
arr.push(23);
console.log(arr, arr02);

// access the array element:-

console.log(arr[1]); // 2

// Array properties
console.log(arr.length); //6

// Array.prototype[@@iterator]()
// The [@@iterator]() method of Array instances implements the iterable
// protocol and allows arrays to be consumed by most syntaxes expecting iterables,
// such as the spread syntax and for...of loops
arr1 = [10, 13, 15, 17, 21, 35];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (i in arr1) {
  // returns index
  console.log(i);
}

for (i of arr1) {
  // returns elements
  console.log(i);
}

//  same return value as Array.prototype.values()

console.log(arr1.values());

