// Rest parameters ...

function sumAll(a, b, ...c) {
  console.log(arguments.length);
  let d = a + b;
  for (i of c) {
    d = d + i;
  }
  console.log(d);
}

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

// rest parameters must be at the end
// rest stores all data inside a array

// Spread syntax
// used to extrat an array or object

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [arr1, ...arr2];
console.log(arr3); // [ [ 1, 2, 3 ], 4, 5, 6 ]

let obj1 = {
  country: "india",
  state: "madhya pradesh",
};
let obj2 = {
  address: "verma colony",
  pin: 486661,
};
let obj3 = { obj1, ...obj2 };
console.log(obj3);

let str = "worldcup";
let Arr1 = [...str];
// same As
let Arr2 = Array.from(str);
console.log(JSON.stringify(Arr1) === JSON.stringify(Arr2));
console.log(Arr1 === Arr2);

// Create new Array from array
let Arr3 = [...Arr2];
console.log(JSON.stringify(Arr3) === JSON.stringify(Arr2));
console.log(Arr3 === Arr2);
