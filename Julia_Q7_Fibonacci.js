const n = parseInt(prompt('Enter a Number: '));
const vec = [];

if (n >= 1) {
  vec.push(0);
}
if (n >= 2) {
  vec.push(1);
}

while (vec.length < n) {
  const lastIndex = vec.length;
  const nextFibonacci = vec[lastIndex - 1] + vec[lastIndex - 2];
  vec.push(nextFibonacci);
}

console.log(`First ${n} Fibonacci numbers:`);
console.log(vec.join(' '));
