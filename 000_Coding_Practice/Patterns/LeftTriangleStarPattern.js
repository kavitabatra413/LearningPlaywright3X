
let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    // Spaces
    for (let j = i; j <=n; j++) {
        row += "  ";
    }

    // Stars
    for (let j = 0; j <=i; j++) {
        row += "* ";
    }

    console.log(row);
}