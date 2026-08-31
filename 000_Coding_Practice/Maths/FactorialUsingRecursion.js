function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1); //factorial() is calling itself with a smaller number.
}

let num = 5;
console.log(factorial(num)); // 120 

//5 × 4 × 3 × 2 × 1 = 120
//Recursion means a function calls itself.