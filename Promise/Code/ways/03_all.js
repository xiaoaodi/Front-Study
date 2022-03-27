const { resolve } = require("path")

let p1 = new Promise((resolve,reject)=>{
    resolve("ok")
})

// let p2 = Promise.reject("error")
let p2 = Promise.resolve(1231)
let p3 = Promise.resolve("aodi")

const result = Promise.all([p1,p2,p3])

console.log(result)