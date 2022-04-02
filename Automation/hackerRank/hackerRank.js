const puppeteer = require("puppeteer");

let browserOPenPromise = puppeteer.launch({
    headless: false,
    defaultViewportnull: null,
    args: ["--start-maximized"],

    //chrome://version
    executablepath: "C:\Program Files\Google\Chrome\Application\chrome.exe"
});
browserOPenPromise
    .then(function(browser){
        console.log("browser is open");
        let allTabsPromise = browser.pages();
        return allTabsPromise;
    })
    .then(function(allTabs){
        let cTab = allTabs[0];
        console.log("new Tab");
        //URL to navigate page to
        let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(){
        console.log("opened hackerrank login page");
    })
    .catch(function(err){
        console.log(err);
    });