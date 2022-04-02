//constructing our own promise

let myPromise = new Promise(function(resolve , reject){
    let num1 = 1;
    let num2 = 2;
    let string  = "values is equal to 2";
    if(num1 + num2){
        // resolve();
        resolve(string);
    }
    else{
        reject("NO, VALUES ARE NOT EQUAL");
    }
})

myPromise.then(function(string){
    console.log(string);;
})
.catch(function(err){
    console.log(err);
});