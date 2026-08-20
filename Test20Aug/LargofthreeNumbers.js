function largest(x,y,z) {
    if (x > y && x > z ) {
        return "x ";
    } else if (y > x && y > z) {
        return "y";
    } else {
        return "z";
    }
}

let lar = largest(1,3,2);
console.log ("largest of 3 numbers is "+ lar)