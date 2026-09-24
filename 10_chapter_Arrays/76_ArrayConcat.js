let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);//[ 1, 2, 3, 4 ]

// spread (modern way) - concatenation. (...)
// ... all the eleement
let d = [...a,...b];
// console.log(d);/[ 1, 2, 3, 4 ]

// Join 
// array into bug string
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);//pass | fail | skip