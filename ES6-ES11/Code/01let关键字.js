let a, b,c 
let e = 100;
let f = 520,g = 100, h = [] ,obj = {name :"xiao"} 

// 1.变量不能重复的声明
let str = "xiao"
// let str = "aodi"

//2 块级作用域 全局，函数 eval
// if else while for

{
    let name ="xiaoaod"
}
// console.log(name) //找不到变量name 

// 3.不存在变脸的提升 var关键字又变量的提升
console.log(value)  //undefined
var value = 10   
// console.log(letone)  //error
// let letone = 101  

// 4. 不影响作用域链
{
    let frist = 1;
    function fn(){
        console.log(frist);
    }
    fn();  //1
}
