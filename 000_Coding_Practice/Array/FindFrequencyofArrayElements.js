/*Input
4
5 5 3 3
Output
5 appears 2 times
3 appears 2 times
*/

let arr = [5, 5, 3, 3];
let frequency = {};

for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log(frequency);