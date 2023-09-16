const vec = [];

let i = 0;
let ans;

do {
    i++;
    const input = parseInt(prompt(`Input ${i}:`));
    vec.push(input);
    ans = parseInt(prompt("To add more = 1, To print = 0:"));
} while (ans === 1);

printEvenNumbers(vec);
printOddNumbers(vec);

function printEvenNumbers(vec) {
    console.log("Even Numbers:");
    for (const num of vec) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

function printOddNumbers(vec) {
    console.log("Odd Numbers:");
    for (const num of vec) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
}
