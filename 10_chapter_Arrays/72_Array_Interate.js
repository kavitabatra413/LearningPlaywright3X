let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]);
}
/*
0 login
1 checkout
2 search
*/

console.log("----");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}
/*
login
checkout
search
*/
console.log("----");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});
/*
0: login
1: checkout
2: search
*/
console.log("----");

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
/*
0 login
1 checkout
2 search
*/
console.log("----");


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}
/* student is index
0  ->  methis
1  ->  senthil
2  ->  ajay
3  ->  rahuls
*/