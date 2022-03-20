---
title: JavaScript学习笔记（第三部分）总共四部分
date: 2022/3/19 22:30

---

##  JavaScript学习笔记（第三部分）总共四部分

### 6. 常用类和方法

#### 6.1 包装类

计时器：当我们需要测试某一段代码执行的效率，计时器就显得尤为的重要了，计时器的使用：

```html
    <script>
        console.time("test");
        for(var i = 0 ; i< 10000;i++)
        {
            console.log("测试某一段函数的执行时间");
        }
        console.timeEnd("test"); //执行这段代码用时test: 79.40283203125 ms
    </script>
```



在js中为我们提供了**三个包装类：String()、 Boolean()、 Number()**

通过这三个包装类可以创建基本数据类型的对象，但是我们一般不直接使用new 来创建出改对象使用。

```html
    <script>
        var number = new Number();
        var str =new String();
        var bflag = new Boolean();
    </script>
```

但是实际的工作过程中千万千万不要这样使用！！会带来一些不可预期的结果。

在我们日常的使用过程中，我们对一些基本的数据类型的值去调用属性和方法的时候，浏览器会临时使用包装类转化其对象，然后去调用属性和方法，调用完以后，再将其转化为基本的数据类型

```html
    <script>
        var str = "1231";
        var num  = Number(str);//在这个过程中其实调用了包转类 底层的实现，有兴趣可以看源码
        console.log(num);//1231
    </script>
```

字符串在底层其实都是以字符数组的形式保存的。

```html
    <script>
        var str = "HELLO WORLD";
        console.log(str.charAt(1));//E
        console.log(str[0]);//H
        console.log(str.length);//11
    </script>
```

获取字符的unnicode编码charCodeAt函数  根据unnicode编码获得字符fromCharCode函数

```html
 	<script>
        var str = "HELLO WORLD";
        var str = str.charCodeAt(1);
        console.log(str);  //69  unnicode编码
    </script>

   <script>
        var tmp = String.fromCharCode(1254);
        console.log(tmp); //Ӧ
	</script>
```

查找字符串中是否有该字符indexof从前往后查找  lastindexof从后往前查找

```html
 	<script>
         var str = "HELLO WORLED";
         var tmp = str.indexOf("E");
         var tmp1 = str.lastIndexOf("E");
         console.log(tmp); //1
         console.log(tmp1);  //10
    </script>
```

```html
    <script>
        var str = "Hello world";
        var tmp = str.slice(0,3);
        console.log(tmp); //Hel
    </script>
    <script>
         var str = "Hello world";
         var tmp = str.substring(0,3);//必须要两个参数，slice可以只有一个参数，第二个参数小于自动进行参数的交换
         var tmp1 = str.substring(4,-4); //传了负值自动会变为0。
         console.log(tmp); //Hel
         console.log(tmp1);//Hell
    </script>
    <script>
        var str = "Hello world";
        var tmp = str.substr(0,3);//截取字符串的长度
        console.log(tmp);//Hel
    </script>
    <script>
        var str = "Hello,world,my,sister,aa";
        var tmp = str.split(",");//截取字符串的标识位
        console.log(tmp);//数组存放 Hello,world,my,sister,aa
    </script>
    <script>
        var str = "ASDADAWEQW";
        var str1 = "asdadada";
        console.log(str1.toUpperCase()); //ASDADADA
        console.log(str.toLowerCase());//asdadaweqw
    </script>
    <!-- 注意：都不会影响原有的字符串 -->
```



#### 6.2 Date(时间对象)

日期的对象，js中通过Date对象来表示一个时间
创建对象的两种方式：

```html
 	<script>
        var date = new Date(); //创建一个当前的时间对象
        console.log(date);   //Sat Mar 19 2022 13:56:55 GMT+0800 (中国标准时间)
        var date_1 = new Date("12/01/2022 13:10:30");  //创建自定义的时间对象
        console.log(date_1);//Thu Dec 01 2022 13:10:30 GMT+0800 (中国标准时间)
    </script>
```

自定义的日期的格式：var d = new Date("月/日/年 时:分:秒");

**方法：**

| name              |                                                              |
| :---------------- | :----------------------------------------------------------- |
| getDate()         | 当前日期对象是几日（1-31）                                   |
| getDay()          | 返回当前日期对象时周几（0-6） 0 周日 1 周一 。。。           |
| getMonth()        | 返回当前日期对象的月份（0-11） 0 一月 1 二月 。。。          |
| getFullYear()     | 从 Date 对象以四位数字返回年份。                             |
| getHours()        | 返回 Date 对象的小时 (0 ~ 23)。                              |
| getMinutes()      | 返回 Date 对象的分钟 (0 ~ 59)。                              |
| getSeconds()      | 返回 Date 对象的秒数 (0 ~ 59)。                              |
| getMilliseconds() | 返回 Date 对象的毫秒(0 ~ 999)。                              |
| getTime()         | 返回当前日期对象的时间戳 时间戳，指的是从1970年月1日 0时0分0秒，**到现在时间的毫秒数** 计算机底层保存时间都是以时间戳的形式保存的。 |
| Date.now()        | 可以获取当前代码执行时的时间戳                               |
| setHours()        | 设置 Date 对象中的小时 (0 ~ 23)                              |

```html
   <script>
        //时间date函数的测试使用
        var date = new Date();
        console.log(date);// Sat Mar 19 2022 20:06:40 GMT+0800 (中国标准时间)
        console.log(date.getDate());//当月的多少日 19
        console.log(date.getDay());//星期几 6  0-6的范围 0表示周天
        console.log(date.getMonth());//第几个月 2 但是这里表示的是3月 月份的值要+1  0表示一月
        console.log(date.getFullYear());//从 Date 对象以四位数字返回年份 2022
        console.log(date.getHours()); //14
        console.log(date.getMinutes()); //6
        console.log(date.getMilliseconds());  //366
        console.log(Date.now());//时间戳 //1647670000367
        console.log(date.setHours(20)); //设置多少点了 1647691600366
        console.log(date); //Sat Mar 19 2022 20:06:40 GMT+0800 (中国标准时间)
    </script>
```

注意：在计算机的底层保存的时间其实都是时间戳。



#### 6.3 Math对象

Math和其他的对象不一样，它不是一个构造函数，它属于一个工具类不用创建对象，他里边封装了数学运算的属性和方法 ,我们可以直接使用它来进行数学运算相关的操作。

方法：Math.PI 常量，圆周率

```html
	<script>
        console.log(Math.PI);//3.141592653589793
    </script>
```


Math.abs() 绝对值运算

```html
	<script>
        console.log(Math.abs(-1000));//1000
    </script>
```

Math.ceil() 向上取整

```html
	<script>
        console.log(Math.ceil(10.2));//11
    </script>
```

Math.floor()  向下取整

```html
 	<script>
        console.log(Math.floor(10.2));//10
    </script>	
```

Math.round() 四舍五入取整

```hmtl
     <script>
        console.log(Math.round(10.3));//10
        console.log(Math.round(10.5));//11
    </script>
```

Math.random()
生成一个01之间的随机数
生成一个xy之间的随机数
Math.round(Math.random()*(y-x)+x);

```html
 <script>
        for(var i = 1; i < 10; i++) //0-1之间的随便数
        {
            console.log(Math.random());//10
        }

        //生成1-10的数
        for(var i = 1; i < 10; i++)
        {
            console.log(Math.round(Math.random()*9 +1 ));//10
        }
    </script>
```

Math.pow(x,y) 求x的y次幂

```html
	<script>
        console.log(Math.pow(16,2));//256
   </script>
```

Math.sqrt() 对一个数进行开方

```html
 	<script>
         console.log(Math.sqrt(16));//4
    </script>
```

Math.max()求多个数中最大值  Math.min()求多个数中的最小值

```html
 	<script>
       var arr = [213,231,2314,34,534,56,1231];
        console.log(Math.max(12,3,213,434,45,45,234));//434
        console.log(Math.min(12,3,213,434,45,45,234));//3
    </script>
```

### 7. 正则表达式

正则用来定义一些字符串的规则，程序可以根据这些规则来判断一个字符串是否符合规则，也可以将一个字符串中符合规则的内容提取出来。

**创建正则表达式**:

```html
 	    <script>
            var reg = new RegExp("a");
            console.log(reg.test("fsafasd"));//true
            var reg_1 = /aad/g; // g代表匹配模式
            console.log(reg_1.test("fsaadafasd"));//true test()方法用来检查一个字符串是否符合正则表达式的原则
            console.log(typeof reg);//object
    	</script>
```

var reg = new RegExp(“正则”,”匹配模式”); 注意：使用构造函数时，由于它的参数是一个字符串，而\是字符串中转义字符，如果要使用\则需要使用\来代替

var reg = /正则表达式/匹配模式 （匹配模式可以多个一起写：/gi）

```html
 	<script>
        var reg = new RegExp("a","i");
        console.log(reg.test("sdsdsdAAAAa"));//true
        console.log(reg.test("ERWRWR"));//false
    </script>
```

匹配模式：i: 忽略大小写（ignore） g:全局匹配模式（默认为1次）
设置匹配模式时，可以都不设置，也可以设置1个，也可以全设置，设置时没有顺序要求

**正则语法**
**| 或   [] 或  **

```html
 <script>
         var reg = new RegExp("a|b|c","i");
        console.log(reg.test("addd"));//true
        console.log(reg.test("ddddd"));//false
        console.log(reg.test("cdddd"));//true
    </script>
     <script>
        var reg = new RegExp("[abc]","i");  //[这个里面其实也是或的意思]  [abc] = a|b|c
       console.log(reg.test("addd"));//true
       console.log(reg.test("ddddd"));//false
       console.log(reg.test("cdddd"));//true
   </script>
```

**^ 除了     [a-z] 小写字母 （也可以[e-i])**

**[A-Z] 大写字母**
**[A-z] 任意字母,但是还包括了其他ASCII在此之中的**
**[0-9] 任意数字**

```html
   <script>
       var reg = new RegExp("[a-z]");  //[任意的小写字母]
       console.log(reg.test("addd"));//true
       var reg = new RegExp("[A-Z]");  //[任意的大写字母]
       console.log(reg.test("aDdd"));//true
       var reg = new RegExp("[A-z]");  //[任意的字母]
       console.log(reg.test("aDdd"));//true
   </script>
   <script>
       var reg = new RegExp("[^0-9]");  //[任意的小写字母]
       console.log(reg.test("124545a"));//true
       console.log(reg.test("124545"));//false
   </script>
```

**元符号**

检查一个字符串中是否含有 .
. 表示任意字符
在正则表达式中使用\作为转义字符
. 来表示.
\ 表示\

```html
    <script>
        var reg = new RegExp("\.");
        console.log(reg.test("sddd")); //true
        console.log(reg.test("!@#!@#"));//true
    </script>
```

\w 任意字母、数字、_ [A-z0-9_]
\W 除了字母、数字、_ [ ^A-z0-9_]

```html
      <script>
        var reg = /\w/;
        console.log(reg.test("sddd")); //true \w 任意字母、数字、_ [A-z0-9_]
        var reg1 = /\W/;
        console.log(reg1.test("!@#!@#"));//true  \W 除了字母、数字、_ [ ^A-z0-9_]
    </script>
```

\d任意的数字 [0-9]
\D除了数字 [ ^0-9]

```html
 <script>
        var reg = /\d/;
        console.log(reg.test("sd1dd")); //true  \d任意的数字 [0-9]
        var reg1 = /\D/;
        console.log(reg1.test("!@#!@#"));//true \D除了数字 [ ^0-9]
    </script>
```

\s空格
\S除了空格

```html
<script>
        var reg = /\S/;
        console.log(reg.test("sd1dd")); //true \S除了空格
        var reg1 = /\s/;
        console.log(reg1.test("!@ #!@#"));//true \s空格
    </script>
```

\b单词边界
\B除了单词边界

```html
    <script>
        var reg = /b\b/; 
        console.log(reg.test("sdb 1dd")); //true \b单词边界 b后面有空格
        var reg1 = /\B/;
        console.log(reg1.test("!@#!@#x"));//true \B除了单词边界 没有空格
    </script>
```

**split()函数的使用**

可以将一个字符串拆分成一个数组，方法参数中可以传正则表达式

```html
	<script>
        var str = "2h3hu1h4gg14f41fd41hh1i5hih636j221g";
        console.log(str.split(/[A-z]/)); //根据任意的字符串来拆分
    </script>
```

**search()函数的使用**

```html
  	<script>
        var str = "2h3hu1h4gg14f41fd41hh1i5hih636j221g";
        console.log(str.search(/4[3231]f/)); //   13  查找到出现的位置
    </script>
```

**replace（）函数的使用**

```html
<script>
        var str = "2h3hu1h4gg14f41fd41hh1i5hih636j221g";
        var tmp = str.replace(1,"ssss");
        console.log( tmp); // 2h3hussssh4gg14f41fd41hh1i5hih636j221g
    </script>
```

**match()函数的使用**

```html
   <script>
        var str="1 plus 2 equal 3";
        var ret= str.match(/\d/g);
        console.log(ret);// 1 2 3array
    </script>
```

**量词**
通过量词可以设置一个内容出现的次数
量词只对它前边的一个内容起作用
{n} 正好出现n次
{m,n} 出现mn次
{m,} m次以上

```html
    <script>
        var reg = /a{3}/g;
        var str = "asdadadaaaaddda";
        console.log(reg.test(str));//true
        console.log(reg.test("str"));//false;
    </script>
	
    <script>
        var reg = /a{1,3}/g;
        var str = "asdadadaaaaddda";
        console.log(reg.test(str));//true
        console.log(reg.test("stra"));//true;
    </script>

    <script>
        var reg = /a{13,}/g;
        var str = "asdadadaaaaddda";
        console.log(reg.test(str));//false
        console.log(reg.test("stra"));//false;
    </script>
```

+至少一个，相当于{1,}
*个或多个，相当于{0,}
? 0个或1个，相当于{0,1}

```html
 <script>
        var str = "dasdad  dads da dad adad";
        var tmp = str.replace(/\s*/g,"");
        console.log(tmp);//dasdaddadsdadadadad
    </script>
```

**边界表达式**（不要在java中用，javaScript中用）
^:正则开始
$:正则结束 ：**注意结束前一个才是结束匹配**

```html
<!-- // 邮件的正则表达式练习 -->
	<script>
        var reg = /\w{3,}(\. \w+)*@[A-z0-9]+(\.[A-z{2,5}]){1,2}/;
        var email = "2499954371@qq.com";
        console.log(reg.test(email));//true
        console.log(reg.test("dad.dsa@aa.dsda"));//true
    </script>
```

**方法：**

test()
可以用来检查一个字符串是否符合正则表达式
如果符合返回true，否则返回false
例子

去掉两端的空格:

```html
  <script>
            var s = "        	f    afa    ";   
            s = s.replace(/^\s*|\s*$/g,"");
            console.log(s);//f    afa
       </script>
```

### 8. DOM 文档对象模型(Document Object Model)

文档对象模型，通过DOM可以来任意来修改网页中各个内容
文档 :  文档指的是网页，一个网页就是一个文档
对象 : 对象指将网页中的每一个节点都转换为对象, 转换完对象以后，就可以以一种纯面向对象的形式来操作网页了
模型:模型用来表示节点和节点之间的关系，方便操作页面
节点（Node）:节点是构成网页的最基本的单元，网页中的每一个部分都可以称为是一个节点。虽然都是节点，但是节点的类型却是不同的

```web-idl
常用的节点：

1. 文档节点 （Document），代表整个网页
2. 元素节点（Element），代表网页中的标签
3. 属性节点（Attribute），代表标签中的属性
4. 文本节点（Text），代表网页中的文本内容
```

![image-20220319161659485](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220319161659485.png)



大致结构图如上图所示：

#### 8.1DOM操作

DOM查询：在网页中浏览器已经为我们提供了**document对象**，
**它代表的是整个网页，它是window对象的属性，可以在页面中直接使用。**

```html
document查询方法：
1.根据元素的id属性查询一个元素节点对象： document.getElementById(“id属性值”);
2.根据元素的name属性值查询一组元素节点对象:document.getElementsByName(“name属性值”);
3.根据标签名来查询一组元素节点对象：document.getElementsByTagName(“标签名”);
```

浏览器已经为我们提供了文档节点，对象这个对象是window属性，可以在网页中直接使用，文档节点代表整个网页。

```html
<body>
    <button id ="btn">我是个按钮</button>
    <script>
        var btn = document.getElementById("btn");
        btn.innerHTML = "我改变了这个名字";
        btn.onclick = function(){
            alert("我被点击了");
        }
    </script>
</body>
```

**读取元素的属性：**
语法：元素.属性名
例子：ele.name  ele.id ele.value  ele.className
注意：class属性不能采用这种方式，
**读取class属性时需要使用 元素.classNam**e

修改元素的属性：
语法：元素.属性名 = 属性值

innerHTML
使用该属性可以获取或设置元素内部的HTML代码

```html
<body>
    <button class = "btn" id ="btn" value="值">我是个按钮</button>
    <script>
        var btn = document.getElementById("btn");
        btn.innerHTML = "我改变了这个名字";
        btn.onclick = function(){
            console.log(btn.className  + "id:"+btn.id ); 
        } //btnid:btn
    </script>
</body>
```

#### 8.2事件（Event）

事件指的是用户和浏览器之间的交互行为。比如：点击按钮、关闭窗口、鼠标移动。。。
我们可以为事件来绑定回调函数来响应事件。

绑定事件的方式：
1.可以在标签的事件属性中设置相应的JS代码

```html
<body>
    <button id = "btn" onclick="alert('我被点击了')"> 按钮 </button>
</body>
```

2.可以通过为对象的指定事件属性设置回调函数的形式来处理事件

```html
<body>
    <button id = "btn" > 按钮 </button>
    <script>
        var btn = document.getElementById("btn");
        btn.onclick = function(){
            alert("我被点了");
        }
    </script>
</body>
```

**文档的加载**
浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。
如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，
此时将会无法正常获取到DOM对象，导致DOM操作失败。

解决方式一：可以将js代码编写到body的下边

```html
<body>
    <button id = "btn" > 按钮 </button>
    <script>
        var btn = document.getElementById("btn");
        btn.onclick = function(){
            alert("我被点了");
        }
    </script>
</body>
```

解决方式二：将js代码编写到window.onload = function(){}中 , window.onload 对应的回调函数会在整个页面加载完毕以后才执行，
所以可以确保代码执行时，DOM对象已经加载完毕了.

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>  
    <script>
        window.onload = function(){
            var btn = document.getElementById("btn");
             btn.onclick = function(){
            alert("我被点了");
            }
        }
    </script>
</head>
<body>
    <button id = "btn" > 按钮 </button>
</body>
</html>
```



#### 8.3DOM查询

通过具体的元素节点来查询
元素.getElementsByTagName()
通过标签名查询当前元素的指定后代元素

**子节点包括便签元素中的文本，子元素自包含标签元素**

元素.childNodes
获取当前元素的**所有子节点**
**会获取到空白的文本子节点**

childNodes属性会获取包括文本节点在呢的所有节点
根据DOM标签标签间空白也会当成文本节点
注意：在IE8及以下的浏览器中，不会将空白文本当成子节点，
所以该属性在IE8中会返回4个子元素而其他浏览器是9个

元素.children : 获取当前元素的**所有子元素**

元素.firstChild :  获取当前元素的**第一个子节点**，会获取到空白的文本子节点

元素.lastChild : 获取当前元素的**最后一个子节点**

元素.parentNode : 获取当前元素的父元素

元素.previousSibling : 获取当前元素的前一个兄弟节点

previousElementSibling : 获取前一个兄弟元素，IE8及以下不支持

元素.nextSibling :  获取当前元素的后一个兄弟节点

firstElementChild : 获取当前元素的第一个子元素
firstElementChild不支持IE8及以下的浏览器，
如果需要兼容他们尽量不要使用

innerHTML和innerText
这两个属性并没有在DOM标准定义，但是大部分浏览器都支持这两个属性
两个属性作用类似，都可以获取到标签内部的内容，
**不同是innerHTML会获取到html标签，而innerText会自动去除标签**
如果使用这两个属性来设置标签内部的内容时，没有任何区别的

**读取标签内部的文本内容**

h1中的文本内容

元素.firstChild.nodeValue

```html
<!dom查询的练习">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Untitled Document</title>
		<link rel="stylesheet" type="text/css" href="style/css.css" />
		<script type="text/javascript">
		
			window.onload = function(){
				
				
				// var btn01 = document.getElementById("btn01");
				// btn01.onclick = function(){
				// 	var libj = document.getElementById("bj");
				// 	alert(libj.innerText);
				// }

				function findNodeBtn(idstr,func)
				{
					var btn01 = document.getElementById(idstr);
					btn01.onclick = func;
				}

				//查找#bj节点
				findNodeBtn("btn01",function(){
					var bjli = document.getElementById("bj");
					alert(bjli.innerHTML);
				});
					
				//查找所有li节点
				findNodeBtn("btn02",function(){
					var lis = document.getElementsByTagName("li");
					for(var i = 0; i <lis.length;i++)
					{
						alert(lis[i].innerText);
					}
					alert(lis);
				});
				
				//查找name=gender的所有节点
				findNodeBtn("btn03",function(){
					var ganders = document.getElementsByName("gender");
					for(var i = 0; i < ganders.length;i++)
					{
						alert(ganders[i].value);
					}
				});

				//查找#city下所有li节点
				findNodeBtn("btn04",function(){
					var city = document.getElementById("city");
					var lis = city.getElementsByTagName("li");
					for(var i = 0; i <lis.length;i++)
					{
						alert(lis[i].innerText);
					}
				});

				//返回#city的所有子节点
				findNodeBtn("btn05",function(){
					var city = document.getElementById("city");
					// var chlids = city.childNodes; 会有子标签
					var chlids = city.children;
					for(var i = 0; i <chlids.length;i++)
					{
						alert(chlids[i].innerText);
					}
				});

				//返回#phone的第一个子节点
				findNodeBtn("btn06",function(){
					var phone = document.getElementById("phone");
					var firschild = phone.firstChild; 
					// var firschild = phone.firstElementChild;  ie8下不兼容
					alert(firschild.innerText);
				});

				//返回#bj的父节点
				findNodeBtn("btn07",function(){
					var bj = document.getElementById("bj");
					var parentNode = bj.parentNode;
					// var parentNode = bj.parentElement; ie8下不兼容
					alert(parentNode.innerText);
				});

				//返回#android的前一个兄弟节点
				findNodeBtn("btn08",function(){
					var bro = document.getElementById("android");
					// var node = bro.previousElementSibling;  //前一个节点
					// alert(node.innerHTML);

					var node = bro.nextElementSibling; //后一个节点
					alert(node.innerHTML);
				});

				//读取#username的value属性值
				findNodeBtn("btn09",function(){
					var bro = document.getElementById("username");
					alert(bro.value);
				});

				//设置#username的value属性值
				findNodeBtn("btn10",function(){
					var bro = document.getElementById("username");
					bro.value = "该百年迟早"
				});

				//返回#bj的文本值
				findNodeBtn("btn11",function(){
					var bro = document.getElementById("bj");
					alert(bro.innerText);
				});
			};
			
		
		</script>
	</head>
	<body>
		<div id="total">
			<div class="inner">
				<p>
					你喜欢哪个城市?
				</p>

				<ul id="city">
					<li id="bj">北京</li>
					<li>上海</li>
					<li>东京</li>
					<li>首尔</li>
				</ul>

				<br>
				<br>

				<p>
					你喜欢哪款单机游戏?
				</p>

				<ul id="game">
					<li id="rl">红警</li>
					<li>实况</li>
					<li>极品飞车</li>
					<li>魔兽</li>
				</ul>

				<br />
				<br />

				<p>
					你手机的操作系统是?
				</p>

				<ul id="phone"><li>IOS</li><li id="android">Android</li><li>Windows Phone</li></ul>
			</div>

			<div class="inner">
				gender:
				<input class="hello" type="radio" name="gender" value="male"/>
				Male
				<input class="hello" type="radio" name="gender" value="female"/>
				Female
				<br>
				<br>
				name:
				<input type="text" name="name" id="username" value="abcde"/>
			</div>
		</div>
		<div id="btnList">
			<div><button id="btn01">查找#bj节点</button></div>
			<div><button id="btn02">查找所有li节点</button></div>
			<div><button id="btn03">查找name=gender的所有节点</button></div>
			<div><button id="btn04">查找#city下所有li节点</button></div>
			<div><button id="btn05">返回#city的所有子节点</button></div>
			<div><button id="btn06">返回#phone的第一个子节点</button></div>
			<div><button id="btn07">返回#bj的父节点</button></div>
			<div><button id="btn08">返回#android的前一个兄弟节点</button></div>
			<div><button id="btn09">返回#username的value属性值</button></div>
			<div><button id="btn10">设置#username的value属性值</button></div>
			<div><button id="btn11">返回#bj的文本值</button></div>
		</div>
	</body>
</html>

```

```html
//按钮换图片功能的实现
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        .inner{
            width: 500px;
            margin: 0 auto;
            text-align: center;
            background-color: greenyellow;
        }

    </style>
    <script>
        window.onload = function(){

            var arrAdress = ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"];
            var prev = document.getElementById("prev");
            var next = document.getElementById("next");
            // var img = document.getElementsByTagName("img")[0];
            var img = document.getElementById("imgs");

            var index = 0;
            prev.onclick = function(){
                index--;
                if(index < 0)
                {
                    index = 4;
                }
                img.src = arrAdress[index];
            }

            next.onclick = function(){
                index++;
                if(index > 4)
                {
                    index = 0;
                }
                img.src = arrAdress[index];
            }

        }
    </script>
</head>
<body>
    <div class="inner">
        <img src="./img/1.jpg" alt="图片的资源不够" id = "imgs">
        <button id="prev">上一张</button>
        <button id = "next">下一张</button>
    </div>
</body>
</html>
```

```html
//标签按钮功能的实现
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>全选练习</title>
<script type="text/javascript">

	window.onload = function(){
		
		
		//获取四个多选框items
		var items = document.getElementsByName("items");
		//获取全选/全不选的多选框
		var checkedAllBox = document.getElementById("checkedAllBox");
		
		/*
		 * 全选按钮
		 * 	- 点击按钮以后，四个多选框全都被选中
		 */
		
		//1.#checkedAllBtn
		 var checkedAllBtn = document.getElementById("checkedAllBtn");
		 checkedAllBtn.onclick=function(){
			for(var i = 0; i< items.length;i++)
			{
				items[i].checked = true;
			}
			checkedAllBox.checked = true;
		 }
		
		//2.#checkedNoBtn
		var checkedNoBtn = document.getElementById("checkedNoBtn");
		checkedNoBtn.onclick=function(){
			for(var i = 0; i< items.length;i++)
			{
				items[i].checked = false;
			}
			checkedAllBox.checked = false;
		 }
		/*
		 * 反选按钮
		 * 	- 点击按钮以后，选中的变成没选中，没选中的变成选中
		 */
		//3.#checkedRevBtn
		var checkedRevBtn = document.getElementById("checkedRevBtn");
		checkedRevBtn.onclick=function(){
			checkedAllBox.checked = true;
			for(var i = 0; i< items.length;i++)
			{
				items[i].checked = !items[i].checked;
				if(!!items[i].checked)
				{
					checkedAllBox.checked = false;
				}
			}
			
		 }
		/*
		 * 提交按钮：
		 * 	- 点击按钮以后，将所有选中的多选框的value属性值弹出
		 */
		//4.#sendBtn
		var sendBtn = document.getElementById("sendBtn");
		sendBtn.onclick=function(){
			for(var i = 0; i< items.length;i++)
			{
				if(items[i].checked)
				{
					alert(items[i].value);
				}
			}
			
		 }

		//5.#checkedAllBox
		var checkedAllBox = document.getElementById("checkedAllBox");
		checkedAllBox.onclick=function(){
			for(var i = 0; i< items.length;i++)
			{
				if(checkedAllBox.checked)
				{
					items[i].checked = true;
				}
				else{
					items[i].checked = false;
				}
			}
			
		 }

		//6.items
		for(var i = 0 ; i< items.length;i++){
			items[i].onclick=function(){
				checkedAllBox.checked = true;
				for(var i = 0 ; i< items.length;i++)
				{
					if(!items[i].checked)
						{
							checkedAllBox.checked = false;
							break;
						}
				}
			}
		}	
	};
	
</script>
</head>
<body>

	<form method="post" action="">
		你爱好的运动是？<input type="checkbox" id="checkedAllBox" />全选/全不选 
		
		<br />
		<input type="checkbox" name="items" value="足球" />足球
		<input type="checkbox" name="items" value="篮球" />篮球
		<input type="checkbox" name="items" value="羽毛球" />羽毛球
		<input type="checkbox" name="items" value="乒乓球" />乒乓球
		<br />
		<input type="button" id="checkedAllBtn" value="全　选" />
		<input type="button" id="checkedNoBtn" value="全不选" />
		<input type="button" id="checkedRevBtn" value="反　选" />
		<input type="button" id="sendBtn" value="提　交" />
	</form>
</body>
</html>
```

#### 8.4document对象的其他的属性和方法

document.all：**获取页面中的所有元素**，相当于document.getElementsByTagName(“*”);

document.documentElement : **获取页面中html根元素**

document.body: 获取页面中的body元素

document.getElementsByClassName(): **根据元素的class属性值查询一组元素节点对象**
这个方法不支持IE8及以下的浏览器

document.querySelector() : **根据CSS选择器去页面中查询一个元素**,如果匹配到的元素有多个，则它会返回查询到的第一个元素

document.querySelectorAll() : 根据CSS选择器去页面中查询一组元素, 会将匹配到所有元素封装到一个数组中返回，即使只匹配到一个

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
    <script>
        //获取body标签
        window.onload = function(){
            var bodylab = document.getElementsByTagName("body");  //通过标签取获取body
            var bodylab1 = document.body;  //在document中有一个属性body，它保存的是body的引用
            console.log(bodylab[0]);
            console.log(bodylab1);

            //获取html整体
            var html  = document.documentElement;
            console.log(html);

            //获取所有的标签
            // var htmlall= document.all;
            var htmlall = document.getElementsByTagName("*");  //方法二：
            console.log(htmlall.length);   //14
            for(var i = 0; i< htmlall.length; i++)
            {
                console.log(htmlall[i].innerHTML);
            }
          
            // ///*
			// 	 * 根据元素的class属性值查询一组元素节点对象
			// 	 * getElementsByClassName()可以根据class属性值获取一组元素节点对象，
			// 	 * 	但是该方法不支持IE8及以下的浏览器
			// 	 */
           var names = document.getElementsByClassName("name");
           console.log(names.length);//2
           var divs  = document.getElementsByTagName("div");
           console.log(divs.length);//5

            //获取class为name中的所有的div
				//.name div
				/*
				 * document.querySelector()
				 * 	- 需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询一个元素节点对象
				 * 	- 虽然IE8中没有getElementsByClassName()但是可以使用querySelector()代替
				 * 	- 使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个
				 */
				var div = document.querySelector("name div");
				console.log(div);//
				var box1 = document.querySelector(".name")
                console.log(box1);//

                /*
				 * document.querySelectorAll()
				 * 	- 该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回
				 * 	- 即使符合条件的元素只有一个，它也会返回数组
				 */
				box1 = document.querySelectorAll(".name");
				console.log(box1.length);//4 
        }

    </script>
</head>
<body>
    <div class="inner">
        <div id = "one">
            <div id="oneone" class="name">
                    你好
            </div>
        </div>
        <div id = "one" class="name">
            ？？？
            <div>

            </div>
        </div>
        <div id = "one">
            three
            <div class="name">
                <div class="name"></div>
            </div>
        </div>
    </div>
</body>
</html>
```

#### 8.5 DOM修改

document.createElement(“TagName”)
可以用于创建一个元素节点对象，
它需要一个标签名作为参数，将会根据该标签名创建元素节点对象，
并将创建好的对象作为返回值返回
document.createTextNode(“textContent”)
可以根据文本内容创建一个文本节点对象

**父节点.appendChild(子节点)**
向父节点中添加指定的子节点
**父节点.insertBefore(新节点,旧节点)**
将一个新的节点插入到旧节点的前边
父节点.replaceChild(新节点,旧节点)
使用一个新的节点去替换旧节点

**父节点.removeChild(子节点)**
删除指定的子节点
推荐方式：**子节点.parentNode.removeChild(子节点)**

**以上方法，实际就是改变了相应元素（标签）的innerHTML的值。**

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="style/css.css" />
	<script>
		window.onload = function(){
			function MyClass(idstr, func)
			{
				var btn = document.getElementById(idstr);
				btn.onclick = func;
			}

			// 创建一个"广州"节点,添加到#city下
			MyClass("btn01",function(){
				var gz = document.createElement("li");
				var gztext = document.createTextNode("广州");
				gz.appendChild(gztext);
				var city = document.getElementById("city");	
				city.appendChild(gz);
			});
			
			//将"广州"节点插入到#bj前面
			MyClass("btn02",function(){
				var gz = document.createElement("li");
				var gztext = document.createTextNode("广州");
				gz.appendChild(gztext);
				var city = document.getElementById("city");	
				var bj = document.getElementById("bj");
				city.insertBefore(gz,bj);
			});

			//使用"广州"节点替换#bj节点replaceChild
			MyClass("btn03",function(){
				var gz = document.createElement("li");
				var gztext = document.createTextNode("广州");
				gz.appendChild(gztext);
				var city = document.getElementById("city");	
				var bj = document.getElementById("bj");
				city.replaceChild(gz,bj);
			});

			//删除#bj节点removeChild
			MyClass("btn04",function(){
				var city = document.getElementById("city");	
				var bj = document.getElementById("bj");
				city.removeChild(bj);
			});

			//读取#city内的HTML代码
			MyClass("btn05",function(){
				var city = document.getElementById("city");	
				alert(city.innerHTML);
			});

			// 设置#bj内的HTML代码
			MyClass("btn06",function(){
				var bj = document.getElementById("bj");	
				bj.innerHTML = "长沙"
			});

			//创建一个"广州"节点,添加到#city下
			MyClass("btn07",function(){
				var city = document.getElementById("city");	
				var gz = document.createElement("li");
				gz.innerText = "广州"
				city.appendChild(gz);
			});
		}
	</script>
</head>
<body>
		<div id="total">
			<div class="inner">
				<p>
					你喜欢哪个城市?
				</p>

				<ul id="city">
					<li id="bj">北京</li>
					<li>上海</li>
					<li>东京</li>
					<li>首尔</li>
				</ul>
				
			</div>
		</div>
		<div id="btnList">
			<div><button id="btn01">创建一个"广州"节点,添加到#city下</button></div>
			<div><button id="btn02">将"广州"节点插入到#bj前面</button></div>
			<div><button id="btn03">使用"广州"节点替换#bj节点</button></div>
			<div><button id="btn04">删除#bj节点</button></div>
			<div><button id="btn05">读取#city内的HTML代码</button></div>
			<div><button id="btn06">设置#bj内的HTML代码</button></div>
			<div><button id="btn07">创建一个"广州"节点,添加到#city下</button></div>
		</div>
	</body>
</html>
```

**practice**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="ex_2_style/css.css" />
    <script>

        window.onload = function(){

            function delA() {
                    var tr = this.parentNode.parentNode; //表格的上级的上级删除上级
                var name = tr.children[0].innerHTML; //获取名字

                var flag = confirm("确认删除" + name + "吗?");
                if(flag) {
                    tr.parentNode.removeChild(tr);
                }

                /*
                * 点击超链接以后，超链接会跳转页面，这个是超链接的默认行为，
                * 	但是此时我们不希望出现默认行为，可以通过在响应函数的最后return false来取消默认行为
                */
                return false;
                };

            //获取所有的超链接
            var as  = document.getElementsByTagName("a");
            for(var i = 0 ; i< as.length;i++)
            {
                as[i].onclick = delA;
            }

            var bbtn = document.getElementById("addEmpButton");
            bbtn.onclick = function(){
                  
                //增加员工的操作
                var name = document.getElementById("empName").value;
                var email = document.getElementById("email").value;
                var salary = document.getElementById("salary").value;

                var tr = document.createElement("tr");
                tr.innerHTML = "<td>" +name +"</td>"+
                "<td>" +email +"</td>"+
                "<td>" +salary +"</td>"+
                "<td>" +"<a href='javascript:;'>Delete</a>" +"</td>";

                var a = tr.getElementsByTagName("a")[0];
                a.onclick = delA;

                var employeeTable =document.getElementById("employeeTable");
                var tbody = employeeTable.getElementsByTagName("tbody")[0];
                tbody.appendChild(tr);
            }

          

        };

    </script>

</head>
<body>
	<body>

		<table id="employeeTable">
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Salary</th>
				<th>&nbsp;</th>
			</tr>
			<tr>
				<td>Tom</td>
				<td>tom@tom.com</td>
				<td>5000</td>
				<td>
					<a href="javascript:;">Delete</a>
				</td>
			</tr>
			<tr>
				<td>Jerry</td>
				<td>jerry@sohu.com</td>
				<td>8000</td>
				<td>
					<a href="deleteEmp?id=002">Delete</a>
				</td>
			</tr>
			<tr>
				<td>Bob</td>
				<td>bob@tom.com</td>
				<td>10000</td>
				<td>
					<a href="deleteEmp?id=003">Delete</a>
				</td>
			</tr>
		</table>

		<div id="formDiv">

			<h4>添加新员工</h4>

			<table>
				<tr>
					<td class="word">name: </td>
					<td class="inp">
						<input type="text" name="empName" id="empName" />
					</td>
				</tr>
				<tr>
					<td class="word">email: </td>
					<td class="inp">
						<input type="text" name="email" id="email" />
					</td>
				</tr>
				<tr>
					<td class="word">salary: </td>
					<td class="inp">
						<input type="text" name="salary" id="salary" />
					</td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<button id="addEmpButton">
						Submit
					</button>
					</td>
				</tr>
			</table>

		</div>

	</body>

</html>
```



#### 8.6DOM对CSS的操作

##### 8.6.1 读取和修改内联样式

使用style属性来操作元素的内联样式
读取内联样式：
语法：元素.style.样式名
例子：
元素.style.width
元素.style.height
注意：**如果样式名中带有-，则需要将样式名修改为驼峰命名法将-去掉，然后后的字母改大写**
比如：backgroundcolor > backgroundColor
borderwidth > borderWidth
修改内联样式：
语法：元素.style.样式名 = 样式值
**通过style修改和读取的样式都是内联样式**，由于内联样式的优先级比较高，
所以我们通过JS来修改的样式，往往会立即生效，
**但是如果样式中设置了!important，则内联样式将不会生效。**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #inner{
            width: 100px;
            height: 100px;
            background-color: yellow;
            overflow: hidden;
        }
    </style>
    <script>
        window.onload = function(){

            var box1 = document.getElementById("inner");

            var btn01 = document.getElementById("btn01");
            btn01.onclick = function(){

                    box1.style.width = "500px";
                    box1.style.height =  "500px";
                    box1.style.backgroundColor = "red";
            }

            var btn02 = document.getElementById("btn02");
				btn02.onclick = function(){
					alert(box1.style.width); //只有先点击按钮1后才可以读取到内联样式css样式
				};
        };
    </script>
</head>
<body>
    <button id= "btn01" >按钮1</button> <button id="btn02">按钮2</button>

    <br /><br />

    <div id= "inner" >
    </div>
</body>
</html>
```



##### 8.6.2 读取元素的当前样式

正常浏览器
**使用getComputedStyle()**
这个方法是window对象的方法，可以返回一个对象，这个对象中保存着当前元素生效样式
参数：
1.要获取样式的元素
2.可以传递一个伪元素，一般传null
例子：
获取元素的宽度
getComputedStyle(box , null)[“width”];
通过该方法读取到样式都是只读的不能修改

IE8
**使用currentStyle**
语法：
元素.currentStyle.样式名
例子：
box.currentStyle[“width”]
通过这个属性读取到的样式是只读的不能修改

**实现兼容性**

//对象.属性不存在，不会报错，如果直接寻找对象，（当前作用域到全局作用域）找不到会报错

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			
			#box1{
				width: 100px;
				height: 100px;
				background-color: yellow;
			}
			
		</style>
		
		<script type="text/javascript">
			
			window.onload = function(){
				//点击按钮以后读取box1的样式
				var box1 = document.getElementById("box1");
				var btn01 = document.getElementById("btn01");
				btn01.onclick = function(){
					var w = getStyle(box1,"width");
					alert(w);
				};
				
			};
			
			/*
			 * 定义一个函数，用来获取指定元素的当前的样式
			 * 参数：
			 * 		obj 要获取样式的元素
			 * 		name 要获取的样式名
			 */
			
			function getStyle(obj , name){
				
				if(window.getComputedStyle){
					//正常浏览器的方式，具有getComputedStyle()方法
					return getComputedStyle(obj , null)[name];
				}else{
					//IE8的方式，没有getComputedStyle()方法
					return obj.currentStyle[name];
				}
				//return window.getComputedStyle?getComputedStyle(obj , null)[name]:obj.currentStyle[name];	
			}
		</script>
	</head>
	<body>
		<button id="btn01">点我一下</button>
		<br /><br />
		<div id="box1" ></div>
	</body>
</html>

```

##### 8.6.2 其他的样式相关的属性

注意：以下样式都是只读的,未指明偏移量都是相对于当前窗口左上角

clientHeight : 元素的可见高度，包括元素的**内容区和内边距**的高度
clientWidth : 元素的可见宽度，包括元素的**内容区和内边距**的宽度
offsetHeight : 整个元素的高度，包括**内容区、内边距、边框**
offfsetWidth : 整个元素的宽度，包括内容区、内边距、边框
offsetParent : 当前元素的定位父元素
离他最近的开启了定位的祖先元素，如果所有的元素都没有开启定位，则返回body
offsetLeft
offsetTop
当前元素和定位父元素之间的偏移量
offsetLeft水平偏移量 offsetTop垂直偏移量

scrollHeight
scrollWidth
获取元素滚动区域的高度和宽度

scrollTop
scrollLeft
获取元素垂直和水平滚动条滚动的距离

判断滚动条是否滚动到底
**垂直滚动条 : scrollHeight -scrollTop = clientHeight**

**水平滚动 : scrollWidth -scrollLeft = clientWidth**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			
			#box1{
				width: 100px;
				height: 100px;
				background-color: red;
				padding: 10px;
				border: 10px solid yellow;
			}
			
			
			#box2{
				padding: 100px;
				background-color: #bfa;
			}
			
			#box4{
				width: 200px;
				height: 300px;
				background-color: #bfa;
				overflow: auto;
			}
			
			#box5{
				width: 450px;
				height: 600px;
				background-color: yellow;
			}
			
		</style>
		<script type="text/javascript">
			
			window.onload = function(){
				var box1 = document.getElementById("box1");
				var btn01 = document.getElementById("btn01");
				var box4 = document.getElementById("box4");
				
				btn01.onclick = function(){
					
					// alert(box1.clientWidth); //120
					// alert(box1.clientHeight); //120
					// alert(box1.offsetWidth); //140
					// var op = box1.offsetParent;
					// alert(op.id);  //box2
					// alert(box1.offsetLeft); //100
					
					/*
					 * scrollWidth
					 * scrollHeight
					 * 	- 可以获取元素整个滚动区域的宽度和高度
					 */
					alert(box4.clientHeight);   //283
					alert(box4.scrollWidth);	//450
					alert(box4.scrollLeft);//0
					alert(box4.scrollTop);//0

					alert(box4.scrollHeight - box4.scrollTop); // 283
					
				};
				
			};
			
			
		</script>
	</head>
	<body id="body">
		<button id="btn01">点我一下</button>
		<br /><br />
		
		 <div id="box4">
		 	<div id="box5"></div>
		 </div>

		<br /><br />
		
		<div id="box3">
			<div id="box2" style="position: relative;">
				<div id="box1"></div>
			</div>
		</div>
		
		
	</body>
</html>

```
