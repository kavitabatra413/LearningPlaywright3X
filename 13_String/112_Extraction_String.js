// Extracting Substrings

let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported ( start, end-1)
console.log(str.slice(0, 5)); // (0,4) -> "Login"
console.log(str.slice(11));
console.log(str.slice(-3));

let testNumber = str.slice(-3);

// substring(start, end) — no negatives (treats as 0)
str.substring(6, 10);  // "Test"

// at() for single chars
str.at(0);   // "L"
str.at(-1);  // "1"

//substring() → swaps start and end if start > end
"JavaScript".substring(0, 4);     // ""
"JavaScript".substring(4, 0);  // "Java"

console.log("JavaScript".slice(0, 4));  //Java
console.log("JavaScript".slice(4, 0)); //start > end → "" (empty string)