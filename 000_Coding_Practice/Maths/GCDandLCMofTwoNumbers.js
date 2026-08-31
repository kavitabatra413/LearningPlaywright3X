/*GCD (Greatest Common Divisor) = largest number that divides both numbers.
LCM (Least Common Multiple) = smallest positive number that is divisible by both numbers.
For example, for 12 and 18:

GCD = 6
LCM = 36*/

let a = 12;
let b = 18;

// Find GCD using Euclidean Algorithm
function findGCD(a, b) {
    while (b !== 0) {
        let remainder = b % a; //6 first time
        a = b;// 18
        b = remainder;
    }
    return a;
}

let gcd = findGCD(a, b);

// LCM formula
let lcm = (a * b) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);