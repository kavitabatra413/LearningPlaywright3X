//Programming
//Hello World

let str = "Programming";

let vowels = 0;
let consonants = 0;

for (let ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {   // Check if it's an alphabet
        if ("aeiou".includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("String:", str);
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);