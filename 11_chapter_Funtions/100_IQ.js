let a = 10
console.log(a)//10
if (true){ 
    console.log(a); //ReferenceError: Cannot access 'a' before initialization
    let a = 20;//nothing
    console.log(a);//nothing will be printed
}