const arr = [10,5,8,3];

let maxi = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxi) {
        maxi = arr[i];
    }
}

console.log("Maximum value is", maxi);