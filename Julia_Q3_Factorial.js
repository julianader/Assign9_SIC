const number = parseInt(prompt("Input: "));
let fact = 1;

for (let i = 1; i <= number; i++) {
  fact *= i;
}

console.log(`Output: ${fact}`);
