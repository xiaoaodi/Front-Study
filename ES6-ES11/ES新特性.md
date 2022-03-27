

# ECMASript 系列 新特性

## 1. ES6更新的内容概括

**表达式**: 声明、解构赋值

**内置对象**: 字符串扩展、数值扩展、对象扩展、数组扩展、函数扩展、正则扩展、Symbol、Set、Map、Proxy、Reflect

**语句与运算**: Class、Module、Iterator

**异步编程**: Promise、Generator、Async

three month study front  note

## 2. let和const命令、作用域

注意:`不存在变量提升`

`var`命令会发生“变量提升”现象, 即变量可以在声明之前使用, 值为 **undefined** . 这种现象多多少少是有些奇怪的, 按照一般的逻辑, 变量应该在声明语句之后才可以使用. 

为了纠正这种现象, `let`、`const`命令改变了语法行为, 它所声明的变量一定要在声明后使用, 否则报错

### 2.1 概括与总结

声明:

-  **const命令**: 声明常量
-  **let命令**: 声明变量

作用:

1. 作用域

  - **全局作用域**
  - **函数作用域**: `function() {}`
  - **块级作用域**: `{}`

2. 作用范围

  - `var命令`在全局代码中执行
  - `const命令`和`let命令`只能在代码块中执行

3. 赋值使用

  - `const命令`声明常量后必须立马赋值
  - `let命令`声明变量后可立马赋值或使用时赋值

4. 声明方法: `var`、`const`、`let`、`function`、`class`、`import`

重点难点 : 

- 不允许重复声明
- 未定义就使用会报错: `const命令`和`let命令`不存在变量提升
- 暂时性死区: 在代码块内使用`const命令`和`let命令`声明变量之前, 该变量都不可用

### 2.2 let关键字命令

let 关键字用来声明变量, 使用 let 声明的变量有几个特点:  

- 不允许重复声明 
- 块级作用域 
- 不存在变量提升 
- 不影响作用域链

应用场景: 声明重复赋值的变量时可以用这个,如果你不是要求很高的话,基本上都能用let进行声明(var声明的可以都用这个替代了)

### 2.3 const关键字命令

const 关键字用来声明常量 , const 声明有以下特点:

- 不允许重复声明 
- `值不允许修改`
- 不存在变量提升 
- 块级作用域 
- 声明必须赋初始值
- 标识符一般为大写

注意: `对象属性修改和数组元素变化不会触发 const 错误` 

> `const`实际上保证的, `并不是变量的值不得改动, 而是变量指向的那个内存地址所保存的数据不得改动`. 

> 对于简单类型的数据（数值、字符串、布尔值）, 值就保存在变量指向的那个内存地址, 因此等同于常量. 但对于复合类型的数据（主要是对象和数组）, 变量指向的内存地址, 保存的只是一个指向实际数据的指针, `const`只能保证这个指针是固定的（即总是指向另一个固定的地址）, 至于它指向的数据结构是不是可变的, 就完全不能控制了. 因此, 将一个对象声明为常量必须非常小心. 

应用场景: 声明对象类型、确定不会再次赋值的变量使用 const , 其他的可以用let

### 2.4 ES6 声明变量的六种方法

ES5 只有两种声明变量的方法: `var`命令和`function`命令. ES6 除了添加`let`和`const`命令, 后面还会提到, 另外两种声明变量的方法: `import`命令和`class`命令. 所以 , ES6 一共有 6 种声明变量的方法. 

### 2.5 块级作用域













![image-20220325090051139](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325090051139.png)

# let声明变量

```

```

# const定义常量



# 变量的解构赋值



# 模板字符串



# 简化对象的方法



# 箭头函数的实践











# 函数参数的默认值



# rest参数。。。args



# 扩展运算符



# 扩展运算符的应用



# symbol





!(C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325093912279.png)

# symbol的应用





# symbol的内置值



# 迭代器

![image-20220325094609192](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325094609192.png)

#### **for in for of  键名 键值的区别**

![image-20220325094759422](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325094759422.png)



# 迭代器的应用





# 生成器







# 生成器函数的参数



# 生成器函数的实例









# 实例2





# set数据结构









# Map的数据结构





# class









# 对象继承es5





# es6的继承





# 子类对父类方法的重写



# class get 和 set



# es6数值扩展







# 对象方法 的扩张





# es6模块化

![image-20220325111743413](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325111743413.png)

![image-20220325111929675](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325111929675.png)

![image-20220325112133911](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112133911.png)

![image-20220325112406663](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112406663.png)

![image-20220325112420437](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112420437.png)

# 引入模块

![image-20220325112438520](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112438520.png)

![image-20220325112538409](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112538409.png)

![image-20220325112605904](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112605904.png)

![image-20220325112642032](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112642032.png)

# es6模块化的方式二

![image-20220325112819050](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112819050.png)

![image-20220325112828029](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325112828029.png)

# 代码转化

![image-20220325113022336](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113022336.png)

![image-20220325113049296](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113049296.png)

![image-20220325113148853](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113148853.png)

![image-20220325113241747](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113241747.png)

![image-20220325113353533](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113353533.png)

# es7新特性

![image-20220325113510936](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113510936.png)

![image-20220325113529932](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113529932.png)

# es8新特性

# async

![image-20220325113841389](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113841389.png)

![image-20220325113959365](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325113959365.png)

![image-20220325114140241](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325114140241.png)

![image-20220325114438866](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325114438866.png)

![image-20220325114557584](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325114557584.png)

# es8对象方法发的扩展

![image-20220325114754031](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325114754031.png)

![image-20220325114806601](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325114806601.png)

![image-20220325114859842](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325114859842.png)

![image-20220325115045462](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325115045462.png)

# 对象展开

![image-20220325115136353](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325115136353.png)

![image-20220325115233668](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325115233668.png)

![image-20220325115357382](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325115357382.png)

![image-20220325115439592](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220325115439592.png)

# 反向断言