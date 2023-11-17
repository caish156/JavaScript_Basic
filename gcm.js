let a = 5,
  b = 135,
  gcm = 1;

for (let i = 1; i <= (b > a ? b : a); i++) {
  console.log("i", i);
  if (a % i == 0 || b % i == 0) {
    gcm = i * gcm;
    a % i == 0 ? (a = a / i) : (b = b / i);
  }
}
console.log("GCM : ", gcm);

(a = 5), (b = 135), (gcm = 1);

for (let i = a < b ? a : b; i; i += a < b ? a : b) {
  console.log(i);
  if (i % a == 0 && i % b == 0) {
    return console.log(i);
  }
}
