let a = 10
console.log(a)//10
if (true){ 
    //console.log(a); //ReferenceError: Cannot access 'a' before initialization
    let a = 20;//nothing
    console.log(a);//nothing will be printed
}


let b = 10
console.log(b)//10
if (true){ 
    //console.log(b); //ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b);//20
}