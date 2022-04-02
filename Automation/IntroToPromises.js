const fs = require('fs');

console.log("before");

//Synchronous working
// let data = fs.readFileSync("f1.txt");
// console.log(data + "");

//Asynchronous working
// fs.readFile("f1.txt",cb);
// function cb(err,data){
//     if(err){
//         console.log(err);
//     }
//     else console.log(data + "");
// }

//Promises Working
let promiseThatFileWillBeRead = fs.promises.readFile("f1.txt");
console.log(promiseThatFileWillBeRead);

// promiseThatFileWillBeRead
//     .then(function printData(data){
//     console.log("Promise Is Fulfilled");
//     console.log(data + "");
// });

promiseThatFileWillBeRead.then(printData);
promiseThatFileWillBeRead.catch(printError);
console.log("after");

function printData(data){
    console.log("Promise Is Fulfilled");
    console.log(data + "");
}

function printError(err){
    console.log(err);
}