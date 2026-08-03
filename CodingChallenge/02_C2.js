//Test Case Result Counter
let passCount   = 0;
let failCount   = 0;

let ResultOftest = ["Pass", "Fail", "Pass", "Pass", "Fail"];

for (let i = 0; i < ResultOftest.length; i++) {
    if (ResultOftest[i] === "Pass") {
        passCount++;
    } else {
        failCount++;
    }
}

totalTests = ResultOftest.length;
let passRate = (passCount / totalTests) * 100;
console.log ("passRate is" + passRate);

