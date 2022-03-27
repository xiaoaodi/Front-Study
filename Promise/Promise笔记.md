---
title: Promise的理解与使用(快速上手版）
date: 2022/3/24 23:00
---















# #目录

[TOC]



# 一、Promise的理解与使用

1、概念:

​	Promise是`异步编程的一种解决方案`，比传统的解决方案——回调函数和事件——更合理和更强大。所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

通俗讲，`Promise是一个许诺、承诺`,是对未来事情的承诺，承诺不一定能完成，但是无论是否能完成都会有一个结果。

* Pending  正在做。。。
* Resolved 完成这个承诺
* Rejected 这个承诺没有完成，失败了

​	Promise 用来预定一个不一定能完成的任务，要么成功，要么失败

​	在具体的程序中具体的体现，通常用来封装一个异步任务，提供承诺结果

Promise 是异步编程的一种解决方案，`主要用来解决回调地狱的问题，可以有效的减少回调嵌套`。真正解决需要`配合async/await`

2、特点:

​	(1)对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

​	(2)一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。

3、缺点:

​	(1)无法取消Promise，一旦新建它就会立即执行，无法中途取消。和一般的对象不一样，无需调用。

​	(2)如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。

​	(3)当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## 1. Promise是什么?

### 1.1 理解

1. 抽象表达:  

​	1) Promise 是一门新的技术(ES6 规范) 

​	2)Promise 是 JS 中`进行异步编程`的新解决方案 备注：旧方案是单纯使用回调函数

2. 具体表达: 

  1) 从语法上来说: Promise 是一个`构造函数`

  2) 从功能上来说: promise 对象用来封装一个异步操作并可以获取其成功/ 失败的结果值

### 1.2 promise 的状态

#### 1.2.1 promise 的状态

实例对象中的一个属性 『PromiseState』

* pending  未决定的
* resolved / fullfilled  成功
* rejected  失败

#### 1.2.2  promise 的状态改变

1. pending 变为 resolved 

2. pending 变为 rejected

  说明: `只有这 2 种`, 且一个 promise 对象`只能改变一次` 无论变为成功还是失败, 都会有一个结果数据 成功的结果数据一般称为 value, 失败的结果数据一般称为 reason

### 1.3 promise的基本使用

#### 1..3.1 使用 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 300px;
            height: 100px;
            border: solid 1px #ccc;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div id="box">
        <h2 id="ha"> 大抽奖</h2>
        <br>

        <button id="btn">
            进行抽奖
        </button>
        <script>
            function rand(n, m) {
                return Math.ceil(Math.random() * (n - m + 1) + m - 1)
            }

            document.getElementsByTagName("button")[0].onclick = function(){
            //     setTimeout(() => {
            //         let value =  rand(1,100);
            //         if(value <=30)
            //         {
            //             alert("你中奖了")
            //         }
            //         else{
            //             alert("再接再厉")
            //         }
            //     }, 1000);

            //用promise函数进行修改
            const pro = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let value = rand(1, 100);
                    if (value <= 30) {
                        resolve(value)
                    }
                    else {
                        reject(value)
                    }
                }, 1000);
            });

            pro.then((value)=>{
                alert("恭喜你中将了" + value)
            },(reason)=>{
                alert("再接再厉" + reason)
            })
        }
        </script>
    </div>
</body>

</html>
```

#### 1.3.2 使用 promise 封装 ajax 异步请求

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>封装请求</h2>
    <br>
    <button>
        发送请求
    </button>
    <script>
        const btn = document.getElementsByTagName("button")[0].onclick = function () {
            const pro = new Promise((resolove, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open("GET", "http://127.0.0.1:9000/server")
                xhr.send()
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolove(xhr.response)
                        }
                        else {
                            reject(xhr.status)
                        }
                    }
                }
            });

            pro.then((value)=>{
                console.log(value)
            },(reason)=>{
                console.log(reason)
            })
        }

    </script>
</body>

</html>


```

```js
//服务端代码
const express = require("express")

var app = new express();

app.all("/server",(request,responed)=>{
    responed.setHeader("Access-Control-Allow-Origin","*")
    responed.send("server send")
})

app.listen("9000",function(){
    console.log("9000端口的监听已经开启")
})
```

#### 1.3.3 fs模块使用Promise

```js
const fs =require('fs')

// fs.readFile('./Code/resource/content.txt',(err, data)=>{
//     if(err)
//     {
//         throw err;
//     }
//     console.log(data.toString())
// })


const pro = new Promise((resolve,reject)=>{
        fs.readFile('./Code/resource/content.txt',(err, data)=>{
        if(err)
        {
            reject(err)
        }
        else{
            resolve(data)
        }
    })
})

pro.then((value)=>{
    console.log(value.toString())
}, (err)=>{
    console.log(err,toString())
})
```

```js
function minReadFile(path)
{
    return new Promise((resolve,reject)=>{
        require("fs").readFile(path,(err,data)=>{
            if(err)
            {
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

minReadFile("./Code/resource/content.txt").then((value)=>{
    console.log(value.toString())
} , (reson)=>{
    console.log(reson.toString())
})
```

#### 1.3.4 `util.promisify方法`

```js
const util = require("util")

const fs = require("fs")

let minReadFile = util.promisify(fs.readFile);

minReadFile("./Code/resource/content.txt").then(value=>{
    console.log(value.toString())
}, reson =>{
    console.log(reson)
})
```

#### 1.3.5.异常穿透

可以在每个then()的第二个回调函数中进行err处理,也可以利用异常穿透特性,到最后用`catch`去承接统一处理,两者一起用时,前者会生效(因为err已经将其处理,就不会再往下穿透)而走不到后面的catch

在每个.then()中我可以将数据再次传出给下一个then()

```js
mineReadFile('./11.txt').then(result=>{
  console.log(result.toString())
  return result
},err=>console.log(err))
.then(data=>console.log(data,"2222222"))
.catch(err=>console.log("这是catch的"))
```

## 2. 为什么要用Promise?

### 2.1 指定回调函数的方式更加灵活

1. 旧的: 必须在启动异步任务前指定 
2. promise: 启动异步任务 => 返回promie对象 => 给promise对象绑定回调函 数(甚至可以在异步任务结束后指定/多个)

### 2.2 支持链式调用, 可以解决回调地狱问题

#### 	2.2.1  什么是回调地狱

回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调执行的条件

#### 	2.2.2  回调地狱的缺点?

不便于阅读 不便于异常处理

#### 	2.2.3  解决方案?

promise `链式调用`,

用来解决回调地狱问题，但是`只是简单的改变格式`，并没有彻底解决上面的问题真正要解决上述问题，一定要利用promise再加上await和async关键字实现异步传同步

#### 	2.2.4 终极解决方案?

promise +async/await

## 3. Promise中的常用 API 概述

> 此处列举几个最常用的API的概述,如果想看详细描述的可以继续往下看下方的  **Promise方法的具体使用** 描述

#### 	3.1 Promise 构造函数: Promise (excutor) {}

(1) executor 函数: 执行器 (resolve, reject) => {}

(2) resolve 函数: 内部定义成功时我们调用的函数 value => {} 

(3) reject 函数: 内部定义失败时我们调用的函数 reason => {} 

说明: executor 会在 Promise 内部立即`同步调用`,异步操作在执行器中执行,换话说Promise支持同步也支持异步操作

#### 	3.2 Promise.prototype.then 方法: (onResolved, onRejected) => {}

(1) onResolved 函数: 成功的回调函数 (value) => {} 

(2) onRejected 函数: 失败的回调函数 (reason) => {} 

说明: 指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调 返回一个新的 promise 对象

#### 	 3.3 Promise.prototype.catch 方法: (onRejected) => {}

(1) onRejected 函数: 失败的回调函数 (reason) => {}

说明: then()的语法糖, 相当于: then(undefined, onRejected)

(2) 异常穿透使用:当运行到最后,没被处理的所有异常错误都会进入这个方法的回调函数中	

#### 	3.4 Promise.resolve 方法: (value) => {}

(1) value: 成功的数据或 promise 对象 

说明: 返回一个成功/失败的 promise 对象,直接改变promise状态

#### 3.5 Promise.reject 方法: (reason) => {}

(1) reason: 失败的原因 

说明: 返回一个失败的 promise 对象,直接改变promise状态,`代码示例同上`

#### 3.6 Promise.all 方法: (promises) => {}

promises: 包含 n 个 promise 的数组 

说明: 返回一个新的 promise, 只有所有的 promise `都成功才成功`, 只要有一 个失败了就直接失败

```js
let p1 = new Promise((resolve, reject) => { resolve('成功');  })
let p2 = Promise.reject('错误错误错误');
let p3 = Promise.resolve('也是成功')
const result = Promise.all([p1, p2, p3]);
console.log(result);
```

#### 3.7 Promise.race 方法: (promises) => {}

(1) promises: 包含 n 个 promise 的数组 

说明: 返回一个新的 promise, `第一个完成`的 promise 的结果状态就是最终的结果状态,

如p1延时,开启了异步,内部正常是同步进行,所以`p2>p3>p1`,结果是`P2`

```js
let p1 = new Promise((resolve, reject) => {
 setTimeout(() => {
   resolve('OK');
 }, 1000);
})
let p2 = Promise.resolve('Success');
let p3 = Promise.resolve('Oh Yeah');
//调用
const result = Promise.race([p1, p2, p3]);
console.log(result);
```

### 4、Promise的几个关键问题（重点）

#### 4.1 如何改变 promise 的状态?

>(1) resolve(value): 如果当前是 pending 就会变为 resolved 
>
>(2) reject(reason): 如果当前是 pending 就会变为 rejected 
>
>(3) 抛出异常: 如果当前是 pending 就会变为 rejected

#### 4.2 一个 promise 指定多个成功/失败回调函数, 都会调用吗?

当 promise `改变为对应状态时`都会调用,改变状态后,多个回调函数都会调用,并不会自动停止

```js
let p = new Promise((resolve, reject) => {  resolve('OK');});
///指定回调 - 1
p.then(value => {  console.log(value); });
//指定回调 - 2
p.then(value => { alert(value);});
```

4.3 改变 promise 状态和指定回调函数谁先谁后?

(1) 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调 

​	先指定回调再改变状态(`异步`):先指定回调--> 再改变状态 -->改变状态后才进入异步队列执行回调函数

​	先改状态再指定回调(`同步`):改变状态 -->指定回调 `并马上执行`回调

(2) 如何先改状态再`指定`回调?   -->注意:指定并不是执行

​	① 在执行器中直接调用 resolve()/reject() -->即,不使用定时器等方法,执行器内直接同步操作 

​	② 延迟更长时间才调用 then() 	-->即,在`.then()`这个方法外再包一层例如延时器这种方法

(3) 什么时候才能得到数据? 

​	① 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据 

​	② 如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据

```js
let p = new Promise((resolve, reject) => {
//异步写法,这样写会先指定回调,再改变状态
setTimeout(() => {resolve('OK'); }, 1000);
//这是同步写法,这样写会先改变状态,再指定回调
resolve('OK'); 
});
p.then(value => {console.log(value);}, reason => {})
```

#### 4.3 改变 promise 状态和指定回调函数谁先谁后?

(1) 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调 

​	先指定回调再改变状态(`异步`):先指定回调--> 再改变状态 -->改变状态后才进入异步队列执行回调函数

​	先改状态再指定回调(`同步`):改变状态 -->指定回调 `并马上执行`回调

(2) 如何先改状态再`指定`回调?   -->注意:指定并不是执行

​	① 在执行器中直接调用 resolve()/reject() -->即,不使用定时器等方法,执行器内直接同步操作 

​	② 延迟更长时间才调用 then() 	-->即,在`.then()`这个方法外再包一层例如延时器这种方法

(3) 什么时候才能得到数据? 

​	① 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据 

​	② 如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据

```js
let p = new Promise((resolve, reject) => {
//异步写法,这样写会先指定回调,再改变状态
setTimeout(() => {resolve('OK'); }, 1000);
//这是同步写法,这样写会先改变状态,再指定回调
resolve('OK'); 
});
p.then(value => {console.log(value);}, reason => {})
```

(4) 个人理解--结合源码

​	源码中,promise的状态是通过一个`默认为padding`的变量进行判断,所以当你`resolve/reject`延时(异步导致当then加载时,状态还未修改)后,这时直接进行p.then()会发现,目前状态还是`进行中`,所以只是这样导致只有同步操作才能成功.

​	所以promise将传入的`回调函数`拷贝到promise对象实例上,然后在`resolve/reject`的执行过程中再进行调用,达到异步的目的

#### 4.4 promise.then()返回的新 promise 的结果状态由什么决定?

(1) 简单表达: 由 then()指定的回调函数执行的结果决定 

(2) 详细表达: 

​	① 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常 

​	② 如果返回的是非 promise 的任意值, 新 promise 变为 resolved, value 为返回的值 

​	③ 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果

```js
let p = new Promise((resolve, reject) => {
resolve('ok');
});
//执行 then 方法
let result = p.then(value => {
console.log(value);
// 1. 抛出错误 ,变为 rejected
throw '出了问题';
// 2. 返回结果是非 Promise 类型的对象,新 promise 变为 resolved
return 521;
// 3. 返回结果是 Promise 对象,此 promise 的结果就会成为新 promise 的结果
return new Promise((resolve, reject) => {
// resolve('success');
reject('error');
});
}, reason => {
console.warn(reason);
});
```

#### 4.5 promise 如何串连多个操作任务?

(1) promise 的 then()返回一个新的 promise, 可以开成 then()的链式调用 

(2) 通过 then 的链式调用串连多个同步/异步任务,这样就能用`then()`将多个同步或异步操作串联成一个同步队列

```html
<script>
let p = new Promise((resolve, reject) => { setTimeout(() => {resolve('OK'); }, 1000); });
p.then(value => {return new Promise((resolve, reject) => { resolve("success"); });})
.then(value => {console.log(value);})
.then(value => { console.log(value);})
</script>
```

#### 4.6 promise 异常传透?

* 当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调
* 前面任何操作出了异常, 都会传到最后失败的回调中处理

```js
getJSON('./aodi.json')
   .then(function(posts) { throw new Error('抛出异常') })
	.then(res=>console.log(res),e=>console.log('被then的错误回调捕获',e) )
   .catch(function(error) {
		 // 处理 getJSON 和 前一个回调函数运行时发生的错误
 		console.log('错误捕获: ', error);
	});
//执行结果: 被then的错误回调捕获 Error: 抛出异常

/******************** 利用异常穿透 ****************************************/
getJSON('./hong.json')
   .then(function(posts) { throw new Error('抛出异常') })
	.then(res=>console.log(res) ) //此处差异,不指定 reject 回调,利用异常穿透传到最后
   .catch(function(error) {
 		console.log('错误捕获: ', error);
	});
//执行结果:  错误捕获:  Error: 抛出异常
```

#### 4.7 中断 promise 链?

在`关键问题2`中,可以得知,当promise状态改变时,他的链式调用都会生效,那如果我们有这个一个实际需求:我们有5个then(),但其中有条件判断,如当我符合或者不符合第三个then条件时,要直接中断链式调用,不再走下面的then,该如何?

(1) 当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数 

(2) 办法: 在回调函数中返回一个 `pendding` 状态的`promise 对象`

```html
<script>
let p = new Promise((resolve, reject) => {setTimeout(() => { resolve('OK');}, 1000);});
p.then(value => {return new Promise(() => {});})//有且只有这一个方式
.then(value => { console.log(222);})
.then(value => { console.log(333);})
.catch(reason => {console.warn(reason);});
</script>
```

## 5. Promise的实际应用

加载图片的例子：

```js
const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};
```

使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个`Promise`对象。

```
function getFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

const g = function* () {
    try {
        const foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run(generator) {
    const it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);
```

# 二、Promise+ async + await 

1)Promise==>异步

2)await==>异步转同步

1. await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用。
2. await 后面可以跟任何的JS 表达式。虽然说 await 可以等很多类型的东西，但是它最主要的意图是用来等待 Promise 对象的状态被 resolved。如果await的是 promise对象会造成异步函数停止执行并且等待 promise 的解决,如果等的是正常的表达式则立即执行		

3)async==>同步转异步

1.    方法体内部的某个表达式使用await修饰，那么这个方法体所属方法必须要用async修饰所以使用awit方法会自动升级为异步方法

## 1. async函数

1. 函数的返回值为 promise 对象 
2. promise 对象的结果由 async 函数执行的返回值决定

## 2. await表达式

1. await 右侧的表达式一般为 promise 对象, 但也可以是其它的值 

2. 如果表达式是 promise 对象, await 返回的是 promise 成功的值 
3. 如果表达式是其它值, 直接将此值作为 await 的返回值

## 3.注意

1. await 必须写在 async 函数中, 但 async 函数中可以没有 await 
2. 如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

#### 

# 三、宏任务与微任务

1. JS中用来存储待执行回调函数的队列包含2个不同特定的列队

  - `宏队列`:用来保存待执行的宏任务(回调),比如:`定时器`回调/ajax回调/dom事件回调
  - `微队列`:用来保存待执行的微任务(回调),比如:`Promise`的回调/muntation回调

2. JS执行时会区别这2个队列:
   - JS执行引擎首先必须执行所有的`初始化同步任务`代码
   - 每次准备取出第一个`宏任务执行前`,都要将所有的`微任务`一个一个取出来执行
   - **同步任务** --> **微任务** --> **宏任务**

## 1. 代码与示例

### 1.1 首先给出注释的栗子举一个

```js
setTimeout(() => { 
   console.log('timeout callback1（）')//立即放入宏队列
   Promise.resolve(3).then(
     value => { 
       console.log('Promise onResolved3()', value)//当这个宏任务执行后 立马放入微队列,所以这个微任务执行完后下个宏任务才能执行 
     }
   )
 }, 0)

 setTimeout(() => { 
   console.log('timeout callback2（）') //立即放入宏队列,
 }, 0)

 Promise.resolve(1).then(
   value => { 
     console.log('Promise onResolved1()', value)//立即放入微队列
     setTimeout(() => {
       console.log('timeout callback3（）', value) //立即放入宏任务
     }, 0)
   }
 )

 Promise.resolve(2).then(
   value => { 
     console.log('Promise onResolved2()', value)//立即放入微队列
   }
 )
console.log('同步代码') //同步代码立即执行
```

```js
'同步代码',
'Promise onResolved1()',
'Promise onResolved2()',
'timeout callback1（）',
'Promise onResolved3()',
'timeout callback2（）',
'timeout callback3（）'
```



### 1.2 尝试自己思考下

```js
setTimeout(() => console.log('代码开始执行'),0)
new Promise((resolve,reject) => {
console.log('开始for循环');
for(let i=0;i<10000;i++){
i == 99 && resolve()
}
}).then(() => console.log('执行then函数'))
console.log('代码执行结束');
```

```js
开始for循环
代码执行结束
执行then函数
代码开始执行
```