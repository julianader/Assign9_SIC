function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = new Array(n + 1).fill().map(() => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

const n = parseInt(prompt("Enter the number of items:"));
const values = [];
const weights = [];

console.log("Enter the values of the items:");
for (let i = 0; i < n; i++) {
    values.push(parseInt(prompt("Value for item " + (i + 1) + ":")));
}

console.log("Enter the weights of the items:");
for (let i = 0; i < n; i++) {
    weights.push(parseInt(prompt("Weight for item " + (i + 1) + ":")));
}

const capacity = parseInt(prompt("Enter the knapsack capacity:"));

const maxValue = knapsack(values, weights, capacity);
console.log("Maximum value: " + maxValue);
