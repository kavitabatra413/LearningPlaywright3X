var a = "Pramod";
// 10,000lines 
if(true){
    console.log(a); //Pramod
    var a = "temp";
}

// Temporal Dead Zone

// Global Scope
// a = "Pramod"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a);
//error
let b = "Pramod";
// 10,000lines 
if(true){
    console.log(b); 
    let b = "temp";
}

