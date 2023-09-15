const vec = [];

while (true) {
    const input = prompt(`Input ${vec.length + 1} (or enter 'done' to finish):`);
  
    if (input === 'done') {
        break;
    }
  
    const number = parseInt(input);
    vec.push(number);
}

let sum = 0;
console.log('Array Output:');
vec.forEach((num, index) => {
    console.log(`Number ${index + 1} = ${num}`);
    sum += num;
});
console.log(`Sum = ${sum}`);
