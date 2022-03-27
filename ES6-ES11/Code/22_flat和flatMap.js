const arr = [12313,213,1,31,3,[12313,12,31,13,123[1232131,1,31,31,3,13,12]]]
// 参数为深度 是一个数字
console.log(arr.flat(2))


// flatMap

const arr1  = [123,213,13,1]
const res = arr1.map (item=>item*10)
console.log(res)
// 返回的是数组则展平
const res1 = arr1.flatMap (item=>[item*10])
console.log(res1)



let s1 = Symbol("aodi")
console.log(s1.description)