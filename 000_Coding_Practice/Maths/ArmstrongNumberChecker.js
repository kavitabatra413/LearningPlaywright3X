/*An Armstrong number is a number where the sum of each digit 
raised to the power of the number of digits is equal to the original number.
1³ + 5³ + 3³
= 1 + 125 + 27
= 153
eg  0, 1, 153, 370, 371, 407.*/

let num = 153;
let original = num; //153
let digits = num.toString().length; //3
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit ** digits;
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}


/*Math.floor() removes the decimal part: 
153/10 is 15.3 */