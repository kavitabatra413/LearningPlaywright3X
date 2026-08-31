/*
Input 28
Output Perfect
proper divisors of 28 are 1,2,4,7,14 and their sum is 28,so it is a perfect number.
*/

let num = 28;
let sum = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

if (sum === num) {
    console.log(`${num} is a Perfect Number`);
} else {
    console.log(`${num} is not a Perfect Number`);
}
// 28 is a Perfect Number