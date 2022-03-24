---
title: JavaScript学习巩固基础外加进阶(上)底层原理
date: 2022/3/22 22:30

---

# #目录

[TOC]

# 一、javaScript基础总结

## 1、数据类型相关知识点

### 1.1 基本数据类型

> 1. String: 任意字符串
> 2. Number:任意的数值(整数和浮点数)
> 3. boolean:undefined
> 4. null:null --> 使用typeof返回的类型为object
> 5. undefined: undefined 未定义
> 6. symnol :新增 symbol是基本数据类型，对象是 Symbol原始值的封装
> 7. bigint: 是一种数字类型的数据，它可以标识任意精度格式的整数

### 1.2 引用数据类型

> 1. Object: 任意的对象
> 2. Function: 一种特别的对象（可以执行） -- 内部是可执行的代码块
> 3. Array: 特别的对象，是以key为数值下标属性,内部的结构是有序的

### 1.3 判断的方法

#### 1.3.1 typeof

> **typeof** 返回的是一个字符串目标是未经计算的操作数的类型
>
> 可以判断: undefined、数值、字符串、布尔值、function
>
> 不能判断：null和object object和array
>
> 代码示例：
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
>     <script>
>      // typeof返回数据类型的字符串表达
>     var obj
>     //注意:typeof返回的是字符串
>     console.log(obj, typeof obj, typeof obj === 'undefined',obj === undefined )  // undefined 'undefined' true true
>     console.log(undefined === 'undefined') //false  undefined不是字符串
> 
>     obj = 40000
>     console.log(typeof a==='number') //true
> 
>     obj = 'aodi'
>     console.log(typeof obj==='string') //true
>     console.log(typeof obj==='String') //false  -->注意,返回的类型为小写
>     obj = true
>     console.log(typeof obj==='boolean') //true
>     obj = null
>     console.log(typeof obj, obj===null) // 'object'  true
> 
>     let b={}
>     console.log(typeof b,typeof null, '-------') // 'object' 'object'  -->所以Typeof不能判断null与object
>     </script>
> </head>
> <body>
>     
> </body>
> </html>
> ```
>
> 注意`: 运行`console.log(typeof undefined)`时,得到的的也是一个`字符串,同时为小写 'undefined'`

#### 1.3.2`instanceof`(判断实例方法)

>  专门判断对象`的具体类型
>
> **`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。
>
> 代码示例:
>
> ```js
> var b1 = {
>      b2: [1, 'abc', console.log],
>   //可以简化成 b3:()=>()=> 'aodi'  -->高阶函数相关知识
>      b3: function () {
>        return  () =>{  return   'aodi'}
>      }
>    }
>   /**使用instanceof进行对象判断*/
>    console.log(b1 instanceof Object, b1 instanceof Array) // true  false
>    console.log(b1.b2 instanceof Array, b1.b2 instanceof Object) // true true
>    console.log(b1.b3 instanceof Function, b1.b3 instanceof Object) // true true
> 
>    /**使用typeof进行对象中某属性的判断*/
>    console.log(typeof b1.b2, typeof null) // 'object' 'object'  
>    console.log(typeof b1.b3==='function') // true
>    console.log(typeof b1.b2[2]==='function') //true
> 
>    /**调用对象与数组中某函数示例*/
>    b1.b2[2]('调用console.log打印hongjilin')    //调用console.log打印hongjilin
>    console.log(b1.b3()()) // hongjilin
> ```

#### 1.3.3 *`===`*

> 可以判断: undefined, null
>
> 简而言之，在比较两件事情时，`双等号将执行类型转换`;` 三等号将进行相同的比较，而不进行类型转换` (如果类型不同, 只是总会返回 false )
>
> 

```js
console.log(null === undefined);  //false
var obj 
console.log(obj === undefined) //true
console.log(obj === null) //false
```

### 1.4 相关问题引出

#### 1.4.1 undefined与null的区别?

> undefined代表定义未赋值
>
> nulll定义并赋值了, 只是值为null
>
> 代码示例
>
> ```js
>    var obj
>    console.log(obj)  // undefined
>    obj = null
>    console.log(obj) // null
> ```

#### 1.4.2 什么时候给变量赋值为null呢?

> 初始赋值, 表明将要赋值为对象,`可以用做约定俗成的占位符`
>
> 结束前, 让对象成为垃圾对象(被垃圾回收器回收)
>
> 代码示例
>
> ```js
>    var b = null  // 初始赋值为null, 表明将要赋值为对象
>    //确定对象就赋值
>    b = ['atguigu', 12]
>    //最后在不使用的时候,将其引用置空,就可以释放b这个对象占用的内存      ---当没有引用指向它的对象称为垃圾对象
>    b = null // 让b指向的对象成为垃圾对象(被垃圾回收器回收)
> ```

#### 1.4.3 *严格区别变量类型与数据类型?*

> 数据的类型
>
> 基本类型
>
> 对象类型
>
> 变量的类型(变量内存值的类型)
>
> 基本类型: 保存就是`基本类型`的数据
>
> 引用类型: 保存的是地址值(对象类型)

#### 1.4.4 字符串对比*`>`、`<`*以及方法

> Javascript字符串在进行大于(小于)比较时，会根据第一个不同的字符的ascii值码进行比较，当数字(number)与字符串(string)进行比较大小时，会强制的将数字(number)转换成字符串(string)然后再进行比较
>
> ```js
> (function(){
>       console.log('13'>'3'); // 输出：false
>       console.log(5>'6');  // 输出： false
>       console.log('d'>'ABDC') // 输出： true
>       console.log(19 > 'ssf') // 输出 false
>       console.log('A'>'abcdef') // 输出 false
>   })()
> ```

## 2、数据,变量, 内存的理解

### 2.1 什么是数据?

> 1. 存储在内存中代表特定信息的'东西', 本质上是0101...
>
> 2. 数据的特点: `可传递`, `可运算`    -->let a=0;b=a 体现可传递
>
> 3. 一切皆数据
>
> 4. 内存中所有操作的目标: 数据   对数据进行算术运算、逻辑运算、赋值、运行函数

### 2.2 什么是内存?

> 1. 内存条通电后产生的可储存数据的空间(临时的)
> 2. 内存产生和死亡: 内存条(电路版)==>通电==>产生内存空间==>存储数据==>处理数据==>断电==>内存空间和数据都消失
> 3. 一块小内存的2个数据：地址值和内部存储的数据
> 4. 内存分类：栈: 全局变量/局部变量  堆: 对象

### 2.3 什么是变量?

> 可变化的量, 由变量名和变量值组成
>
> 每个变量都对应的一块小内存, 变量名用来查找对应的内存, 变量值就是内存中保存的数据
>
> ps:变量`obj.xx`-->`.`相当于拿着地址找到后面对应的内存,所以只有当我变量中存的是地址,才可以用`.`

### 2.4 内存,数据, 变量三者之间的关系

> 内存用来存储数据的空间, 变量是内存的标识

### 2.5 相关问题引出

#### 2.5.1 *关于赋值和内存的问题*

> let a = xxx, a内存中到底保存的是什么?
>
> xxx是基本数据, 保存的就是这个数据
>
> xxx是对象, 保存的是对象的地址值
>
> xxx是一个变量, 保存的xxx的内存内容(可能是基本数据, 也可能是地址值)

#### 2.5.2 *关于引用变量赋值问题*

> 2个引用变量指向同一个对象, 通过一个变量修改对象内部数据, 另一个变量看到的是修改之后的数据
>
> 2个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象, 另一引用变量依然指向前一个对象
>
> ```js
>    let a = {age: 12}
>     //此时是将a指向的地址值赋值给B,所以B此时也指向{age:12}这个内存
>    let b = a
>    //此时重新创建了一个内存并让a指向它,所以此处a指向的是{name:'hong'},而b指向仍是刚开始的指向{age:12}
>    a = {name: 'aodi'}
>    //此时a与b指向的内存已经不一样了,所以修改互不影响
>    b.age = 14
>    console.log(b.age, a.name, a.age) // 14 aodi undefined
>    
>    //2个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象, 另一引用变量依然指向前一个对象   -->所以 a 仍是  {name: 'hong'}
>    const fn2=(obj) => obj = {age: 15}
>    fn2(a)
>    console.log(a.age) //undefined 
> ```

#### 2.5.3  *在js调用函数时传递变量参数时, 是值传递还是引用传递*

> 理解1: 都是值(基本/地址值)传递
>
> 所以实际上传进function中的参数也是拿着其存着的地址值找内存
>
> ```js
> //传进来的obj存储的是a中存的地址值,所以obj==a(因为他们地址值一致,指向一致)
> //2个引用变量指向同一个对象, 通过一个变量修改对象内部数据, 另一个变量看到的是修改之后的数据  -->所以被进行了修改
>   let a = {name: 'hong'}
>   const fn2=(obj) => obj.age= 15
>   fn2(a)
>   console.log(a.age) //15
> ```
>
> 理解2: 可能是值传递, 也可能是引用传递(地址值)

#### 2.5.4 *JS引擎如何管理内存?*

> 1. 内存生命周期 : 分配小内存空间, 得到它的使用权 ,存储数据, 可以反复进行操作 释放小内存空间
>
> 2. 释放内存 : 局部变量: 函数执行完自动释放 对象: 成为垃圾对象==>垃圾回收器回收
>
>    ```js
>     var a = 3
>     var obj = {name:"hong"}
>     obj = undefined ||null  //此时,obj没有被释放,但是之前声明的`{name:"hong"}`由于没有人指向它,会在后面你某个时刻被垃圾回收器回收
>    
>     function fn () { var b = {}}
>     fn() // b是自动释放, b所指向的对象是在后面的某个时刻由垃圾回收器回收
>    ```

##  3、对象

### 3.1 对象的概念

#### 3.1.1 什么是对象?

> 多个数据的封装体
>
> 用来保存多个数据的容器
>
> 一个对象代表现实中的一个事物

#### 3.1.2 为什么要用对象?

> 统一管理多个数据

#### 3.1.3 对象的组成

> 属性: 属性名(字符串)和属性值(任意)组成
>
> 方法: 一种特别的属性(属性值是函数)

### 3.2 如何访问对象内部数据?

> `.属性名`: 编码简单, 有时不能用
>
> `['属性名']`: 编码麻烦, 能通用

### 3.3 什么时候必须使用`['属性名']`的方式?

> 1. 属性名包含特殊字符: `-` `空格`
>
> 2. 属性名不确定
>
>    ```js
>     var p = {}
>     //1. 给p对象添加一个属性: content type: text/json
>     // p.content-type = 'text/json' //不能用
>     p['content-type'] = 'text/json'
>     console.log(p['content-type'])
>    
>     //2. 属性名不确定
>     var propName = 'myAge'
>     var value = 18
>     // p.propName = value //不能用
>     p[propName] = value
>     console.log(p[propName])
>    ```

## 4、函数

### 4.1函数的概念

#### 4.1.1  *什么是函数*

> 实现特定功能的n条语句的封装体
>
> 只有函数是可以执行的, 其它类型的数据不能执行

#### 4.1.1  *为什么要用函数?*

> 提高代码复用
>
> 便于阅读交流

#### 4.1.1  *如何定义函数?*

> 函数声明
>
> 表达式
>
> ```js
>    function fn1 () { console.log('fn1()' )//函数声明
>    const fn2 = ()=> console.log('fn2()')  //表达式js
> ```

### 4.2 如何调用(执行)函数

> 1. test(): 直接调用
>
> 2. obj.test(): 通过对象调用
>
> 3. new test(): new调用
>
> 4. `test.call/apply(obj)`: 临时让test成为obj的方法进行调用
>
>    ```js
>        var obj = {}
>        //此处不能使用箭头函数,因为箭头函数会改变this指向
>        function test2 () {
>          this.xxx = 'hongjilin'
>        }
>        // obj.test2()  不能直接, 根本就没有
>        test2.call(obj)  // 可以让一个函数成为指定任意对象的方法进行调用
>        console.log(obj.xxx)
>    ```

### 4.3 回调函数

####  *4.3.1 什么函数才是回调函数?*

> 你定义的    你没有调 但最终它执行了(在某个时刻或某个条件下)

#### *4.3.1 常见的回调函数?*

> 1. dom事件回调函数 ==>发生事件的dom元素
>
> 2. 定时器回调函数 ===>window
>
> 3. ajax请求回调函数(后面讲)
>
> 4. 生命周期回调函数(后面讲)
>
>    ```js
>      / dom事件回调函数
>     document.getElementById('btn').onclick = function () {alert(this.innerHTML)}
>     // 定时器回调函数
>     setTimeout(function () {   alert('到点了'+this)}, 2000)
>    ```

### 4.4 IIFE (自调用函数)

> 全称: `Immediately-Invoked Function Expression` 自调用函数
>
> 作用: 隐藏实现 不会污染外部(一般指全局)命名空间 用它来编码js模块
>
> ```js
> 	 (function () { //匿名函数自调用
>       var a = 3
>       console.log(a + 3)
>      })()
> 
>     console.log(a) // a is not defined
> 
>     //此处前方为何要一个`;`-->因为自调用函数外部有一个()包裹,可能与前方以()结尾的代码被一起认为是函数调用
>     //不加分号可能会被认为这样 console.log(a)(IIFE)
>     ;(function () {//不会污染外部(全局)命名空间-->举例
>       let a = 1;
>       function test () { console.log(++a) } //声明一个局部函数test
>       window.$ = function () {  return {test: test} }// 向外暴露一个全局函数
>     })()
>     test ()  //test is not defined
>     $().test() // 1. $是一个函数 2. $执行后返回的是一个对象
> ```

### 4.5 函数中的this

#### 4.5.1 *this是什么?*

> 任何函数本质上都是通过某个对象来调用的,如果没有直接指定就是window
>
> 所有函数内部都有一个变量this
>
> 它的值是`调用函数的当前对象`

#### 4.5.2 如何确定this的值?

> test(): window
>
> p.test(): p
>
> new test(): 新创建的对象
>
> p.call(obj): obj

#### 4.5.3 代码举例详解

```js
function Person(color) {
console.log(this)
this.color = color;
this.getColor = function () {
 console.log(this)
 return this.color;
};
this.setColor = function (color) {
 console.log(this)
 this.color = color;
};
}

Person("red"); //this是谁? window

const p = new Person("yello"); //this是谁? p

p.getColor(); //this是谁? p

const obj = {};
//调用call会改变this指向-->让我的p函数成为`obj`的临时方法进行调用
p.setColor.call(obj, "black"); //this是谁? obj

const test = p.setColor;
test(); //this是谁? window  -->因为直接调用了

function fun1() {
function fun2() {  console.log(this); }
fun2(); //this是谁? window
}
fun1();//调用fun1
```

### 4.6 关于语句分号

> 1. js一条语句的后面可以不加分号
>
> 2. 是否加分号是编码风格问题, 没有应该不应该，只有你自己喜欢不喜欢
>
> 3. 在下面2种情况下不加分号会有问题:小括号开头的前一条语句 ,  中方括号开头的前一条语句
>
> 4. 解决办法: 在行首加分号
> 5. 强有力的例子: vue.js库

# 二、函数高级

## 1. 原型与原型链

### 1.1原型 [prototype]

> 1.函数的`prototype`属性
>
> 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
>
> 原型对象中有一个属性constructor, 它指向函数对象
>
> 2.给原型对象添加属性(`一般都是方法`)
>
> 作用: 函数的所有实例对象自动拥有原型中的属性(方法)
>
> 3.代码示例
>
> ```js
> 
>     // 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
>     console.log(Date.prototype, typeof Date.prototype)
>     function Fun () { }
>     console.log(Fun.prototype)  // 默认指向一个Object空对象(没有我们的属性)
> 
>     // 原型对象中有一个属性constructor, 它指向函数对象
>     console.log(Date.prototype.constructor===Date)
>     console.log(Fun.prototype.constructor===Fun)
> 
>     //给原型对象添加属性(一般是方法) ===>实例对象可以访问
>     Fun.prototype.test = function () { console.log('test()') }
>     var fun = new Fun()
>     fun.test()
> ```

### 1.2 显式原型与隐式原型

> 1. 每个函数function都有一个`prototype`，即`显式`原型(属性)
>
> 2. 每个实例对象都有一个[`__ proto __`]，可称为`隐式`原型(属性)
>
> 3. 对象的隐式原型的值为其对应构造函数的显式原型的值
>
>    总结: 
>
>    1> 函数的[`prototype`]属性: 在定义函数时自动添加的, 默认值是一个空Object对象
>
>    2> 对象的[`__ proto __`]属性: 创建对象时自动添加的, `默认值为构造函数的prototype属性值`
>
>    3> 程序员能直接操作显式原型, 但不能直接操作隐式原型(ES6之前)
>
>    ```js
>     //定义构造函数
>        function Fn() {
>         // 内部默认执行语句: this.prototype = {}
>          }
>        // 1. 每个函数function都有一个prototype，即显式原型属性, 默认指向一个空的Object对象
>        console.log(Fn.prototype)
>        // 2. 每个实例对象都有一个__proto__，可称为隐式原型
>        //创建实例对象
>        var fn = new Fn()  // 内部默认执行语句: this.__proto__ = Fn.prototype
>        console.log(fn.__proto__)
>        // 3. 对象的隐式原型的值为其对应构造函数的显式原型的值
>        console.log(Fn.prototype===fn.__proto__) // true
>        //给原型添加方法
>        Fn.prototype.test = function () {
>          console.log('test()')
>        }
>        //通过实例调用原型的方法
>        fn.test()
>    ```

### 1.3 原型链

#### 1.3.1原型链

> 访问一个对象的属性时:先在自身属性中查找，找到返回, 如果没有, 再沿着[`__ proto __`]这条链向上查找, 找到返回, 如果最终没找到, 返回undefined
>
> 别名: 隐式原型链
>
> 作用: 查找对象的属性(方法)

#### 1.3.2  *属性问题*

> 读取对象的属性值时: 会自动到原型链中查找
>
> 设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值
>
> 方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上
>
> ```js
> function Fn() { }
>    Fn.prototype.a = 'xxx'
>    var fn1 = new Fn()
>    console.log(fn1.a, fn1) //xxx Fn{}
> 
>    var fn2 = new Fn()
>    fn2.a = 'yyy'
>    console.log(fn1.a, fn2.a, fn2) //xxx yyy  Fn{a: "yyy"}
> 
>    function Person(name, age) {
>      this.name = name
>      this.age = age
>    }
>    Person.prototype.setName = function (name) {
>      this.name = name
>    }
>    var p1 = new Person('Tom', 12)
>    p1.setName('Bob')
>    console.log(p1)  //Person {name: "Bob", age: 12}
> 
>    var p2 = new Person('Jack', 12)
>    p2.setName('Cat')
>    console.log(p2) //Person {name: "Cat", age: 12}
>    console.log(p1.__proto__===p2.__proto__) // true   -->所以方法一般定义在原型中
> ```

### 1.4 instanceof

> 1. instanceof是如何判断的?
>
>    表达式: A instanceof B
>
>    如果B函数的显式原型对象在A对象的原型链上, 返回true, 否则返回false
>
>    ```js
>     /*
>     案例1
>      */
>     function Foo() {  }
>     var f1 = new Foo()
>     console.log(f1 instanceof Foo) // true
>     console.log(f1 instanceof Object) // true
>    
>     /*
>     案例2
>      */
>     console.log(Object instanceof Function) // true
>     console.log(Object instanceof Object) // true
>     console.log(Function instanceof Function) // true
>     console.log(Function instanceof Object) // true
>    
>     function Foo() {}
>     console.log(Object instanceof  Foo) // false
>    ```

### 1.5 相关的问题

```js
/*
测试题1
*/
function A () {}
A.prototype.n = 1
let b = new A()
A.prototype = { n: 2, m: 3}
let c = new A()
console.log(b.n, b.m, c.n, c.m) // 1 undefined 2 3
```

```js
/*
测试题2
*/
function F (){}
Object.prototype.a = function(){
console.log('a()')
}
Function.prototype.b = function(){
console.log('b()')
}

let f = new F()
f.a() //a()
f.b() //f.b is not a function -->找不到
F.a() //a()
F.b() //b()

console.log(f)
console.log(Object.prototype)
console.log(Function.prototype)
```

## 2. 执行上下文与执行上下文栈

> 当代码在 JavaScript 中运行时，执行代码的环境非常重要，并将概括为以下几点：
>
> **全局代码**——第一次执行代码的默认环境。
>
> **函数代码**——当执行流进入函数体时。
>
> (…) —— 我们当作 执行上下文 是当前代码执行的一个环境与范围。

> 换句话说，当我们启动程序时，我们从全局执行上下文中开始。一些变量是在全局执行上下文中声明的。我们称之为全局变量。当程序调用一个函数时，会发生什么?
>
> 以下几个步骤：
>
> 1. JavaScript 创建一个新的执行上下文，我们叫作本地执行上下文。
>
> 2. 这个本地执行上下文将有它自己的一组变量，这些变量将是这个执行上下文的本地变量。
>
> 3. 新的执行上下文被推到到执行堆栈中。可以将执行堆栈看作是一种保存程序在其执行中的位置的容器。

> 函数什么时候结束? 当它遇到一个 return 语句或一个结束括号}。

> 当一个函数结束时，会发生以下情况:
>
> 1. 这个本地执行上下文从执行堆栈中弹出。
>
> 2. 函数将返回值返回调用上下文。调用上下文是调用这个本地的执行上下文，它可以是全局执行上下文，也可以是另外一个本地的执行上下文。这取决于调用执行上下文来处理此时的返回值，返回的值可以是一个对象、一个数组、一个函数、一个布尔值等等，如果函数没有 return 语句，则返回 undefined。
>
> 3. 这个本地执行上下文被销毁，销毁是很重要，这个本地执行上下文中声明的所有变量都将被删除，不在有变量，这个就是为什么 称为本地执行上下文中自有的变量。

### 2.1 变量提升与函数提升

> 1. 变量声明提升 :通过var定义(声明)的变量, 在定义语句之前就可以访问到,   值: undefined
>
> 2. 函数声明提升:  通过function声明的函数, 在之前就可以直接调用 值: 函数定义(对象)
>
> 3. 引出一个问题: 变量提升和函数提升是如何产生的?
>
>    ```js
>    /*
>     面试题 : 输出 undefined
>      */
>     var a = 3
>     function fn () {
>       console.log(a)
>       var a = 4 //变量提升
>     }
>     fn()  //undefined
>    '--------------------------------------------'
>     console.log(b) //undefined  变量提升
>     fn2() //可调用  函数提升
>     // fn3() //不能  变量提升
>     var b = 3
>     function fn2() {  console.log('fn2()') }
>     var fn3 = function () { console.log('fn3()') }
>    ```

### 2.2 执行上下文

> 1. 代码分类(位置) : 全局代码  函数(局部)代码
>
> 2. 全局执行上下文:  在执行全局代码前将window确定为全局执行上下文  对全局数据进行预处理
>
>    var定义的全局变量==>undefined, 添加为window的属性
>
>    function声明的全局函数==>赋值(fun), 添加为window的方法
>
>    this==>赋值(window)
>
>    开始执行全局代码

> 3. 函数执行上下文
>
>    在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)
>
>    对局部数据进行预处理: 1>形参变量==>赋值(实参)==>添加为执行上下文的属性
>
>    2>`arguments`==>赋值(实参列表), 添加为执行上下文的属性
>
>    3>var定义的局部变量==>undefined, 添加为执行上下文的属性
>
>    4> function声明的函数 ==>赋值(fun), 添加为执行上下文的方法
>
>    5>this==>赋值(调用函数的对象)
>
>    开始执行函数体代码

### 2.3 执行上下文栈

> 1. 在全局代码执行前, JS引擎就会创建一个栈来存储管理所有的执行上下文对象
> 2. 在全局执行上下文(window)确定后, 将其添加到栈中(压栈)-->`所以栈底百分百是[window]`
> 3. 在函数执行上下文创建后, 将其添加到栈中(压栈)
> 4. 在当前函数执行完后,将栈顶的对象移除(出栈)
> 5. 当所有的代码执行完后, 栈中只剩下window
> 6. 上下文栈数==函数调用数+1

```js
//1. 进入全局执行上下文
var a = 10
var bar = function (x) {
  var b = 5
  foo(x + b)   //3. 进入foo执行上下文           
}
var foo = function (y) {
  var c = 5
  console.log(a + c + y)
}
bar(10) //2. 进入bar函数执行上下文
```

```js
//栗子
<!--
1. 依次输出什么?
gb: undefined
fb: 1
fb: 2
fb: 3
fe: 3
fe: 2
fe: 1
ge: 1
2. 整个过程中产生了几个执行上下文?  5
-->
<script type="text/javascript">
console.log('gb: '+ i)
var i = 1
foo(1)
function foo(i) {
  if (i == 4) {
    return
  }
  console.log('fb:' + i)
  foo(i + 1) //递归调用: 在函数内部调用自己
  console.log('fe:' + i) //出栈 所以会 3 2 1这样的结果
}
console.log('ge: ' + i)
</script>
```

### 2.4 相关的问题

> `函数提升优先级高于变量提升,且不会被变量声明覆盖,但是会被变量赋值覆盖`
>
> ```js
> /*
> 测试题1:  先执行变量提升, 再执行函数提升
> 
> */
> function a() {}
> var a
> console.log(typeof a) // 'function'
> 
> 
> /*
> 测试题2:
> */
> if (!(b in window)) {
> var b = 1
> }
> console.log(b) // undefined
> 
> /*
> 测试题3:
> */
> var c = 1
> function c(c) {
> console.log(c)
> var c = 3 //与此行无关
> }
> c(2) // 报错  c is not a function
> ```

## 3. 作用域与作用域链

### 3.1作用域

> 理解: 就是一块"地盘", 一个代码段所在的区域 , 它是静态的(相对于上下文对象), 在编写代码时就确定了
>
> 分类: 全局作用域 函数作用域  没有块作用域(ES6有了)   -->(java语言也有)
>
> 作用: 隔离变量，不同作用域下同名变量不会有冲突
>
> ```js
> 	/*  //没块作用域
>  if(true) { var c = 3 }
>  console.log(c)
>  */
>  var a = 10,
>    b = 20
>  function fn(x) {
>    var a = 100, c = 300;
>    console.log('fn()', a, b, c, x) //100 20 300 10
>    function bar(x) {
>      var a = 1000, d = 400
>      console.log('bar()', a, b, c, d, x)
>    }
>    bar(100)//1000 20 300 400 100
>    bar(200)//1000 20 300 400 200
>  }
>  fn(10)
> ```

### 3.2 作用域与执行上下文的区别与联系

> 区别1: 
>
> 全局作用域之外，每个函数都会创建自己的作用域，`作用域在函数定义时就已经确定了。而不是在函数调用时`
>
> 全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建
>
> 函数执行上下文是在调用函数时, 函数体代码执行之前创建
>
> 
>
> 区别2:
>
> 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化
>
> 执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放
>
> 
>
> 联系:
>
> 执行上下文(对象)是从属于所在的作用域
>
> 全局上下文环境==>全局作用域
>
> 函数上下文环境==>对应的函数使用域

### 3.3 作用域链

> 理解:多个上下级关系的作用域形成的链, 它的方向是从下向上的(从内到外)  查找变量时就是沿着作用域链来查找的
>
> 查找一个变量的查找规则: 
>
> 在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入2
>
> 在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入3
>
> 再次执行2的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常
>
> ```js
> var a = 1
>  function fn1() {
>    var b = 2
>    function fn2() {
>      var c = 3
>      console.log(c)
>      console.log(b)
>      console.log(a)
>      console.log(d)
>    }
>    fn2()
>  }
>  fn1()
> ```

### 3.4 相关问题

> 作用域在函数定义时就已经确定了。而不是在函数调用时
>
> ```js
> var x = 10;
> function fn() { console.log(x); }
> function show(f) {
> var x = 20;
> f();
> }
> show(fn); //输出10
> ```
>
> 对象变量不能产生局部作用域
>
> ```js
> var fn = function () {
> console.log(fn)
> }
> fn()
> 
> var obj = { //对象变量不能产生局部作用域,所以会找到全局去,导致报错
> fn2: function () {
> console.log(fn2)
> //console.log(this.fn2)
> }
> }
> obj.fn2()
> ```

## 4. 闭包

> 一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

### 4.1 引出闭包概念

#### 4.1.1 错误场景

> 需求: `点击某个按钮, 提示"点击的是第n个按钮"`
>
> ```js
> <button>测试1</button>
> <button>测试2</button>
> <button>测试3</button>
> <!--
> 需求: 点击某个按钮, 提示"点击的是第n个按钮"
> -->
> <script type="text/javascript">
> var btns = document.getElementsByTagName('button')
> //注意[btns]不是一个数组,它是一个伪数组
> //每次获取[btns.length]其实都是需要进行计算的(因为它是伪数组)
> //所以为了性能更好,在此处赋值,就只需要计算一次
> for (var i = 0,length=btns.length; i < length; i++) {
> var btn = btns[i]
> btn.onclick = function () {  //遍历加监听
>  alert('第'+(i+1)+'个')     //结果 全是[4]
> }
> }
> </script>   
> ```
>
> 此处错误是,直接修改并使用全局变量[`i`],导致for循环结束后,所有点击按钮绑定的弹窗值都是[`i+1`]
>
> 随后调用时,都会找到[`i`]这个变量,但是此时i==3,所以所有结果都是4

#### 4.1.2 将变量挂载到自身来解决

> 解决方式:将btn所对应的下标保存在btn上
>
> ```js
> <button>测试1</button>
> <button>测试2</button>
> <button>测试3</button>
> <!--
> 需求: 点击某个按钮, 提示"点击的是第n个按钮"
> -->
> <script type="text/javascript">
> var btns = document.getElementsByTagName('button')
> for (var i = 0,length=btns.length; i < length; i++) {
> var btn = btns[i]
> //将btn所对应的下标保存在btn上
> btn.index = i
> btn.onclick = function () {  //遍历加监听
>  alert('第'+(i+1)+'个')     //结果 全是[4]
> }
> }
> </script>    
> ```

#### 4.1.3  利用闭包

利用闭包知识点解决,引出下方知识点,不懂的可以带着疑问继续往下看

```js
<body>
<button>测试1</button>
<button>测试2</button>
<button>测试3</button>

<script type="text/javascript">
//利用闭包
for (var i = 0,length=btns.length; i < length; i++) {
//此处的j是局部的,它将传入的[i]存入局部的[j]中,这样就能实现效果 
(function (j) {
 var btn = btns[j]
 btn.onclick = function () {
   alert('第'+(j+1)+'个')
 }
})(i)
}
</script>  
</body>
```

### 4.2举个闭包栗子分析理解

> 按照上方 [`4`]代码举例分析流程的方式 来尝试理解`闭包`概念
>
> 提前给出一个闭包栗子进行分析,先看看发生什么,再去看它的概念进行印证,相信我,你会有种拨开迷雾的感受

#### 4.2.1 正确的理解

> 1. counter是全局执行上下文的一部分吗? 
>
>   - 尝试 console.log(counter)，得到undefined的结果,显然不是这样的。
>
> 2. 也许，当你调用increment时，它会以某种方式返回它创建的函数(createCounter)?
>
>   - 这怎么可能呢?变量increment包含函数定义，而不是函数的来源，显然也不是这样的。
>
> 3. 所以一定有另一种机制。**闭包**，我们终于找到了，丢失的那块。
>
>   -  **-`它是这样工作的，无论何时声明新函数并将其赋值给变量，都要存储函数定义和闭包。闭包包含在函数创建时作用域中的所有变量，它类似于背包。函数定义附带一个小背包，它的包中存储了函数定义创建时作用域中的所有变` **
>
> ```js
> 1: function createCounter() {
> 2:   let counter = 0
> 3:   const myFunction = function() {
> 4:     counter = counter + 1
> 5:     return counter
> 6:   }
> 7:   return myFunction
> 8: }
> 9: const increment = createCounter()
> 10: const c1 = increment()
> 11: const c2 = increment()
> 12: const c3 = increment()
> 13: console.log('example increment', c1, c2, c3)
> ```
>
> 现在，我们已经从前几个示例中掌握了它的诀窍，让我们按照预期的方式快速执行它：  (`错误的流程理解,故意按照正常的逻辑流程走,做印证`)
>
> 1. 同上，第`1-8`行。我们在全局执行上下文中创建了一个新的变量`createCounter`，它得到了指定的函数定义。
> 2. 同上，第`9`行。
>
>  - 我们在全局执行上下文中声明了一个名为`increment`的新变量。
>  - 我们需要调用`createCounter`函数并将其返回值赋给`increment`变量。
>
> 3. 同上，第`1-8`行。调用函数，创建新的本地执行上下文。
>
>  - 第`2`行。在本地执行上下文中，声明一个名为`counter`的新变量并赋值为 `0` 。
>  - 第`3-6`行。声明一个名为`myFunction`的新变量，变量在本地执行上下文中声明,变量的内容是另一个函数定义。如第`4`行和第`5`行所定义，现在我们还创建了一个闭包，并将其作为函数定义的一部分。闭包包含作用域中的变量，在本例中是变量`counter`(值为`0`)。
>  - 第`7`行。返回`myFunction`变量的内容,删除本地执行上下文。`myFunction`和`counter`不再存在。控制权交给了调用上下文，我们返回函数定义和它的闭包，闭包中包含了创建它时在作用域内的变量。
>
> 4. 回到第`9`行。
>
>  - 在调用上下文(全局执行上下文)中，`createCounter`返回的值被指定为`increment`
>  - 变量`increment`现在包含一个函数定义(和闭包),由createCounter返回的函数定义,它不再标记为`myFunction`，但它的定义是相同的,在全局上下文中，称为`increment`。
>
> 5. 第`10`行。声明一个新变量`c1`。
>
>  - 继续第`10`行。查找变量`increment`，它是一个函数，调用它。它包含前面返回的函数定义,如第`4-5`行所定义的。(`它还有一个带有变量的闭包`)。
>  - 创建一个新的执行上下文，没有参数，开始执行函数。
>
> 6. 第`4`行。[`counter = counter + 1`]，寻找变量 [`counter`]，`在查找本地或全局执行上下文之前，让我们检查一下闭包`，瞧，闭包包含一个名为[`counter`]的变量，其值为`0`。在第`4`行表达式之后，它的值被设置为`1`。它再次被储存在闭包里，闭包现在包含值为`1`的变量 [`counter`]。
> 7. 第`5`行。我们返回`counter的值`，销毁本地执行上下文。
> 8. 回到第`10`行。返回值`1`被赋给变量`c1`。
> 9. 第`11`行。我们重复步骤`10-14`。这一次，在闭包中此时变量`counter`的值是1。它在第`12`行设置的，它的值被递增并以`2`的形式存储在递增函数的闭包中,`c2`被赋值为`2`。
> 10. 第`12`行。重复步骤`10-14`行,`c3`被赋值为3。
> 11. 第13行。我们打印变量`c1 c2`和`c3`的值。
>
> ** `你此时可能会问，是否有任何函数具有闭包，甚至是在全局范围内创建的函数?` **
>
> >答案是肯定的。在全局作用域中创建的函数创建闭包，但是由于这些函数是在全局作用域中创建的，所以它们可以访问全局作用域中的所有变量，闭包的概念并不重要。
>
> >但当函数返回函数时，闭包的概念就变得更加重要了。返回的函数可以访问不属于全局作用域的变量，但它们仅存在于其闭包中。

### 4.3 常见的闭包

#### 4.3.1  将函数作为另一个函数的返回值

```js
// 1. 将函数作为另一个函数的返回值
function fn1() {
var a = 2
function fn2() {
 a++
 console.log(a)
}
return fn2
}
var f = fn1()
f() // 3
f() // 4
```

#### 4.3.2 将函数作为实参传递给另一个函数调用

```
// 2. 将函数作为实参传递给另一个函数调用
function showDelay(msg, time) {
setTimeout(function () {
 alert(msg)
}, time)
}
showDelay('atguigu', 2000)
```

### 4.4 闭包的作用

> 1. 使用函数内部的变量在函数执行完后, 仍然存活在内存中(延长了局部变量的生命周期)
> 2. 让函数外部可以操作(读写)到函数内部的数据(变量/函数)
>
> 问题:
>
>       1. 函数执行完后, 函数内部声明的局部变量是否还存在? 
>          -  一般是不存在, 存在于闭中的变量才可能存在
>       2. 在函数外部能直接访问函数内部的局部变量吗? 
>          - 不能, 但我们可以通过闭包让外部操作它

### 4.5 闭包的生命周期

> 1. 产生: 在嵌套内部函数定义执行完时就产生了(不是在调用)
> 2. 死亡: 在嵌套的内部函数成为垃圾对象时
>
>   - 即没有人指向它时死亡,通常置为[`null`],当然指向其他也行,但不安全(容易污染变量)
>
>   - ```js
>     //闭包的生命周期
>     function fn1() {
>        //此时闭包就已经产生了(函数提升,实际上[fn2]提升到了第一行, 内部函数对象已经创建了)
>        var a = 2
>        function fn2 () { //如果时[let fn2=function(){}],那么在这行才会产生闭包
>          a++
>          console.log(a)
>        }
>        return fn2
>      }
>      var f = fn1()
>      f() // 3
>      f() // 4
>      f = null //闭包死亡(包含闭包的函数对象成为垃圾对象)
>     ```
>
>     

### 4.6 闭包的应用

> 闭包的应用 : 定义JS模块
>
>  * 具有特定功能的js文件
>  * 将所有的数据和功能都封装在一个函数内部(私有的)
>  * 只向外暴露一个包信n个方法的对象或函数
>  * 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能
>
> 1. 模块定义:
>
> 2. ```js
>    //myModule.js
>    function myModule() {
>      //私有数据
>      var msg = 'My atguigu'
>      //操作数据的函数
>      function doSomething() {
>        console.log('doSomething() '+msg.toUpperCase())
>      }
>      function doOtherthing () {
>        console.log('doOtherthing() '+msg.toLowerCase())
>      }
>    
>      //向外暴露对象(给外部使用的方法)
>      return {
>        doSomething: doSomething,
>        doOtherthing: doOtherthing
>      }
>    }
>    
>    -----------------------------------------------------------------
>    // myModule2.js   
>    (function () {
>      //私有数据
>      var msg = 'My atguigu'
>      //操作数据的函数
>      function doSomething() {
>        console.log('doSomething() '+msg.toUpperCase())
>      }
>      function doOtherthing () {
>        console.log('doOtherthing() '+msg.toLowerCase())
>      }
>    
>      //向外暴露对象(给外部使用的方法)
>      window.myModule2 = {
>        doSomething: doSomething,
>        doOtherthing: doOtherthing
>      }
>    })()    
>    
>    ```
>
>    模块的调用
>
>    ```js
>    //调用示例
>    ------------  模块调用1 --------------------------------------------
>    <script type="text/javascript" src="myModule.js"></script>
>    <script type="text/javascript">
>      var module = myModule()
>      module.doSomething()
>      module.doOtherthing()
>    </script>
>    ------------  模块调用2 --------------------------------------------
>    <script type="text/javascript" src="myModule2.js"></script>
>    <script type="text/javascript">
>      myModule2.doSomething()
>      myModule2.doOtherthing()
>    </script>
>    ```
>
>    

### 4.7 闭包的缺点及解决

> 1. 缺点:
>
>  * 函数执行完后, 函数内的局部变量没有释放, 占用内存时间会变长
>  * 容易造成内存泄露
>
> 2. 解决:
>
>  * 能不用闭包就不用
>
>  * 及时释放
>
>  * ```js
>    function fn1() {
>      var arr = new Array(100000)
>      function fn2() {
>        console.log(arr.length)
>      }
>      return fn2
>    }
>    var f = fn1()
>    f()
>    f = null //让内部函数成为垃圾对象-->回收闭包
>    ```
>
>    我还有一个解决方式,调用时直接`f()()`直接运行调用即可-->匿名函数,用完自动就销毁了

### 4.8 内存溢出与内存泄露

> 1. 内存溢出
>
>  * 一种程序运行出现的错误
>  * 当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误
>
> 2. 内存泄露
>
>  * 占用的内存没有及时释放
>  * `内存泄露积累多了就容易导致内存溢出`
>  * 常见的内存泄露:
>    * 意外的全局变量
>    * 没有及时清理的计时器或回调函数
>    * 闭包

```js
<script type="text/javascript">
 // 1. 内存溢出
 var obj = {}
 for (var i = 0; i < 10000; i++) {
   obj[i] = new Array(10000000)
   console.log('-----')
 }

 // 2. 内存泄露
   // 意外的全局变量
 function fn() {
   a = new Array(10000000)  //不使用var let const去承接
   console.log(a)
 }
 fn()

  // 没有及时清理的计时器或回调函数
 var intervalId = setInterval(function () { //启动循环定时器后不清理
   console.log('----')
 }, 1000)

 // clearInterval(intervalId)

   // 闭包
 function fn1() {
   var a = 4
   function fn2() {
     console.log(++a)
   }
   return fn2
 }
 var f = fn1()
 f()
 // f = null

</script>
```

> 不使用let const var等去声明,实际上是挂载到[`window`]上的,所以导致内存泄露

### 4.9 相关的问题

```js
//代码片段一  -->没有产生闭包:因为内部函数没有调用外部变量
var name = "The Window";
var object = {
name : "My Object",
getNameFunc : function(){
return function(){
 return this.name;
};
}
};
alert(object.getNameFunc()());  //?  the window
//函数体的this是window

//代码片段二
var name2 = "The Window";
var object2 = {
name2 : "My Object",
getNameFunc : function(){
//此处的this指向是[getNameFunc],他是对象中的属性,所以this指向就是object
var that = this;
return function(){
 //此处用的是保存的  that
 return that.name2;
};
}
};
alert(object2.getNameFunc()()); //?  my object
```

> 1. 代码片段一:
>
>   - 函数体的`this`指向是[`window`]
>   - 没有产生闭包:因为内部函数没有调用外部变量
>
> 2. 代码片段二为何指向是对象?
>
>   - this指向是调用它的[`getNameFunc`],他是对象中的属性,所以this指向就是object
>   - 产生了闭包

```js
function fun(n,o) {
console.log(o)
return {
fun:function(m){
 return fun(m,n)
}
}
}
var a = fun(0) //undefined
a.fun(1)  //0
a.fun(2)  //0	
a.fun(3)  //0

var b = fun(0).fun(1).fun(2).fun(3) //undefined 0 1 2

var c = fun(0).fun(1) //undefined  0
c.fun(2)//1 -->经过上方定义后 n固定为1
c.fun(3)//1 -->此处是陷阱!!!  一直没有改到n,所以一直是1
```

