const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

console.log("Select an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

const choice = parseInt(prompt("Enter your choice:"));
let result;

switch (choice) {
    case 1:
        result = num1 + num2;
        console.log(`Result: ${result}`);
        break;
    case 2:
        result = num1 - num2;
        console.log(`Result: ${result}`);
        break;
    case 3:
        result = num1 * num2;
        console.log(`Result: ${result}`);
        break;
    case 4:
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`Result: ${result}`);
        } else {
            console.log("Error: Division by zero");
        }
        break;
    default:
        console.log("Invalid choice");
}
