
ReferenceError: getToken is not defined
getToken.then(function (token) {
    return getUser(token);
}).then(function (user) {
    console.log(user);
});

async function run(){
    let token = await getToken();
    let user = await getUser();
}

//as per chatGPT code should be , still error

// getToken()
//     .then(function (token) {
//         return getUser(token);
//     })
//     .then(function (user) {
//         console.log(user);
//     });

// async function run() {
//     let token = await getToken();
//     let user = await getUser(token);

//     console.log(user);
// }