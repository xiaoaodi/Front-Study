const { resolve } = require("path");

let p =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("ok")
    }, 1000);
})

p.then(value =>{
    console.log(value)
}).then(value=>{
    console.log(value)
}).then(value=>{
    return new Promise();
}).catch(reson=>{
    console.warn(reson)
})