/*greet("Alice"); 

function greet(name) {
    console.log('Hi');
    return `Hello, ${name}!`;
}*/


sayHi("Bob"); // ❌ TypeError: sayHi is not a function as function expression

const sayHi = function (name) {
    return `Hi, ${name}!`;
};