//声明一个常量
const shool = "aodi"

// 1.一定要给初始值
// const A;  有问题

// 2一般的常量建议写大写
const ONE = 1;
// const one = 1 //不建议但是没有错

// 3.常量的值不能修改
// shool = 10 error

// 4. 块级作用域

{
    const PLAYER = "aodi"
}
// console.log(PLAYER) //error

// 5. 对于数组和对象元素的修改，不能算做对常量的修改不会报错
const TEMA = ["ADADA","DADA",123,21313,3123,2312]
TEMA.push("13131")
console.log(TEMA[3])