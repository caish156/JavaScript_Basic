let d = "abcd";
let a = "efgh";

// ƒ anchor()
console.log(d.anchor("dgdd"));
{
  /* <a name="dgdd">aaaa</a>;  */
} // to make an html anchor tag from string

// ƒ at()
console.log(d.at(2));

// ƒ big()
console.log(d.big()); //Returns a <big> HTML element

// ƒ blink()
console.log(d.blink()); // Returns a <blink> HTML element

// ƒ bold()
console.log(d.bold()); //Returns a <b> HTML element

// ƒ charAt()
console.log(d.charAt(3)); //Returns the character at the specified index

// ƒ charCodeAt()
console.log(d.charCodeAt(2)); //Returns the Unicode value of the character at the specified location.

// ƒ codePointAt()
console.log(d.codePointAt(2)); //Returns a nonnegative integer Number less than 1114112

// ƒ concat()
console.log(a.concat(d)); // efghabcd
// returns concated string

// ƒ String()
let c = String("anshshss"); // to create a string
console.log(c);

// ƒ endsWith()
console.log(c.endsWith("ss")); // Returns true if the sequence of elements last char match with args

// ƒ fixed()
console.log(c.fixed(2)); //Returns a <tt> HTML element

// ƒ fontcolor()
console.log(c.fontcolor("")); //Returns a <font> HTML element and sets the color attribute value

// ƒ fontsize()
console.log(c.fontsize(12)); //Returns a <font> HTML element and sets the size attribute value

// ƒ includes()
console.log(c.includes("ss")); //Returns true if key is included in the range, and false otherwise.

// ƒ indexOf()
console.log(c.indexOf("sh")); //Returns the position of the first occurrence of a substring.

// ƒ lastIndexOf()
console.log(c.lastIndexOf("sh")); //Returns the last occurrence of a substring in the string.

// length
console.log(c.length); // length is property not a method

// ƒ match()
console.log(c.match(/sh/g));
// Matches a string with a regular expression, and returns an array containing the results of that search.

// ƒ matchAll()
regex = /sh/g;
// g for all possible matches
let res = c.matchAll(regex);
for (Reg of res) {
  console.log(Reg.index);
}

// ƒ padEnd()

console.log(c.padEnd(18, "p")); // add given string in 2nd args if length is less than provided.

// ƒ padStart()
console.log(c.padStart(12, "rr")); // if nothing in 2nd arg whitespace will be provded.

// ƒ repeat()
console.log(c.repeat(1)); // repeat string x arg time, if nothing is provide black string returned.

// ƒ replace()
console.log(c.replace("sh", "12")); // Replaces text in a string, using a regular expression or search string.

// ƒ replaceAll()
console.log(c.replaceAll("sh", "1234")); //same as replace but act on all match cases.

// ƒ search()
console.log(c.search("sh")); //returns index of given string if get a match.

// ƒ slice()
console.log(c.slice(6, 0)); //Returns a section of a string according to given index

// ƒ small() //Returns a <small> HTML element

let e = "abpcdpefpghpijp";
// ƒ split()
console.log(e.split("p", 1)); // returns array of string pieces, cut from where it get p,

// ƒ startsWith()
console.log(e.startsWith("ab")); //returns true if string starts with given args.

// ƒ strike() // Returns a <strike> HTML element

// ƒ substr()
console.log(e.substr(2,4)) // from = 2 to length = 4 returns a part of string

// ƒ substring()
console.log(c.substring(2, 4))  //sh
console.log(c.slice(2, 4))  // sh
console.log(c.substring(8, 4)); //shss
console.log(c.slice(8, 4));  // empty string

// ---- The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

// ƒ sup() // Returns a <sup> HTML element

// ƒ toLowerCase()
let str = 'AaBbCcDdEeFf'
console.log(str.toLowerCase()) // aabbccddeeff

// toUpperCase
console.log(str.toUpperCase()) // AABBCCDDEEFF

let str1 = new String('abc')
// ƒ toString()
console.log( str1) // [String: 'abc']
 console.log(str1.toString()); // method of String values returns this string value. abc


// ƒ trim() // removes whitespace from both ends of this string and returns a new string

// ƒ trimEnd()  removes whitespace from end of this string and returns a new string

// ƒ trimStart() removes whitespace from start of this string and returns a new string

// ƒ valueOf() // returns the primitive value of a String object as a string data type. same as toString()

