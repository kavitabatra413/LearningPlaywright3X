let order = new Promise(function(resolve, reject){

        let foodready = false;
        if(foodready){
            resolve("Pizza is delivered!");
        }
        else{
            reject("Order cancelled");
        }
});

console.log(order); //UnhandledPromiseRejection
console.log(order.catch(function(err) { 
    console.log(err);
}));

/*
Promise { <rejected> 'Order cancelled' }
Promise { <pending> }
Order cancelled
*/