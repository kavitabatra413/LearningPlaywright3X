let n = 5;
for (let i = 0; i < n; i++) { // each row
    let row = "";

    for (let j = 0; j <= i; j++) { // each cell of row
        row += "*";
    }
    console.log(row);
}

/*

*
**
***
****
*****

*/