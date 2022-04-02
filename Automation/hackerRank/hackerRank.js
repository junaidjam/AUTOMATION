const puppeteer = require("puppeteer");

let email = "junaidakhtarjam@gmail.com";
let password = "Junaid@123";
let cTab;
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
        cTab = allTabs[0];
        console.log("new Tab");
        //URL to navigate page to
        let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitingLoginPagePromise;
    })
    .then(function(){
        console.log("opened hackerrank login page");
        let emailWillBeTypedPromise = cTab.type("input[name ='username']",email);
        return emailWillBeTypedPromise;
    })
    .then(function(){
        console.log("email typed");
        let passwordWillBeTypedPromise = cTab.type("input[type = 'password']",password);
        return passwordWillBeTypedPromise;
    })
    .then(function(){
        console.log("password is typed");
        let willBeLoggedInPromise = cTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        return willBeLoggedInPromise;
    })
    .then(function(){
        console.log("Successfully Logged In");
    })
    .catch(function(err){
        console.log(err);
    });