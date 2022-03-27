// 1.创建
let s = Symbol("aodi")

let s1 = Symbol("aodi")

console.log(s ===s1) //false
// 2.不能和其他的数据进行运算

let one = Symbol(10)
// let two = one + 10 //error 


// 7中数据类型

// Number String Boolean Object null undefined Symbol BigInt
