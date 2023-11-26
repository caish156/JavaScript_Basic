// In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior

// The “class” syntax

class MyClass {
    constructor(name) {
      this.name = name
  }
  method1() {
    console.log("method1");
  }
  method2() {
    console.log("method2");
  }
}

let jkl = new MyClass('JKL')
// 1. A new object is created.
// 2. The constructor runs with the given argument and assigns it to this.name.
console.log(jkl)