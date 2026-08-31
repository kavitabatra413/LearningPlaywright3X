/*A prime number is a number greater than 1 that has only two factors:
1 and itself.

Examples: 2, 3, 5, 7, 11, 13*/

//let num = 17; // 17 is a Prime Number
let num = 20; //20 is Not a Prime Number
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break; //stops the for loop.
        }
    }
}

if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is Not a Prime Number");
}