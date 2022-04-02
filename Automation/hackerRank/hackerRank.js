const puppeteer = require("puppeteer");

// let {email} = 
let email = "";
let password = "";
let curTab;
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
        curTab = allTabs[0];
        console.log("new Tab");
        //URL to navigate page to
        let visitingLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(){
        console.log("opened hackerrank login page");
        let emailWillBeTypedPromise = curTab.type("input[name ='username']",email);
        return emailWillBeTypedPromise;
    })
    .then(function(){
        console.log("email typed");
        let passwordWillBeTypedPromise = curTab.type("input[type = 'password']",password);
        return passwordWillBeTypedPromise;
    })
    .then(function(){
        console.log("password is typed");
        let willBeLoggedInPromise = curTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        return willBeLoggedInPromise;
    })
    .then(function(){
        console.log("Successfully Logged In");
    })
    .catch(function(err){
        console.log(err);
    });