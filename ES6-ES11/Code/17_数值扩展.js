// 1.二进制和八进制
let b  =0b1010
let o = 0o10
let d = 100
let x= 0xff
console.log(o)
console.log(x)
console.log(d)
console.log(b)

// 2. Number.isFinite 检测一个数值是否为有限数
console.log(Number.isFinite(100))
console.log(Number.isFinite(100/0))
console.log(Number.isFinite(Infinity))

// 3.判断一个数值是否为NaN
console.log(Number.isNaN(1231))

// 3. NUmber。parseInt
console.log(Number.parseInt("34234242342love"));
console.log(Number.parseFloat("9.123123sahea"))


// 5.判断一个是否为整数
console.log(Number.isInteger(111))

// 6. Math.trunc 将数字的小数部分抹掉
console.log(Math.trunc(2.222312))


// 7. Math.sign 判断一个数是大于零等于零或者小于零


console.log(Math.sign(1000))
console.log(Math.sign(0))

console.log(Math.sign(-2000));









