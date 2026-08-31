function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(567));  // 18

/*
num % 10 → gets the last digit.
Math.floor(num / 10) → removes the last digit.
1 % 10 → 1
Math.floor(1 / 10) → 0
*/