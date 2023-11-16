// Methods with callBack Function

Arr1 = new Array("abc", "def", "ghi", "jkl", "mno", "pqr");
Arr2 = new Array("xyz", "uvw", "st");
arr1 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

// 01 Array.prototype.find(callbackFn, thisArg)
//  returns element in array if satisfies the condition. else undefined is returned.
console.log(Arr1.find((ele) => ele == "jkl")); // jkl

// 02 Array.prototype.findLast()
// returns last element in array if satisfies the condition. else undefined is returned.
console.log(Arr1.find((ele) => ele == "kl"));

// 03 Array.prototype.findIndex(callbackFn, thisArg)
// returns first index of element in array if satisfies the condition. else -1 is returned.
console.log(Arr1.findIndex((ele) => ele == "pqr"));

// 04 Array.prototype.findLastIndex()
// returns last index of  element in array if satisfies the condition. else -1 is returned.
console.log(Arr1.findIndex((ele) => ele == "qr"));

// 05 Array.prototype.every();  return true if all element satisfied the condition
console.log(arr1.every((e) => e % 5 == 0)); // true

// 06 Array.prototype.filter();
// predicate functionshould return a truthy value to keep the element in the resulting array,
// and a falsy value otherwise.
console.log(arr1.filter((e) => e < 45)); // [ 5, 10, 15, 20,  25, 30, 35, 40 ]

// 07 Array.prototype.forEach();
//  executes a provided function once for each array element. returns Undefined
arr1.forEach((e) => console.log(e));

// 08 Array.prototype.map();
// creates a new array populated with the results of calling a provided function
console.log(arr1.map((e) => e * 3)); // [15, 30, 45, 60, ...]

// 10 Array.prototype.reduce(accumulator, currentValue);
console.log(
  arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);
// 11 Array.prototype.reduceRight()
// same as reduce but acts from RTL

// 12 Array.prototype.some()
//  It returns true if, in the array, it finds an element for which the provided function returns true;
console.log(arr1);
console.log(arr1.some((e) => e % 55 == 0));
