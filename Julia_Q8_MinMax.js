const vec = [];

let i = 0;
let ans;

do {
    i++;
    const input = parseInt(prompt(`Input ${i}:`));
    vec.push(input);
    ans = parseInt(prompt("To add more = 1, To print = 0:"));
} while (ans === 1);

if (vec.length > 0) {
    let min = vec[0];
    let max = vec[0];

    console.log("Output:");

    for (let j = 0; j < vec.length; j++) {
        const current = vec[j];
        if (current < min) {
            min = current;
        }
        if (current > max) {
            max = current;
        }
    }

    console.log(`Smallest Number = ${min}`);
    console.log(`Largest Number = ${max}`);
} else {
    console.log("The vector is empty. No minimum or maximum.");
}
