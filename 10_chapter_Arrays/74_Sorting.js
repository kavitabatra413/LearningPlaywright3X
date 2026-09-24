let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);//[ 'apple', 'banana', 'cherry' ]
//  alphabetical by default 

let score = [4,3,2];
console.log(score.sort());//[ 2, 3, 4 ]

let nums = [10,1,21,2];
nums.sort();
console.log(nums); //[ 1, 10, 2, 21 ]
// Natural Sorting - Lexicographic / string sort 

// Proper Sorting, Asc , Desc
nums.sort((a,b) => a-b);
console.log(nums);//[ 1, 2, 10, 21 ]
nums.sort((a,b) => b-a); // Desc
console.log(nums);//[ 21, 10, 2, 1 ]
nums.reverse();
console.log(nums);//[ 1, 2, 10, 21 ]