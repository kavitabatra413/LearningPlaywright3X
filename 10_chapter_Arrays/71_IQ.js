//find() returns the first element that satisfies the condition.
let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex returns the index (position) of the first element that satisfies the condition.
let index = nums.findIndex(n => n > 20);
console.log(index);

//findLast() returns the last element that satisfies the condition.
nums.findLast(n => n > 20); //  45

//findLastIndex() returns the index of the last element that satisfies the condition.
nums.findLastIndex(n => n > 20); // 3