let arr = [10, 5, 8, 3];

let max = arr[0]; // Assume the first element is the largest

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Array: is", arr);
console.log("Maximum element is:", max);