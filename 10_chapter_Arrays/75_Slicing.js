// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(1, 3));//[ 2, 3 ]
console.log(arr);//[ 1, 2, 3, 4, 5 ]

console.log("1------");
console.log(arr.slice(2));//[ 3, 4, 5 ]

console.log("2------");


console.log(arr.slice(-2)); // Right side.[ 4, 5 ]//[ 4, 5 ]

console.log("3------");
console.log(arr.slice(-3));//[ 3, 4, 5 ]

console.log("4------");

console.log(arr.slice(0));//[ 1, 2, 3, 4, 5 ]

console.log("5------");

console.log(arr.slice(-5));//[ 1, 2, 3, 4, 5 ]

console.log("6------");

console.log(arr.slice(-3, -5));//[]
console.log(arr.slice(-5,2));//[ 1, 2 ]
