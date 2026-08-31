let arr = [5, 3, 8, 1, 9];

let min = arr[0]; // Assume the first element is the largest

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Array: is", arr);
console.log("Minimum element is:", min);