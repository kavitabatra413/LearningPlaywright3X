//sconst data = require('fs').readFileSync(0, 'utf8');
//let sides = data.trim().split(' ').map(Number);
let sides = [1,2,2];
let a = sides[0];
let b = sides[1];
let c = sides[2];

if (a === b && b === c) {
    console.log('Equilateral');
} else if (a === b || b === c || c === a) {
    console.log('Isosceles');
} else {
    console.log('Scalene');
}
