/*
Input abc
Output abc acb bac bca cab cba
Three distinct letters give six arrangements, listed in dictionary order.
*/
function permutations(str) {
    if (str.length === 0) {
        return [""];
    }

    let result = [];

    for (let i = 0; i < str.length; i++) {
        let current = str[i];

        // Remove current character
        let remaining = str.slice(0, i) + str.slice(i + 1);

        // Find permutations of remaining characters
        let smallerPermutations = permutations(remaining);//bc and cb

        // Add current character to each permutation
        for (let perm of smallerPermutations) {//bc and cb
            result.push(current + perm);
        }
    }

    return result;
}

console.log(permutations("ABC"));

//The important idea is recursion: choose one character, remove it,
//  find all permutations of the remaining characters, 
// and then put the chosen character back in front.
//Take each value from smallerPermutations one by one and store it 
// in a variable called perm