async function sayHello() {
    return "Hello, QA!";
}
sayHello().then(function (msg) {
    console.log(msg);//Hello, QA!
});


//------------------------------------------------------- ---

async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);//Status code: 200
}
getStatus();

//------------------------------------------------------- ---

async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);//Opened browser

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);//Clicked login

    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);//Verified dashboard
}

testFlow();

//------------------------------------------------------- ---

async function riskyTest() {
    try {
        let data = await Promise.reject("Element not found");
        console.log(data);
    } catch (err) {
        console.log("Test failed:", err);//Test failed: Element not found
    }
}

riskyTest();

//------------------------------------------------------- ---
async function apiTest() {
    try {
        let response = await Promise.resolve({ status: 201, body: "Created" });
        console.log("Status:", response.status);//Status: 201
        console.log("Body:", response.body);//Body: Created
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Test complete");//Test complete
    }
}

apiTest();

//------------------------------------------------------- ---
console.log("A");//A
async function test() {
    console.log("B");//B
    await Promise.resolve();
    console.log("C");//C
}
test();
console.log("D");//D
