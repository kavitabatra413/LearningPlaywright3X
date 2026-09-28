function test(dadad, callMewhenDone){
    console.log("Hi start the Testcase");
    callMewhenDone();
}

test("Verify the login page is working", async (page) =>{

});

function garimaStory(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy!")
    //....
    console.log("Store is empty!")
    callMeWhenStoreIsEmpty();
}

garimaStory("starting shoppping", ()=>{   //arrow function.
     console.log("lets start shopping....")
});
/*
Store is busy!
Store is empty!
lets start shopping....
*/