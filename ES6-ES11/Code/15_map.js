
// 创建
let maps = new Map();


maps.set("111","aaa")

maps.set("change",function(){
    console.log("我们可以接受函数")
})


let key = {
    shool:"aodi"
}

maps.set(key,[12,3,13,13,12])

//size
console.log(maps.size)

//delete
maps.delete("111")

console.log(maps)

//获取
console.log(maps.get("change"))
console.log(maps.get(key))

//clear
// maps.clear();
console.log(maps)

//遍历maps iteartor

for(let iterator of maps)
{
    console.log(iterator)
}

