let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

//sum of rows
let rowSums = scores.map(row => row.reduce((a,b) => a+b));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) { // 3 rows
    for (let j = 0; j < suiteResults[i].length; j++) { // each cell of row
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}

