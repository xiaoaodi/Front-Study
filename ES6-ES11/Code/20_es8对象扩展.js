const obj ={
    name :"aodi",
    age:19
} 

// 获取所有的键值和值
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// 创建一个map
const m = new Map(Object.entries(obj))
console.log(m.get("name"))


console.log(Object.getOwnPropertyDescriptors(obj))

// 描述符号
const obj1 = Object.create(null,{
    name:{
        value: "aodi",
        age:19
    }
})

console.log(Object.getOwnPropertyDescriptors(obj1))