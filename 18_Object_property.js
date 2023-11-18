// getters and setters

// There are two kinds of object properties.

// The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

// The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
let obj = {
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};
obj.name = "rewa";
console.log(obj.name);
// So, the name is stored in _name property, and the access is done via getter and setter.
// Technically, external code is able to access the name directly by using user._name.
// But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.
