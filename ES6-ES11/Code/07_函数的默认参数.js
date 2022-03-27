// es6 允许给函数的参数赋默认值
// 1. 形参初始化 具有默认值的参数  一般位置要靠后

function add (a,b,c=100){
    return a+b+c
}

const res = add(10,20)
console.log(res)

// 2.与解耦赋值结合
function connect({host,user,pwd,port})
{
    console.log(host)
    console.log(user)
    console.log(pwd)
    console.log(port)
}

connect({
    host:"local",
    user:"aodi",
    pwd:"a131",
    port:30000
})