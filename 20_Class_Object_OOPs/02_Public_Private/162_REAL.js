class Browser {
    constructor(name) {
        this.name = name;
//There is no requirement that isOpen must appear in the constructor parameters.
//You're simply creating another property and giving it a fixed value:
        this.isOpen = true;
        console.log(name + " launched");
    }
    startBrowser() {
        console.log("starting the browser")
    }
    closeBrowser() {
        console.log("closing the browser")
    }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
console.log(chrome.isOpen);
chrome.startBrowser()
chrome.closeBrowser()
