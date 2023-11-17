// Object methods, "this"

let obj1 = {
  user: "sourabh",
  age: 30,
};

let obj2 = {
  user: "caish",
  age: 30,
};

function sayHI() {
  console.log(this.user);
}
// “this” is not bound
obj1.sayHI = sayHI;
obj2.sayHI = sayHI;
obj1.sayHI();
obj2.sayHI();

// Constructor, operator "new"

function USER(name) {
  (this.name = name), (this.isplayer = false);
}

let user = new USER("jack");
console.log(user.name);

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.
// Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

// Optional chaining
let details = {
  // what if object is blank
  // user1: {
  //   address: {
  //     street: "ksksks",
  //     pin: 486661,
  //   },
  // },
};

console.log(details?.user1?.address?.street); // error

// if value ? value : undefined
