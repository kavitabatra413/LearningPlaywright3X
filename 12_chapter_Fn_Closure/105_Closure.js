function startBrowser() {
    let name = "edge";
    //installBrowser created as standalone function
    function installBrowser() {
        console.log(name);
        let fail = true;
        if (fail) {
            console.log('Failed!');
        }
    }
    return installBrowser;
}

const runTc = startBrowser();//So now runTc is holding a reference to the installBrowser function.
runTc();//Now you call the function stored in runTc:
//runTc.installBrowser();//TypeError: runTc.installBrowser is not a function

//installBrowser();//ReferenceError: installBrowser is not defined*/
