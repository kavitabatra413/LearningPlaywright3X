function doubleMe(a){
    return a*2;
}

//arrow function with argument
const doubtA = (a)=> a*2;
doubtA(10);

//arrow function no argument
const getEnv = () => "staging";
console.log(getEnv());

//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}

console.log(getResult(78));
console.log(getResult(43));