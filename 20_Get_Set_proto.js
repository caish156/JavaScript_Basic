// Modern methods of get or set proto

let car = {
  wheels: 4,
  fuel: "diesel",
};

let hyundai = {
  hatchback: true,
  price: 5.9,
};

// hyundai.__proto__ = car
// sets the [[Prototype]] of obj to proto.
Object.setPrototypeOf(hyundai, car);
console.log(hyundai.wheels);

//  returns the [[Prototype]] of obj.
console.log(Object.getPrototypeOf(car));
console.log(Object.getPrototypeOf(hyundai)); // [[prototype, property, eiter null or ref to another outer obj]]
