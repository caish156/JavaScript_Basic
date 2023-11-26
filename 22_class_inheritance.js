// Class inheritance
// The “extends” keyword

class MyClass {
  constructor(name) {
    this.name = name;
  }
  method1() {
    console.log(this.name);
  }
  method2() {
    console.log("method2");
  }
}

class PhyClass extends MyClass {
  method3() {
    console.log("its my physics class");
  }
  method1() {
    super.method1();
    console.log("method1");
  }
}
let thermodynamics = new PhyClass("termodynamics");
thermodynamics.method3();
thermodynamics.method2();
thermodynamics.method1();

// Overriding constructor
//  if a class extends another class and has no constructor, then the following “empty” constructor is generated:

// class Rabbit extends Animal {
//   // generated for extending classes without own constructors
//   constructor(...args) {
//     super(...args);
//   }
// }

// it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    // super();
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
// Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// the parent constructor always uses its own field value, not the overridden one.
