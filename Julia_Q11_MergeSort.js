function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from both arrays
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function printArray(arr) {
    console.log(arr.join(' '));
}

const input = prompt("Enter numbers separated by spaces:").trim();
const arr = input.split(' ').map(Number);

console.log("Original array:");
printArray(arr);

const sortedArray = mergeSort(arr);

console.log("\nSorted array:");
printArray(sortedArray);
