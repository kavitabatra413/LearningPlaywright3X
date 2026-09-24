// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);//pass
console.log(statuses[2]);//skip


console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-4));
/*
skip
fail
undefined
*/

// Modify
statuses[1] = "blocked";
console.log(statuses);//[ 'pass', 'blocked', 'skip' ]

// Length
console.log(statuses.length);//3