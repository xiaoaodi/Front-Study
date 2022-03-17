##  JavaScript学习笔记（第一部分）总共四部分

### 1 JavaScript

JavaScript主要负责前端界面中的行为。

它是一门运行在浏览器端的脚本语言。一开始主要是用于处理网页中的前端验证，如：用户名长度，密码长度等。

js的特点：解释型语言、类似于C的语法结构、动态语言、基于面向对象。

#### 1.1 基本的输出语句

主要学习三个关键字：alert、document、console.

```html
   <script>
        alert("浏览器对话框提示");
        document.write("写入内容到body，输出到网页");
        console.log("开发者工具控制台显示输出");
    </script>
```



#### 1.2 JS的编写位置

1、可以编写到script标签中

```html
<script>
        console.log("这是我的第一行js代码");
</script>
```

2、可以编写在标签的指定属性中，例如:button

```html
<body>
    <button onclick="alert('Hello World')">第一个按钮</button>
    <a href="javascript:alert('点击了超链接');">超链接</a>
</body>
```

3、可以将代码编写到外部的js文件中，然后通过标签将其引入

```js
// outscript文件中:
alert("外部引用的方式");
```

```html
<script src="./outscript.js" ></script>
```

4、script标签一旦用于引入外部文件了，就不能在编写代码了，即使编写了浏览器也会忽略 ,如果需要则可以在创建一个新的script标签用于编写内部代码

```html
 <script src="./outscript.js" >
        alert("这行代码是不会执行的");
 </script>


<!-- 例子 -->
<script src="./outscript.js" >
</script>
<script>
        console.log("这样是可以执行的");
</script>
```

总结：在编写的过程中尽量使用外部链接引用的方式，这样可以降低耦合度，方便进行维护和管理，推荐使用外部引用的方式。在指定的标签属性中使用，会执行js的代码，结构和行为进行高度耦合，不利于维护，不推荐使用。



#### 1.3 基本语法

多行注释的结构：/* 内容 */

```html
 	<script>
        /* 多行注释：
                 进行注释的内容不会被浏览器识别，可以在源代码中进行查看
                要养成良好的编程习惯，可以通过注释进行一些简单的调试工作*/
    </script>
```

单行注释的结构: //内容

```html
    <script>
        // alert("对话框提示");
        // document.write("写入内容到body");
         console.log("控制台显示输出");//该语句通过控制台输出一个日志信息
    </script>
```

js的基本的语法特点:

```html
  <script>
        // 1、js严格的区分大小写 如：Alert浏览器识别不了
        // 2、js中每一条语句以分号进行结尾(;), 注意：如果不加分号，浏览器会自动的添加，但是会消耗系统的资源
            // 有时候还会出现语法的错误，分号的位置加错的情况
        // 3、js会忽略多个空格和换行，我们可以合理的利用这一特点进行格式化
        alert("hello");
    </script>
```



#### 1.4 字面量和变量

字面量：简单来说就是一些不可以改变的值 例如：1、2、3、4、true、false、”aaa“、null等。字面量可以直接的使用，但是一般不会直接的使用字面量，会使我们的代码阅读性差，可理解性差。

变量：可以用来保存字面量的值，而且变量的值我们是可以随意变化的，变量更加的方便我们使用，我们在书写的过程中一般使用变量保存字面量。

声明变量：

```html
    <script>
        // 声明一个变量再进行赋值操作
        var num;
        num = 123;
        console.log(num);

        //声明和赋值操作一起进行
        var num_2 = 123442;
        console.log(num_2);
    </script>
```



#### 1.5 标识符

标识符的定义：在JS中所有的可以自主命名的内容，都可以认为是标识符，比如：变量名、函数名、属性名。
标识符的规范：
1.标识符中可以含有字母、数字、_、$ 
2.标识符不能以数字开头 						例如：12s是错误的命名
3.标识符不能是JS中的关键字和保留字  例如：var var = 123；是错误的语法
4.标识符一般采用驼峰命名法 			    例如：helloJavaScript

**注意：在js的底层保存标识符实际上使用的unicode编码娥格式进行存储，可以识别中文命名，但是非常不建议  例如: var 变量1 = 123；**

```html
    <script>
         var 变量1 =12131;
        console.log(变量1);
    </script>
```

### 2 数据类型

​	数据类型的定义：指的就是字面量的类型。

**js中六种数据类型： 五种基本的数据类型 + object。**

检查数据的类型可以使用运算符 typeof + 变量名

```html
<script>
        var str= "字符串";
        var typeofValue = typeof str;
        console.log(typeof str);
        console.log(typeofValue); 
 </script>
```

五种基本的数据类型为：String 字符串、Number 数值(整数+浮点数)、Boolean 布尔值 、Null 空值 、Undefind 未定义。

#### 	2.1 String字符串数据类型

定义：js中字符串需要使用引号""引起来，使用双引号和使用单引号的效果一致，但是不是混着用 例如：var str = " 定义的字符串’  是错误的

引号不可以嵌套使用，双引号不能嵌套双引号，单引号不能嵌套单引号。

```html
    <script>
        // var str = "这是错误的字符串';  error
        var str_1 = "正确的字符串";
        console.log(typeof str_1);
        console.log(str_1);
    </script>
```

```html
    <script>
        // var str_2 = "嵌套的"使用"情况"; error
        var str_2 = "嵌套的'正确使'用的情况";
        console.log(typeof str_2);
        console.log(str_2); //输出：嵌套的'正确使'用的情况
    </script>
```

```html
    <script>
        //专一字符的使用情况：
        // \n: 换行    \\:表示\    \':表示' \"表示:"  \t:表示制表符
        var str = " 你好呀，\n 我是\\你的\'他的 \"他们的\t制表符";
        console.log(str);
		//结果为：         你好呀，
		//       		  我是\你的'他的 "他们的	制表符
    </script>
```



#### 2.2 Number数值数据类型：

在js中所有的数值都是Number类型，包括整数和浮点数 

```html
	 <script>
        var num = 123;
        var numFloat= 123.1231;
        var numMax = Number.MAX_VALUE;   //最大能表示的数
        var numMin = Number.MIN_VALUE;   //最小能表示的数
        console.log(num);     //123
        console.log(numFloat);//123.1231
        console.log(numMax);  //1.7976931348623157e+308    chrome浏览器下的值 其他的浏览器表示可能不一致
        console.log(numMin);  //5e-324
    </script>
```

```html
    <script>
        var num = Number.MAX_VALUE * Number.MIN_VALUE ;
        console.log(num);          //8.881784197001251e-16
        console.log(typeof num);   //number
    </script>
```

特殊的数字：能赋值给变量  分别是：Infinity 正无穷、-Infinity 负无穷、 NaN 非法数字（Not A Number）

```html
    <script>
        var num = Infinity;
        var num_1 = -Infinity;
        var num_2 = NaN;
        console.log(num_2);  //NaN
        console.log(typeof num_2);  //number
        console.log(num_1);  //Infinity
        console.log(num);  //Infinity
        console.log(typeof num);  //number
    </script>
```

注意：在js中基本的整数运算的精度是可以保证的，但是对于浮点数进行运算的结果可能会有误差，所以千万不要使用js计算精度需求高的运算。

```html
  <script>
        var num_1 = 12313;
        var num_2 = 13123123;
        var num_3 = 0.3123131;
        var num_4 = 0.2;
        console.log(num_1 + num_2); //13135436
        console.log(num_3 + num_4); //0.5123131000000001 存在误差
   </script>
```

#### 2.3 Boolean值数据类型

  布尔值只有两个分别是：true 和 false  主要是用作逻辑的运算。 true表示真 false 表示假  

 使用运算符typeof检查时会返回 boolean 类型。

```html
    <script>
        var val = true;
        var val_1 = false;
        console.log(val);    //true
        console.log(typeof val); //boolean
        console.log(val_1);  //false
        console.log(typeof val_1);//boolean
    </script>
```



#### 2.4 Null数据类型

Null类型的值只有一个就是null，null这个值专门来表示一个空的对象，用类型检查会返回一个object。

```html
 <script>
        var num = null;
        console.log(num);         //null
        console.log(typeof num); //object
 </script>
```



#### 2.5 Undefind 数据类型

只声明了变量而未赋值的变量就是 undefind。该类型同Null一样只有一个，类型检查一个Undefined类型的值时，会返回”undefined”

```html
<script>
    var num = undefined;
    console.log(num);         //undefined
    console.log(typeof num);  //undefined
    var num_1;
    console.log(num_1);         //undefined
    console.log(typeof num_1); //undefined
 </script>
```

#### 2.6 引用数据类型

Object 对象 后续讨论

#### 2.7 强制类型转化

定义：值将一个数据类型转化为其他的数据类型。主要指将其他的数据类型转化为String、Number、Boolean类型。

##### 1>、将其他的数据类型转化为String 

方式一（强制类型转换）：

**调用toString方法进行转化，**

```
    <script>
        var num = 12313;
        var str = num.toString();
        console.log(str);  //12313
        console.log(typeof str); //string
    </script>
```

注意：**这个方法不适用于null和undefined**  这两个类型的数据中没有方法，所以调用toString()时会报错！！！


方式二（强制类型转换）：

**调用String()函数**

```html
    <script>
        var num = 12313;
        var str = String(num);
        console.log(str);  //12313
        console.log(typeof str); //string
    </script>
```

**原理：其实就是对其进行了一次封装对于Number Boolean String都会调用他们的toString()方法来将其转换为字符串，对于null值，直接转换为字符串”null”。对于undefined直接转换为字符串”undefined”**

```html
    <script>
        var tmp = null;
        var str = String(tmp);
        console.log(str);  //null
        console.log(typeof str); //string
    </script>
```

```html
    <script>
        var tmp = undefind;
        var str = String(tmp);
        console.log(str);  //undefined
        console.log(typeof str); //string
    </script>
```

方式三（隐式的类型转换）:

**为任意的数据类型 +””**

```html
 <script>
     var tmp = 123132;
     tmp = tmp +""
     console.log(tmp);  //12313
     console.log(typeof tmp); //string
 </script>
```



##### 2>将其他的数据类型转化为Number

**调用Number()函数**

```html
    <script>
        var str = "123";
        str = Number(str);
        console.log(str);  //123
        console.log( typeof str); //number
    </script>
```

**1.字符串转化为数字类型**

1. 如果是纯数字的字符串，则直接的将其转化为数字。
2. 如果字符串是一个非法的数字，则转换为NaN
3. 如果是一个空串或者是全是空格的字符串，则转换为0

```html
    <script>
         var str = "a123";
        str = Number(str);
        console.log(str);  //NaN
        console.log( typeof str); //number
    </script>
    
     <script>
        var str = "            ";
       str = Number(str);
       console.log(str);  //0
       console.log( typeof str); //number
   </script>
```

**2.布尔类型转为数值**

1. true转换为1

2. false转换为0

```html
 <script>
       var str =true;
       var str_1 = false;
       str = Number(str);
       str_1 = Number(str_1);
       console.log(str);    //1
       console.log(str_1);  //0
       console.log( typeof str); //number
  </script>
```

**3.null转化为数值**

```html
<script>
    var str = null;
   str = Number(str);
   console.log(str);  //0
   console.log( typeof str); //number
</script>
```

**4.undefined转化为数值**

```html
<script>
    var str = undefined;
   str = Number(str);
   console.log(str);  //NaN
   console.log( typeof str); //number
</script>
```

**方式二（强制类型转换）：**

将字符串转化为数值类型，调用parseInt()或者parseFloat()函数，如果对非String使用parseInt()或parseFloat()，它会**先将其转换为String**然后在操作 parseInt()
可以将**一个字符串中的有效的整数位**提取出来，并转换为Number

```html
<script>
    var str = "1231px";
    str = parseInt(str);
    console.log(str);  //1231
    console.log( typeof str); //number
</script>
<script>
    var str = "1231.1231spx";
    str = parseFloat(str);
    console.log(str);  //1231.1231
    console.log( typeof str); //number
</script>
```

注意：在parseInt()中指定一个第二个参数，来指定进制parseFloat()可以将一个**字符串中的有效的小数位**提取出来，并转换为Number

**方式三（隐式的类型转换）：**

使用一元的+来进行隐式的类型转换

```html
<script>
    var tmp = "123";
    tmp = tmp - 1;
    console.log(tmp);  //122  注意这里不能使用运算符"+"号
    console.log( typeof tmp); //number
</script>
```

**其他进制的数字转化为数值**

在js中如果需要表示16进制的数字，则需要用0x开头 ,例如 0x10表示 16。如果需要表示8进制的数字，则需要用0开头 ，二进制用0b开头

但是像070这种数字会根据浏览器的不同解析成八进制或者十进制。

```html
 	<script>
         var a = 0x10;
         console.log(a); //16 
         console.log(typeof a); //number
    </script>
     <script>
        var a = 010;
        console.log(a); //8
        console.log(typeof a); //number
   </script>
    <script>
        var a = 0b10;
        console.log(a); //2
        console.log(typeof a); //number
   </script>
   <script>
    var a = "070";
    console.log(parseInt(a,10)); //70
    console.log(typeof a); //number
	</script>
```

注意：可以在parseInt函数中第二个参数来指定数字的进制。

##### **3> 转化为Boolean**

**方式一（强制类型转换）：**

使用Boolean函数进行转化

```html
	<script>
        var tmp = "false";
        tmp = Boolean(tmp);
        console.log(tmp);        //true
        console.log(typeof tmp); //boolean
    </script>
```


字符串转化为布尔类型，除了空串其余全是true

数值转化为布尔，除了0和NaN其余的全是true

null和undefined 转化为布尔，都是false ,object转为布尔类型都是true。

```html
    <script>
        var tmp = null;
        tmp = Boolean(tmp);
        console.log(tmp);        //false
        console.log(typeof tmp); //boolean
   </script>
   <script>
        var tmp = undefined;
        tmp = Boolean(tmp);
        console.log(tmp);        //false
        console.log(typeof tmp); //boolean
	</script>
	<script>
        var tmp = "";
        tmp = Boolean(tmp);
        console.log(tmp);        //false
        console.log(typeof tmp); //boolean
    </script>
	<script>
        var tmp = NaN;
        tmp = Boolean(tmp);
        console.log(tmp);        //false
        console.log(typeof tmp); //boolean
    </script>
```

**方式二（隐式类型转换）：**

**为任意的数据类型做两次非运算，即可将其转换为布尔值**

```html
<script>
    var tmp = "AD";
    tmp = !!tmp;
    console.log(tmp);        //true
    console.log(typeof tmp); //boolean
</script>
```



### 3  基本语法

#### 3.1 运算符

运算符也叫操作符，通过运算符可以对一个或者多个值进行运算，并获得运算的结果，比如：typeof就是运算符，可以来获得变量的类型。

```html
var a = 123;
console.log(typeof a);//number
```

#### 3.2 算数运算符

1. ” + “对两个值进行加法运算并返回结果
2. ” - “对两个值进行减法运算并返回结果
3. " * "对两个值进行乘法运算并返回结果
4. " / "对两个值进行除法运算并返回结果
5. " % "对两个值进行取余运算并返回结果

**除了加法以外，对非Number类型的值进行运算时，都会先转换为Number然后在做运算。**
而做加法运算时，如果是两个字符串进行相加，则会做拼串操作，将两个字符连接为一个字符串。
任何值和字符串做加法，都会先转换为字符串，然后再拼串

```html
    <script>
        var str = "asda";
        str = str + 123+444;
        console.log(str);   //asda123444  
        console.log(typeof str);//string
    </script>

    <script>
        var num = 1231;
        num = num +true;
        console.log(num);   //1232
        console.log(typeof num); //number
    </script>

   <!-- 注意：从左到右进行运算 -->
	 <script>
        var str = "asda";
        str = 123 + 444 +str ;
        console.log(str);   //567asda 
        console.log(typeof str);//string
    </script>

    <script>
        var num = 1231;
        num = num + NaN;
        console.log(num);   //NaN
        console.log(typeof num); //number
    </script>
   <script>
        var num = 1231;
        num = num + undefined;
        console.log(num);   //NaN
        console.log(typeof num); //number
    </script>
```

注意：字符串特性，任何值和字符串相加都会转化为字符串，做拼串操作。我们可以利用任何的一个数据 + ""转化为String,这是隐士的转化(由浏览器自动完成)。

任何的值做 - 、/、*运算时都会自动的转化为Number，我们可以 -0，乘以1或者除1进行转化。

```html
  <script>
        var num = "1231";
        num = num  - 0 ;
        console.log(num);   //1231
        console.log(typeof num); //number
    </script>
     <script>
        var num = 1231;
        num = num  + "" ;
        console.log(num);   //1231
        console.log(typeof num); //string
    </script>
```

#### 3.3 一元运算符

定义：只需要一个操作数   主要是正号(" + ")和负号(" - ")。

正号，不会对值产生任何影响，但是可以将一个非数字转换为数字 可以隐式的转化为Number。

```html
<script>
        var tmp = "1234";
        tmp = +tmp
        console.log(tmp);  //1234
        console.log( typeof tmp); //number
    </script>
```

负号：可以对数值进行取反操作

```html
<script>
        var tmp = 1234;
        tmp = -tmp
        console.log(tmp);  //-1234
        console.log( typeof tmp); //number
</script>
```

```html
<script>
    var tmp = "1234";
    tmp = 1+ +tmp + 10
    console.log(tmp);  //1245
    console.log( typeof tmp); //number
</script>
```

#### 3.4 自增和自减运算符

自增可以使变量在原值的基础上自增1，对于一个变量自增以后，原变量的值都会增加1，
自增分为两种：前++（++a）后++(a++)
不同的是++a和a++的值是不同的，
++a的值是变量的新值（自增后的值）
a++的值是变量的原值（自增前的值）

```html
<script>
    var tmp = 10, tmp_1 = 20;
    var outValur = tmp++;
    console.log(++outValur);   //11
    console.log(++tmp);   //12
    console.log(tmp_1++); //20
</script>
```



自减可以使变量在原值的基础上自减1,对于一个变量自减以后，原变量的值都会自减1
自减分为两种：前--（--a）和 后--(a--)
不同的是a和a的值是不同的，
a的值是变量的新值（自减后的值）
a的值是变量的原值（自减前的值）

```html
 <script>
        var tmp = 10, tmp_1 = 20;
        var outValur = tmp--;
        console.log(--outValur);   //9
        console.log(--tmp);   //8
        console.log(tmp_1--); //20
    </script>
```



#### 3.5 逻辑运算符

**非运算符号 ：” ! “** 
非运算可以对一个布尔值进行取反，true变false false边true
当对非布尔值使用!时，会先将其转换为布尔值然后再取反
我们可以利用!来将其他的数据类型转换为布尔值

```html
	<script>
        var flag = true;
        console.log(!flag);  //false
    </script>
```

对任意的一个元素取反两次，转化为boolean类型

```html
    <script>
         var flag = "111";
         flag = !!flag;
        console.log(flag);  //true
        console.log(typeof flag);  //boolean
    </script>
```

**与运算符号：” && “**
&&可以对符号两侧的值进行与运算
只有两端的值都为true时，才会返回true。只要有一个false就会返回false。
与是一个短路的与，如果第一个值是false，则不再检查第二个值

```html
<SCript>
    false && alert("没有弹出窗口哦")
</SCript>
```

对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值
规则：
1.如果第一个值为false，则返回第一个值
2.如果第一个值为true，则返回第二个值

```
    <script>
        var tmp = 10 && 50;
        console.log(tmp);  //50
        console.log(typeof tmp);  //number
    </script>
    <!-- 任何与NaN相与都为NaN -->
        <script>
            var tmp = NaN && 50;
            console.log(tmp);  // NaN
            console.log(typeof tmp);  //number
        </script>
```

**或运算符："|| "**  
||可以对符号两侧的值进行或运算
只有两端都是false时，才会返回false。只要有一个true，就会返回true。
或是一个短路的或，如果第一个值是true，则不再检查第二个值

对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值
规则：
1.如果第一个值为true，则返回第一个值
2.如果第一个值为false，则返回第二个值

```html
<script>
    var tmp = 10 || 50;
    console.log(tmp);  //10
    console.log(typeof tmp);  //number
</script>
<script>
    var tmp = NaN || undefined;
    console.log(tmp);  // undefined
    console.log(typeof tmp);  //undefined
</script>
```

```html
<SCript>
    false || alert("有弹出窗口哦");
</SCript>
```

#### 3.6 赋值运算符

=
可以将符号右侧的值赋值给左侧变量
+=

```html
<script>
        var tmp_1 = 10;
        tmp_1 += 5; 
        console.log(tmp_1);  //15
</script>
```

-=

```html
 <script>
        var tmp_1 = 10;
        tmp_1 -= 5;
        console.log(tmp_1); //5
 </script>
```

*=

```html
 <script>
        var tmp_1 = 10;
        tmp_1 *= 5;
        console.log(tmp_1); //50
    </script>
```

/=

```html
   <script>
        var tmp_1 = 10;
        tmp_1 /= 5;
        console.log(tmp_1); //2
    </script>
```

%=

```html
 	<script>
        var tmp_1 = 13;
        tmp_1 %= 5;
        console.log(tmp_1); //3
    </script>
```



#### 3.7 关系运算符

关系运算符用来比较两个值之间的大小关系的
\>
\>=
<
<=
关系运算符的规则和数学中一致，用来比较两个值之间的关系，
如果关系成立则返回true，关系不成立则返回false。
如果比较的两个值是非数值，会将其转换为Number然后再比较。
如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number。

```html
	<script>
        console.log("a" > "b");//false
        console.log(124 < 3242); //true
        console.log("1234" < "2");//true
        console.log(1 > true); //false
        console.log(-1 < true);//true
        console.log(10 > null); //true
        console.log(1000 > NaN); //false
        console.log(1000 < NaN); //false
        console.log(1000 < undefined);//false
        console.log(1000 > undefined);//false
        console.log(1 > "3");//false
        console.log(-1 < null);//true
    </script>
```

注意：任何值和NaN或者undefined比较都是false。

#### 3.8 相等运算符

**==**

相等，判断左右两个值是否相等，如果相等返回true，如果不等返回false
相等会自动对两个值进行类型转换，如果**对不同的类型进行比较，会将其转换为相同的类型然后再比较**，转换后相等它也会返回true，null == undifined

```html
	<script>
        console.log(NaN == undefined); //false
    </script>
```

**!=**
不等，判断左右两个值是否不等，如果不等则返回true，如果相等则返回false
不等也会做自动的类型转换。

**===**
**全等**，判断左右两个值是否全等，它和相等类似，只不过它不会进行自动的类型转换，
如果两个值的类型不同，则直接返回false

```html
    <script>
        console.log(NaN === NaN); //false
        console.log(123 === "123"); //false
    </script>
```

**!==**
**不全等**，和不等类似，但是它不会进行自动的类型转换，如果两个值的类型不同，它会直接返回true

特殊的值：
null和undefined
由于undefined衍生自null，所以**null == undefined** 会返回true。
但是 null === undefined 会返回false。

```html
 <script>
        console.log(NaN !== undefined); //true
 </script>
```

**NaN**
NaN不与任何值相等，报告它自身 NaN == NaN //false

判断一个值是否是NaN
使用isNaN()函数

```html
 <script>
         console.log(NaN == NaN); //false
         console.log(NaN == "1313"); //false
         console.log(NaN != "1313"); //true
         console.log(NaN != NaN); //true
         console.log(NaN != undefined); //true
         console.log(NaN == undefined); //false
 </script>
 <script>
         var tmp = NaN;
         var tmp_1;
         console.log(isNaN(tmp));//true
         console.log(isNaN(tmp_1));//true
  </script>
```

注意：在字符串中使用转义字符输入Unicode编码 \u四位编码

```html
 <script>
        console.log("\u2620");
    </script>
```

#### 3.9 条件运算符

条件运算符：“ ?: ”
语法：条件表达式?语句1:语句2;
执行流程：
先对条件表达式求值判断，
如果判断结果为true，则执行语句1，并返回执行结果
如果判断结果为false，则执行语句2，并返回执行结果

```html
 <script>
        false?alert("为true执行这一句"):alert("为false执行这一句")
 </script>
```

```html
<script>
        var a =500, b = 400 ,c =300;
        var tmp = a > b ?(a > c? a : c) :(b > c ? b:c);
        console.log(tmp);//500
    </script>
```

优先级：
和数学中一样，JS中的运算符也是具有优先级的，
比如 先乘除 后加减 先与 后或
具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，
优先级越高的越优先计算，优先级相同的，从左往右计算。
优先级不需要记忆，如果越到拿不准的，使用()来改变优先级。

```html
	<script> 
        var tmp = 1 || 3 && 6; // ouput:1 如果 || 优先级高返回6 如果与的优先级高返回1
    </script>
```

注意： 我们的程序是一条一条语句执行的，在js中可以使用{}来进行分组，同一个{}为一组语句，要么都执行，要么都不执行，一个{}称为一个代码块。

在js中代码块只有分组的作用，没有其他的任何用途。

一个代码块里面的变量内容，在代码块外是完全可见的。

#### 3.10 流程控制语句

程序都是自上向下的顺序执行的，
通过流程控制语句可以改变程序执行的顺序，或者反复的执行某一段的程序。

#### 3.11 条件分支语句

条件判断语句也称为if语句
语法一：

```html
if(条件表达式){  
	语句...  
}
```

```
执行流程：  
if语句执行时，会先对条件表达式进行求值判断，  
如果值为true，则执行if后的语句  
如果值为false，则不执行
```

语法二：

```
if(条件表达式){  
	语句...  
}else{  
	语句...  
}
```

```
执行流程：  
if...else语句执行时，会对条件表达式进行求值判断，  
	如果值为true，则执行if后的语句  
	如果值为false，则执行else后的语句
```

语法三：

```
if(条件表达式){  
	语句...  
}else if(条件表达式){  
	语句...  
}else if(条件表达式){  
	语句...  
}else if(条件表达式){  
	语句...  
}else{  
	语句...  
}
```

```
执行流程  
 if...else if...else语句执行时，会自上至下依次对条件表达式进行求值判断，  
	如果判断结果为true，则执行当前if后的语句，执行完成后语句结束。  
	如果判断结果为false，则继续向下判断，直到找到为true的为止。  
	如果所有的条件表达式都是false，则执行else后的语句
```

1.条件分支语句
switch语句
语法:

```
switch(条件表达式){  
	case 表达式:  
		语句...  
		break;  
	case 表达式:  
		语句...  
		break;  
	case 表达式:  
		语句...  
		break;  
	default:  
		语句...  
		break;  
}
```

执行流程：
switch…case…语句在执行时，会依次将case后的表达式的值和switch后的表达式的值进行全等比较，
如果比较结果为false，则继续向下比较。如果比较结果为true，则从当前case处开始向下执行代码。
如果所有的case判断结果都为false，则从default处开始执行代码。

#### 3.12 循环语句

通过循环语句可以反复执行某些语句多次
while循环
语法：

```
while(条件表达式){  
    语句...  
}
```

复制

执行流程：
while语句在执行时，会先对条件表达式进行求值判断，
如果判断结果为false，则终止循环
如果判断结果为true，则执行循环体
循环体执行完毕，继续对条件表达式进行求值判断，依此类推

do…while循环
语法:

```
do{  
语句...  
}while(条件表达式)
```

复制

执行流程
do…while在执行时，会先执行do后的循环体，然后在对条件表达式进行判断，
如果判断判断结果为false，则终止循环。
如果判断结果为true，则继续执行循环体，依此类推

和while的区别：
while：先判断后执行
do…while: 先执行后判断
do…while可以确保循环体至少执行一次。

for循环
语法：

```
for(①初始化表达式 ; ②条件表达式 ; ④更新表达式){  
    ③语句...  
}
```

复制

执行流程：
首先执行①初始化表达式，初始化一个变量，
然后对②条件表达式进行求值判断，如果为false则终止循环
如果判断结果为true，则执行③循环体
循环体执行完毕，执行④更新表达式，对变量进行更新。
更新表达式执行完毕重复②

死循环

```
while(true){  

}  

for(;;){  

}
```

##### 练习1-------打印九九乘法表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //打印九九乘法表
        for(var i = 1; i < 9; i++)
        {
            for (var j = 1; j <= i; j++)
            {
                document.write("<span>" + j +" * " + i + " = " + (i*j + "</span>"));
            }
            document.write("<br>");
        }
    </script>
    <style>
        body{
            width: 2000px;
        }

        span{
            display: inline-block;
            width: 100px;
        }
    </style>
</head>
<body>
    
</body>
</html>
```

##### 练习2-----打印2-1000所有的质素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        for(var i = 2; i < 1000; i++)
        {
            var flag = true;
            for(var index = 2; index < i; index++)
            {
                if( i % index == 0)
                {
                    flag = false;  
                }
            }

            if(flag)
            {
                document.write(i + "是一个质素" + "<br  />");
            }
        }
    </script>
</head>
<body>
    
</body>
</html>
```

##### 练习3------水仙花数求解

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>

        for(var flag = 100; flag <= 1000; flag++)
        {
            var sum = 0;
            var i = flag;
            while(i > 0)
            {
                var index = i % 10;
                sum = sum + Math.pow(index,3) ;
                i = parseInt(i / 10);
            }

            if(sum == flag)
            {
                document.write(flag + "为水仙花数" + "<br  />");
            }
        }

    </script>
</head>
<body>
    
</body>
</html>
```

##### 练习4--------求1-1000的7的倍数的值和，次数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var sum = 0;
        var index = 0;
        for(var i = 1; i < 1000; i++)
        {
            if(i % 7 == 0)
            {
                sum +=i;
                index++; 
            }
        }

        document.write("和为： " + sum +"  次数为" + index);
    </script>
</head>
<body>
    
</body>
</html>
```

##### 练习5--------求所有的奇数之和

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var sum = 0;
        for(var i = 0; i < 1000;i++)
        {
            if( i % 2 == 0)
            {
                sum += i;
            }
        }
        document.write(sum + "");
    </script>
</head>
<body>
    
</body>
</html>
```

##### 练习6-----求输入三个数的排序

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>

        //输入的数其实是字符串
        var num_1 = +prompt("请输入第一个数");
        var num_2 = +prompt("请输入第二个数");
        var num_3 = +prompt("请输入第三个数");

        var math = 0;
        if(num_1 < num_3)
        {
            math =num_1;
            num_1 = num_3;
            num_3 = math;
        }
        
        if(num_2 < num_3)
        {
            math =num_3;
            num_3 = num_2;
            num_2 = math;
        }

        if(num_1 < num_2)
        {
            math =num_1;
            num_1 = num_2;
            num_2 = math;
        }
        console.log("" + num_1+ " > "+ num_2+ " > "+ num_3);
        document.write("" + num_1+ " > "+ num_2+ " > "+ num_3);
    </script>
</head>
<body>
    
</body>
</html>
```

##### 练习7 ---- 年利率问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var sum = 1000;
        var index = 0;
        while( sum < 5000)
        {
            sum *= 1.05;
            index++;
        }
        document.write(sum + "次数为" +index);
    </script>


</head>
<body
    
</body>
</html>
```