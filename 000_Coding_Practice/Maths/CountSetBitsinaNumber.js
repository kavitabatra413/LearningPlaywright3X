let num = 13;

let count = num.toString(2)
               .split('')
               .filter(bit => bit === '1')
               .length;

console.log(count);

//num.toString(2) 2 means convert 13 to base 2 (binary).1101
//filter means keep only the elements that are '1'.
//count 3