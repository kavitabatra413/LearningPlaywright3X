//normal function can sum first 3 parameters
function add(a, b, c) {
    return a + b + c ;
}

console.log(add(1,2,3));

// add function picked only first 3
let num = [1, 2, 3, 5];
console.log(add(...num));

// ----returns true
function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let responseCodes = [200, 201, 404];
console.log(hasError(...responseCodes));

// reduce() adds them one by one:----
function hasError1(...codes) {
     return codes.reduce((sum, c) => sum + c, 0);
}
let responseCodes2 = [200, 201, 404, 500];
console.log(hasError1(...responseCodes2));