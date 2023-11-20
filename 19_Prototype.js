// Prototypal inheritance is a language feature that helps in that.
// 1. [[Prototype]];

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification),
// that is either null or references another object. That object is called “a prototype”:

// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

// The property [[Prototype]] is internal and hidden, but there are many ways to set it.

let vehical = {
  useFuel: true,
};
let car = {
  has4wheel: true,
};

car.__proto__ = vehical;
console.log(car.useFuel); // true

// Here we can say that "vehical is the prototype of car" or "car prototypically inherits from vehical".

// 2. Writing doesn’t use prototype
// The prototype is only used for reading properties. Write/delete operations work directly with the object.

car.hyundai = function () {
  console.log("i am a hyundai");
};
car.hyundai();

// 3. The value of “this”
// No matter where the method is found: in an object or its prototype.
// In a method call, this is always the object before the dot.

vehical.inventor = function () {
  console.log(this, "henary ford");
};

car.inventor();

// 4. for in  loop
// for in loop iterates over inherited properties too.

for (props in car) {
  console.log(props);
}

// ---------------***** F.prototype ***** ----------------------- //

//  new objects can be created with a constructor function, like new F().
// F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.
// we also can set a prototype for constructor function
let obj = {
  isalive: true,
};

function Rabbit(ref) {
  console.log(ref);
}
Rabbit.prototype = obj;

let rabbit = new Rabbit("white rabbit");
console.log(rabbit.isalive); // true

// ** F.prototype only used at new F time

// Q .1
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats); // ?

// true.
// The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
rabbit = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit.eats); // ? false

// The object from Rabbit.prototype is not duplicated, it’s still a single object referenced both by Rabbit.
// prototype and by the[[Prototype]] of rabbit.

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
rabbit = new Rabbit();
delete rabbit.eats;
console.log(rabbit.eats); // ?

//All delete operations are applied directly to the object. Here delete rabbit.eats tries to remove eats property from rabbit, but it doesn’t have it. So the operation won’t have any effect.

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

rabbit = new Rabbit();
delete Rabbit.prototype.eats;
console.log(rabbit.eats); // ? false because that time we deleted property from prototype.

