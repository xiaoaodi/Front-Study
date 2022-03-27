const { rejects } = require("assert");
const { resolve } = require("path");

let p1 = Promise.resolve(52123);

console.log(p1)
let p2 = Promise.resolve(new Promise((resolve,reject)=>{
    resolve("error")
}))

p2.then(value =>{
    console.log(value)
})
console.log(typeof p2)
console.log(p2)


let p4 = Promise.reject("nihao")
let p3 = Promise.reject(new Promise((resolve,reject)=>{
    reject("error")
}))
console.log(p4)
console.log(p3);
