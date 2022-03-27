let arr = [1,23,1313,3123,412,43,123]

// 1.数组去重
let sets = new Set(arr);
console.log(sets)

let arr2 = [1,23,231,34,324,23432]
// 2. 交集
let res = [...new Set(arr)].filter(item=> new Set(arr2).has(item))
console.log(res)

//3. 并集
let union = [...new  Set([...arr,...arr2])];
console.log(union)

// 4.差集
let diff = [...new Set(arr)].filter(item=>!(new Set(arr2).has(item)))
console.log(diff)

