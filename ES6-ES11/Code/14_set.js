
// 创建对象
let sets =  new Set();

let s2 = new Set(["aaa","bbbb","cccc","aaaa"])

//元素的个数
console.log(s2.size);
//增加元素
s2.add("eeeee")

console.log(s2)

//删除元素
s2.delete("aaa")

console.log(s2.has("cccc"))

//清空
s2.clear();
console.log(s2)