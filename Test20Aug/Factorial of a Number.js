function factorial(n) {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac = fac * i;
    }
    return fac;
}
let a = factorial(3);
console.log("factorial of 3 is " + a );