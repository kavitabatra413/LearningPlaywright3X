let binary = "101101";

// Binary to Decimal
let decimal = parseInt(binary, 2); 
//tells JavaScript that the number is in base 2 (binary).

// Decimal to Hexadecimal
let hexadecimal = decimal.toString(16).toUpperCase();
//tells JavaScript to convert the decimal number to base 16 (hexadecimal).

console.log("Binary:", binary);
console.log("Decimal:", decimal);
console.log("Hexadecimal:", hexadecimal);

/*
Output:

Binary: 101101
Decimal: 45
Hexadecimal: 2D
*/