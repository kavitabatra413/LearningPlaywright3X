/*
Input 9875
Output 9 11 2
9+8+7+5 gives 29, then 2+9 gives 11, then 1+1 gives 2, which is a single digit so the chain stops.
num % 10 → gets the last digit.
Math.floor(num / 10) → removes the last digit.
The outer while (num >= 10) keeps repeating until only one digit remains.
*/


function repeatedDigitSum(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}
console.log(repeatedDigitSum(9875)); // 2

//Math.floor(9875 / 10) → 987 removes .5