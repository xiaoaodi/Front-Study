// es6允许按照一定模式从数组和对象中提取值，对变量进行赋值
// 这被称为解构赋值
// 1.数组的解构

const F4 = ["A","B","C","D"]

let [xiao,liu,zhao,song] = F4

console.log(xiao) //A
console.log(liu) //B
console.log(zhao)//C
console.log(song) //D

// 2.对象的解构
const ZHAO = {
    name:"aodi",
    age: 10,
    xiaopin:function(){
        console.log("我可以吃法")
    }
}
let {name,age,xiaopin} = ZHAO
console.log(name) //aodi
console.log(age) //10
xiaopin() //我可以吃法

