// 生成器就是一个特殊的函数
// 异步编程  纯回调函数  node FileSystem ajax mongdb

function *gen(){
    console.log("我是生成器")
}
// }
// let iter = gen()

// iter.next();

function *gen(){
    console.log("我是生成器1")
    yield "一致是";
    console.log("12121")
    yield "一定"
    console.log("nihaop")
}
let iter = gen()

// iter.next();
// iter.next();
// iter.next();
// iter.next();
// 我是生成器1
// 12121
// nihaop

for(let iter of gen())
{
    console.log(iter)
}

// 我是生成器1
// 一致是
// 12121
// 一定
// nihaop

// 生成器函数的参数

function * genen(arg)
{
    console.log("111")
    let one = yield "1111"
    console.log(one)
    let two = yield "2222"
    console.log(two)
    let three = yield "333"
    console.log(three)
}

let iterss = genen("aaaa")

console.log(iterss.next())
console.log(iterss.next("bbbbb"))
console.log(iterss.next("ccccc"))
console.log(iterss.next("ddddd"))