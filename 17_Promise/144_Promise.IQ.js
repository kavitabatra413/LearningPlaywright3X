let p = new Promise(function (resolve, reject) {
    resolve(42);
});
p.then(function (value) {
    console.log("Answer:", value);//Answer: 42
});



let p1 = new Promise(function (resolve, reject) {
    reject("Something broke");
});
p1.catch(function (err) {
    console.log("Caught:", err);//Caught: Something broke
});


let p2 = Promise.resolve(5);
p2.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);//Result: 50
});

Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
        return val + 1;
    })
    .then(function (val) {
        console.log(val);
    });
    /*1
      2
      3
*/ 

Promise.resolve("start")
    .then(function (val) {
        console.log(val); //start
        throw new Error("Broke at step 2"); //Caught: Broke at step 2
    })
    .then(function () {
        console.log("This will NOT run");
    })
    .catch(function (err) {
        console.log("Caught:", err.message);
    });
   
  
Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err); //Error: Test failed
    })
    .finally(function () {
        console.log("Cleanup done"); //Cleanup done
    });
   
   
    