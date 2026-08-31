/*
Input 16
Output Yes
16 = 2^4, so it is a power of two.
*/

function isPowerOfTwo(num) {
    if (num <= 0) {
        return false;
    }

    return (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false
console.log(isPowerOfTwo(1));  // true
console.log(isPowerOfTwo(0));  // false


/*
(num & (num - 1))
16 = 10000
15 = 01111
     -----
16 & 15 = 00000
*/