// objects are non-indexed collecton of data with key value pair created with figure brackets {}

let obj = {
  player: "k.l. rahul",
  spec: "batsman",
  strike: 126.35,
};

// keys should be string or symbol,
// values can be any type primitve & non-primitive,

// 1. multiple word key:
obj["team name"] = "india";

// 2. variable as a key-value
let married = false;
obj.married = married;
console.log(obj);

// 3. variable value as key
let fruit = "apple";
let obj2 = {
  [fruit]: 5,
};

console.log(obj2.apple);

// 4. direct assign a variable as a property
let odi = 34;
let obj1 = {
  odi,
};
console.log(obj1); // { odi: 34 }

// 5. access the property by dot
console.log(obj.player); // k.l. rahul
console.log(obj.married); // false

// 6. access the property by []
console.log(obj["team name"]); // india

// create object by function

function makeplayer(name, age) {
  return {
    name: name,
    age: age,
  };
}
// or
function makePlayer(name, age) {
  return {
    name,
    age,
  };
}
console.log(makeplayer("chahal", 32));
console.log(makePlayer("chahal", 32));

// for of loop does not works for object

for (a in obj) {
  console.log(a, " : ", obj[a]);
}

// To delete a property: delete obj.prop.
// delete (obj.player)
console.log(obj);

// To check if a property with the given key exists: "key" in obj.
console.log("player" in obj); // true

// A variable assigned to an object stores not the object itself,
// but its “address in memory” – in other words “a reference” to it.

// To make a “real copy” (a clone) we can use Object.assign to Shallow Copy
let OBJ = Object.assign(obj);
console.log(OBJ === obj); // true
