// setTimeout

let timerid = setTimeout(() => console.log("hello caish"), 2000);

setTimeout(() => clearTimeout(timerid), 1000);
let a = 1;
let timerId = setInterval(() => console.log(a++), 1000);
setTimeout(() => clearInterval(timerId), 10000);
