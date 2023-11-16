let Arr1 = new Array("abc", "def", "ghi", "jkl", "mno", "pqr");
let Arr2 = new Array("xyz", "uvw", "st");
// 01 Array.prototype.at() // takes an integer value and returns the item at that index,
console.log(Arr1.at(2));

// 02 Array.prototype.concat() //  used to merge two or more arrays
console.log(Arr1.concat(Arr2));

// 03 Array.prototype.copyWithin(target, start, end)
console.log(Arr1.copyWithin(0, 3, 4)); // [ 'jkl', 'def', 'ghi', 'jkl', 'mno', 'pqr' ]

// 04 Array.prototype.entries()
// returns a new array iterator object that contains the key/value pairs for each index in the array.
let iterator = Arr1.entries();
console.log(iterator);
for (a of iterator) {
  console.log("entries", a);
}

// 05 Array.prototype.keys()
iterator = Arr1.keys();
for (a of iterator) {
  console.log("keys", a);
}

// 06  Array.prototype.fill(value, start, end)
// changes all elements within a range of indices in an array to a static value. It returns the modified array.
// console.log(Arr1.fill(0, 3)); // [ 'jkl', 'def', 'ghi', 0, 0, 0 ]

// 07 Array.prototype.flat(depth)
//  creates a new array with all sub-array elements
let arr = [1, 2, 3, 4, 5, 6, [7, 8, [9]]];
console.log(arr.flat()); //[ 1, 2, 3,  4, 5, 6,  7, 8, [ 9 ] ]
console.log(arr.flat(2)); //[ 1, 2, 3,  4, 5, 6,  7, 8,  9 ]

// 08 Array.from()
// creates a new, shallow-copied Array instance from an iterable or array-like object.

let ARR = Array.from(arr);
arr[6][2][0] = 1;
console.log(ARR);

// 09 Array.prototype.includes(searchElement, fromIndex)
// A boolean value which is true if the value searchElement is found within the array
console.log(arr.includes(3, 2)); // true

// 10 Array.prototype.indexOf()
console.log(arr.indexOf(3)); //2

// 11 Array.isArray() // static method
console.log(Array.isArray(arr)); // true

// 12 Array.prototype.join()
// returns a new string by concatenating all of the elements in this array
Arr1 = new Array("abc", "def", "ghi", "jkl", "mno", "pqr");
Arr2 = new Array("xyz", "uvw", "st");
console.log(Arr1.join());

arr = [2, 3, 4, 3, 5, 3, 6, 3, 7, 3];
// Array.prototype.lastIndexOf()
console.log(arr.lastIndexOf(3)); //9

// 14 Array.of() // returns A new Array instance.
console.log(Array.of(33, 44, 55, 6));

arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// 15 Array.prototype.pop()
// return last value of array & delete it from array
console.log(arr.pop(), arr);

// 16 Array.prototype.push()
// return new length of array after adding a passed element at last in array
console.log(arr.push(99), arr);

// 17 Array.prototype.shift()
// return first value of array & delete it from array
console.log(arr.shift(11), arr);

// 18 Array.prototype.unshift()
// return new length of array after adding a passed element at start in array
console.log(arr.unshift(11), arr);

// Array.prototype.reverse()
console.log(arr.reverse());
console.log(arr); // original array also changed
// To reverse the elements in an array without mutating the original array, use toReversed().

// Array.prototype.slice(start, end) end not included
console.log(arr.slice(2, 5)); // [(77, 66, 55)]; returns a piece of original array as a new array.

// Array.prototype.sort()
console.log(arr.sort((a, b) => a - b));

// Array.prototype.splice(start, deleteCount, item1)
console.log(arr.splice(2, 2), arr) // returns the deleted part
console.log(arr.splice(2, 0, 33, 44), arr) // 3rd & 4th argument to patch new item


// Array.prototype.values()
iterator = Arr1.values();
for (a of iterator) {
  console.log("keys", a);
}

