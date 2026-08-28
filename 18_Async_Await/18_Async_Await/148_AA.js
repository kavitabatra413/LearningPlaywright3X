// An async function always returns a promise.even 
// if you don't write return.
// await reads the resolved value inside another async function
// //await is NOT mandatory inside an async function.
//We use await when we want to wait for a Promise and get its result directly.

async function getTestResults() {
    return "Pass";
}
//await is not mandatory when calling an async function.
getTestResults().then(function (results) {
    console.log(results);
});

async function runTest() {
    let result = await Promise.resolve("Login test passed");
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}

runTest();
