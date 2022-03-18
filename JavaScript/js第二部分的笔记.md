##  JavaScript学习笔记（第二部分）总共四部分



### 4 对象(Object)

字符串String、数值Number、布尔值Boolean、空值Null、未定义Undefined是基本的数据类型，这些数据都是单一的值，之间是不存在关联的。

对象(Object)是js中的引用数据类型,**对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性**
使用typeof检查一个对象时，会返回object

```html
    <script>
        // 新建一个对象用new关键字
        var obj = new Object();
        console.log(obj);   //Object
        console.log(typeof obj); //object
    </script>
```

#### 4.1 对象的分类

1. 内建对象
   \- 由ES标准中定义的对象，在任何的ES的实现中都可以使用
   \- 比如：Math String Number Boolean Function Object….

2. 宿主对象
   \- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
   \- 比如 BOM DOM

3. 自定义对象

   由开发人员自定义的对象

介绍创建对象的两种方式：

方式一：使用new关键字

```html
	<script>
        var obj  = new Object();
        obj.name = "张三";
        console.log(obj.name); //张三
        console.log(typeof obj); //object
    </script>
```

方式二：使用{}

```html
	<script>
        var obj = {name:"张三"};
        console.log(obj.name);  //张三
        console.log(typeof obj);//object
    </script>
```

**向对象中添加属性的两种方式：**

语法1:  对象.属性名 = 属性值;

```
	<script>
        var obj  = new Object();
        obj.name = "张三";
        console.log(obj.name); //张三
        console.log(typeof obj); //object
    </script>
```

**语法2： 对象[“属性名”] = 属性值;** //这种方式能够使用特殊的属性名   建议使用这一种方式

```html
  <script>
        var obj  = new Object();
        obj[213] = "12313123&^*^#$%#";
        console.log(obj[213]);   //12313123&^*^#$%#
        console.log(typeof obj); //object
    </script>
```

注意：**对象的属性名没有任何要求，不需要遵守标识符的规范，但是在开发中，尽量按照标识符的要求去写,属性值也可以任意的数据类型。。**

**读取对象的方式：**

语法1：对象.属性名
语法2：对象[“属性名”] //“属性名”可以使字符串常量，也可以是字符串变量
如果读取一个对象中没有的属性，它不会报错，而是返回一个undefined

```html
    <script>
        var obj  = new Object();
        obj.name = "张三";
        console.log(obj.name); //张三
        console.log(obj["name"]); //张三
        console.log(obj[name]); //undefined
        console.log(typeof obj); //object
    </script>
```

**修改对象的属性值：**重新赋值即可    语法：对象.属性名 = 新值

**删除对象的属性值**：语法： delete  对象加属性名

```html
    <script>
        var obj  = new Object();
        obj.name = "张三";
        obj.name = "李四"
        console.log(obj.name); //李四
        delete obj.name;
        console.log(obj["name"]); //undefined
    </script>
```

注意：对象中的属性值也可以是对象。

```html
    <script>
        var obj  = new Object();
        obj.name = "张三";
        var obj1  = new Object();
        obj1.name = "李四";
        obj.value = obj1;
        console.log(obj.value.name); //李四
        console.log(typeof obj.value); //object
    </script>
```

#### 4.2 遍历

**使用in检查对象中是否含有指定属性**
语法：”属性名” in 对象
如果在对象中含有该属性，则返回true
如果没有则返回false

```html
	<script>
        var obj = {name:"张三"};
        // 检查obj对象中是否由name属性名
        console.log("name" in obj); //true
    </script>
```

```html
    <script>
        var obj = {name:"张三",age:"1231",gander:"男"};
        // 检查obj对象中是否由name属性名
        for(var i in obj)
        {
            console.log(i, ":",obj[i]);  //name : 张三  //age : 1231  //gander : 男
        } 
    </script>
```

**使用对象字面量，在创建对象时直接向对象中添加属性**

```html
var obj = {  
    属性名:属性值,  
    属性名:属性值,  
    属性名:属性值,  
    属性名:属性值  
}
```

**基本数据类型的数据，变量是直接保存的它的值。**
变量与变量之间是互相独立的，修改一个变量不会影响其他的变量。

**引用数据类型的数据，变量是保存的对象的引用（内存地址）。**
如果多个变量指向的是同一个对象，此时修改一个变量的属性，会影响其他的变量。
比较两个变量时，对于基本数据类型，比较的就是值，
对于引用数据类型比较的是地址，地址相同才相同

```html
    <script>
        // 操作的是同一块内存
        var obj = {name:"张三"};
        var obj1 = obj;
        console.log(obj == obj1); //true
        console.log(obj1.name);//张三
        obj1 = null;
        console.log(obj.name);//张三
    </script>
```



#### 4.3 函数

函数的本质也是一个对象，函数中可以封装一些功能代码，在需要的时候可以执行这些功能(代码)，函数可以保存一些代码在需要的时候进行调用

创建一个函数

```html
    <script>
        function fun(){
            console.log("写的第一个函数");
        }

        fun();//调用函数
        console.log(typeof fun); //function
        console.log(fun);//ƒ fun(){ console.log("写的第一个函数");     }   
    </script>
```

函数的声明格式：

```html
function 函数名([形参1,形参2...形参N]){  
语句...  
}
```

函数的表达式：

```html
var 函数名 = function([形参1,形参2...形参N]){  
语句...  
};
```

调用函数
语法：函数对象([实参1,实参2…实参N]);
fun() sum() alert() Number() parseInt()
当我们调用函数时，函数中封装的代码会按照编写的顺序执行

```html
	<script>
        var fun = function(a){
            console.log("执行语句一");
            console.log("执行语句二");
            console.log(a+"a");
        }
        //调用函数
        fun(10);  // 执行语句一 执行语句二  10a
    </script>
```

**立即执行函数**

函数定义完，立即被调用，这种函数叫做立即执行函数
立即执行函数往往只会执行一次

```html
    <script>
        (function (){
            console.log("马上被执行");
        })() //马上被执行
    </script>
```

**遍历对象**

```html
 <script>
        var obj ={name:"小飞",age:18,gander:"男"}
        for(var i in obj)
        {
            console.log("property：name ="+i+"value="+obj[i]+"<br/>" );//property：name =namevalue=小飞<br/> /
        }                                                               //property：name =agevalue=18<br/>///property：name 
    </script>
```

**形参和实参**
形参：形式参数
定义函数时，可以在()中定义一个或多个形参，形参之间使用,隔开
定义形参就相当于在函数内声明了对应的变量但是并不赋值，
形参会在调用时才赋值。



**实参：实际参数**
调用函数时，可以在()传递实参，传递的实参会赋值给对应的形参,
调用函数时JS解析器不会检查实参的类型和个数，可以传递任意数据类型的值。
**如果实参的数量大于形参，多余实参将不会赋值，**
**如果实参的数量小于形参，则没有对应实参的形参将会赋值undefined**

```html
 		<script>
            function add(a,b)
            {
                console.log(a+b);
            }
            add(); //NaN
            add(10,20);//30
            add("adad","你哈");//adad你哈
            add(1);//NaN
            add(true,false);//1
            add(10,23,13,43,34);//33
        </script>
```

**返回值，就是函数执行的结果。**
使用return 来设置函数的返回值。
语法：return 值;
该值就会成为函数的返回值，可以通过一个变量来接收返回值
return后边的代码都不会执行，一旦执行到return语句时，函数将会立刻退出。
return后可以跟任意类型的值，可以是基本数据类型，也可以是一个对象。
**如果return后不跟值，或者是不写return则函数默认返回undefined。**

```html
		<script>
            function add(a,b)
            {
                return a+b;
            }
            function func()
            {
                return;
                console.log("这句话不会再输出了");
            }

            var sum = add(10,20);
            console.log(func());//undefined
            console.log(sum);//30
        </script>
```

**参数，函数的实参也可以是任意的数据类型。**

```html
		<script>
            var obj = {name:"小飞",age:123};
            function input(obj)
            {
                console.log(obj.name + "" + obj.age);
                var tar = new Object()
                return tar;
            }

            var tmp = input(obj);//小飞123
            console.log(typeof tmp); //object
            console.log(input);//输出整个的函数的代码块
        </script>
```

注意：input(obj)表示调用函数 input表示函数对象

可以在函数的内部再声明一个函数，函数也可以作为返回值进行返回，操作其实和对象差不多。

**方法（method）**
可以将一个函数设置为一个对象的属性，
当一个对象的属性是一个函数时，
我们称这个函数是该对象的方法。
对象.方法名();
函数名()

```html
    <script>
        function say(){
            console.log("我被调用了");
        }
        var obj = {name:"asd",func:say}
        obj.func();//我被调用了
        console.log(typeof obj.func); // function
    </script>
```

**函数的属性和方法**

call()
apply()
**这两个方法都是函数对象的方法需要通过函数对象来调用**
通过两个方法可以直接调用函数，并且**可以通过第一个实参来指定函数中this**
不同的是call是直接传递函数的实参而apply需要将实参封装到一个数组中传递

```html
    <script>
        function add (x, y) 
    { 
        console.log (x + y);
    } 
    function minus (x, y) 
    { 
        console.log (x - y); 
    } 
    add.call (minus , 1, 1);    //2
    //这个例子中的意思就是用 add 来替换 minus ，add.call(minus ,1,1) == add(1,1) ，所以运行结果为：console.log (2); // 注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。
    //A.call( B,x,y )：就是把A的函数放到B中运行，x 和 y 是A方法的参数。

    </script>
```

**arguments**
arguments和this类似，都是函数中的隐含的参数
arguments是一个类数组元素，它用来封装函数执行过程中的实参
所以即使不定义形参，也可以通过arguments来使用实参
**arguments中有一个属性callee表示当前执行的函数对象**

```html
 <script>
        function myfunc1(){
            this.name = 'Lee';
            this.myTxt = function(txt) {
            console.log( 'i am',txt );
            }
        }

        function myfunc2(){
             myfunc1.call(this);
        }

        var myfunc3 = new myfunc2();
        myfunc3.myTxt('Geing'); // i am Geing
        console.log (myfunc3.name);	// Lee
    </script>
```

this（调用函数的那个对象）
this是函数的上下文对象，根据函数的调用方式不同会执向不同的对象

1. 以函数的形式调用时，this是window
2. 以方法的形式调用时，this是调用方法的对象
3. 以构造函数的形式调用时，this是新建的那个对象
4. 使用call和apply调用时，this是指定的那个对象
5. 在全局作用域中this代表window



**枚举对象中的属性**

```html
    <script>
        var obj = {name :"1231",age :12};
        for(var i in obj)
        {
            console.log("水属性名字：" + i);
            console.log("属性值:" + obj[i])// 水属性名字：name  属性值:1231 水属性名字：age 属性值:12
    </script>
```

#### 4.4 作用域

作用域简单来说就是一个变量的作用范围。
在JS中作用域分成两种：

**1.全局作用域**

直接在script标签中编写的代码都运行在全局作用域中
**全局作用域在打开页面时创建，在页面关闭时销毁。**

全局作用域中有一个全局对象window，window对象由浏览器提供，
可以在页面中直接使用，它代表的是整个的浏览器的窗口。

**在全局作用域中创建的变量都会作为window对象的属性保存**
在全局作用域中创建的函数都会作为window对象的方法保存
在全局作用域中创建的变量和函数可以在页面的任意位置访问。

在函数作用域中也可以访问到全局作用域的变量。
尽量不要在全局中创建变量

```html
 <script>
        a = 123; //a是对象window的属性成员
        console.log(window.a);  // 123
        function func(){
            console.log("我被调用了");
        }
        window.func(); //我被调用了
        //变量的提前声明
        console.log(sum); //undefined
        var sum = 100;
    </script>
```

2.函数作用域

函数作用域是函数执行时创建的作用域，每次调用函数都会创建一个新的函数作用域。
函数作用域在函数执行时创建，在函数执行结束时销毁。
在函数作用域中创建的变量，不能在全局中访问。
当在函数作用域中使用一个变量时，它会先在自身作用域中寻找，
如果找到了则直接使用，如果没有找到则到上一级作用域中寻找，
如果找到了则使用，找不到则继续向上找，一直会

**变量的声明提前**
在全局作用域中，使用**var关键字声明的变量会在所有的代码执行之前被声明，但是不会赋值。**
所以我们可以在变量声明前使用变量。但是不使用var关键字声明的变量不会被声明提前。
在函数作用域中，也具有该特性，使用var关键字声明的变量会在函数所有的代码执行前被声明，
如果没有使用var关键字声明变量，则变量会变成全局变量

**函数的声明提前**
在全局作用域中，使用**函数声明创建的函数（function fun(){}）,会在所有的代码执行之前被创建**，
也就是我们可以在函数声明前去调用函数，但是使用函数表达式(var fun = function(){})创建的函数没有该特性
在函数作用域中，使用函数声明创建的函数，会在所有的函数中的代码执行之前就被创建好了。

```html
    <script>
        window.func1();
        // window.func2(); error

        // 函数的提前声明
        function  func1(){  //提前被创建
            console.log("函数提前声明了");
        }

        var func2= function(){  //不会提前被创建
            console.log("函数没有提前声明了");
        }
    </script>
```

```html
 	<script>
        var c= 100;
        function func1(){
            console.log(c);
            var c= 200;
        }
        func1();  //undefined
    </script>
 	 <script>
        var c= 100;
        function func1(){
            console.log(c);
            c= 200;  //没有使用var关键字就会默认用全局的变量 
        }
        func1();  //100
        console.log(c); //200
    </script>

	<script>
        // 定义了形参就相当于声明了变量
        var c= 100;
        function func1(c){
            console.log(c);
        }
        func1();  //undefined
        func1(10) //10
    </script>
```

**练习**

```html
<script>
        var a = 123;
        function fun()
        {
            alert(a); 
        }
        fun(); //123 
    </script>

     <script>
        var a = 123;
        function fun()
        {
            alert(a); 
            var a = 2313;
        }
        fun(); //undefined
        alert(a);//123
    </script>

       <script>
        var a = 123;
        function fun()
        {
            alert(a);
            a = 2313;
        }
        fun(); //123 
        alert(a); //2313
    </script>

    <script>
        var a = 123;
        function fun(a)
        {
            alert(a);
            a = 2313;
        }
        fun(1234); //1234
        alert(a);//2313
    </script>
```

#### 4.5 this（上下文对象）

我们每次调用函数时，解析器都会将一个上下文对象作为隐含的参数传递进函数。
使用this来引用上下文对象，根据函数的调用形式不同，this的值也不同。

指向当前对象

this的不同的情况：
1.以函数的形式调用时，this是window
2.以方法的形式调用时，this就是调用方法的对象
3.以构造函数的形式调用时，this就是新创建的对象

```
 	<script>
        var a =10;
        function func(){
            console.log(this.a);
        }
        var obj ={ a:10233,fun:func }
        obj.fun();  //10
        func();     //10233

        function Person(){
             this.name = "小红";
            console.log(this.name); 
        }

        var human = new Person();//小红
    </script>
```



#### 4.6 构造函数

构造函数是专门用来创建对象的函数
**一个构造函数我们也可以称为一个类**
通过一个构造函数创建的对象，我们称该对象时这个构造函数的实例
通过同一个构造函数创建的对象，我们称为一类对象
构造函数就是一个普通的函数，只是他的调用方式不同，
如果直接调用，它就是一个普通函数
如果使用new来调用，则它就是一个构造函数

```html
	<script>
        var obj = {
            name:"小飞",
            age:124,
            gander:"男",
            func:function(){
                console.log(this.name);
            }
        }
        obj.func();//小飞

        function Person(){
             this.name = "小红";
            console.log(this.name); 
        }

        var human = new Person(); //小红
        //human 是Person对象的实例
        Person();//小红
    </script>
```

```
  <script>
        function Person(name , age , gender){  
            this.name = name;  
            this.age = age;  
            this.gender = gender;  
            this.sayName = function(){  
                alert(this.name);  
            };  
        }

        var human = new Person("XIAOHONG ",18,"NAN");
        human.func();
    </script>
```

构造函数的执行流程：

1. 创建一个新的对象
2. 将新的对象作为函数的上下文对象（this）
3. 执行函数中的代码
4. 将新建的对象返回

**instanceof 用来检查一个对象是否是一个类的实例**
语法：对象 instanceof 构造函数
如果该对象时构造函数的实例，则返回true，否则返回false
**Object是所有对象的祖先，所以任何对象和Object做instanceof都会返回true**

```html

    <script>
        function Person(name , age , gender){  
            this.name = name;  
            this.age = age;  
            this.gender = gender;  
            this.sayName = function(){  
                alert(this.name);  
            };  
        }

        var human1 =new Person("XIAOHONG ",18,"NAN");
         console.log(human1 instanceof Person); //true
    </script>
```

**工厂方法**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
          function Person(name , age , gender){  
            this.name = name;  
            this.age = age;  
            this.gender = gender;  
            this.sayName = function(){  
                alert(this.name);  
            };  
        }

        function Zoom(name , age , gender){  
            this.name = name;  
            this.age = age;  
            this.gender = gender;  
            this.sayName = function(){  
                alert(this.name);  
            };  
        }

         function factroyCreate(func,name , age , gender){  
             var obj = new func(name , age , gender);
             return obj;
         }

         var obj_1 = factroyCreate(Person,"小红",19,"男");
         var obj_2 = factroyCreate(Person,"小马",19,"男");
         var obj_3 = factroyCreate(Zoom,"狗",3,"雄");
         console.log(obj_1); //Person
         console.log(obj_2); //Person
         console.log(obj_3); //Zoom
        
    </script>
    
</head>
<body>
    
</body>
</html>
```

我们发现每次创建新的对象的时候就会创建一个新的放啊，执行一万次就有一万个新的方法，但是这些方法是相同的，浪费了内存。

```html
<script>
		//我们发现这些方法不是公用的
        function Person(name ,age , gander)
        {
            this.name = name;
            this.age =age;
            this.gander = gander;
            this.func = function(){
                console.log(this.name);
            }
        }

        var obj = new Person("小黑",13,1);
        var obj1 = new Person("小红",12,0);

        console.log(obj1.func == obj.func); //false
    </script>
```

```html
<script>
		//改进版本将函数声明成全局的函数，但是这样也不合理，多人开发会有相同的命名情况等等
    	//原型模式很好的解决了这个问题
        function Person(name ,age , gander)
        {
            this.name = name;
            this.age =age;
            this.gander = gander;
            this.func =fun; 
        }
        
		function fun(){
                console.log(this.name);
            }
        var obj = new Person("小黑",13,1);
        var obj1 = new Person("小红",12,0);

        console.log(obj1.func == obj.func); //false
    </script>
```

#### 4.7 原型对象(prototype）

创建一个函数以后，**解析器都会默认在函数中添加一个数prototype**
prototype属性指向的是一个对象，这个对象我们称为原型对象。
当函数作为构造函数使用，**它所创建的对象中都会有一个隐含的属性执行该原型对象。**

```html
//这个隐含的属性可以通过对象.__proto__来访问
```

```html
   <script>
        function fun(){

        }

        function MyClass(){

        }
        var obj = new MyClass();
        console.log(obj.__proto__);  //Object
        console.log(typeof obj.__proto__) //object
        console.log(fun.prototype);  //Object
        console.log(typeof fun.prototype) //object
    </script>
```

 原型的空间是改对象和实例所共享的内存块：

```html
 <script>
        function MyClass(){

        }
        MyClass.prototype.a = 120;
        var obj = new MyClass();
        var obj1 = new MyClass();
        console.log(obj.__proto__.a);  //120
        console.log(obj1.__proto__.a) //120
    </script>
```

**原型对象就相当于一个公共的区域，凡是通过同一个构造函数创建的对象他们通常都可以访问到相同的原型对象。**
我们可以将对象中共有的属性和方法统一添加到原型对象中，
这样我们只需要添加一次，就可以使所有的对象都可以使用。

当我们去访问对象的一个属性或调用对象的一个方法时，它会先自身中寻找，
如果在自身中找到了，则直接使用。
如果没有找到，则去原型对象中寻找，如果找到了则使用，
**如果没有找到，则去原型的原型中寻找，**依此类推。直到找到Object的原型为止，Object的原型的原型为null，

如果依然没有找到则返回undefined。

```html
<script>
        function MyClass(){

        }
        MyClass.prototype.a = 120;
        var obj = new MyClass();
        obj.a = 1000;
        var obj1 = new MyClass();
        console.log(obj.a);  //1000
        console.log(obj1.a) //120
        console.log(obj1.b) //undefined
    </script>
```



**hasOwnProperty()**
这个方法可以用来检查**对象自身中**是否含有某个属性
语法：对象.hasOwnProperty(“属性名”)

```html
   <script>
        function MyClass(){

        }
        MyClass.prototype.a = 120;
        var obj = new MyClass();
        obj.a = 1000;
        var obj1 = new MyClass();
        console.log(obj.hasOwnProperty("a"));  //true
        console.log(obj1.hasOwnProperty("a")) //false
        console.log("obj" in MyClass);//false
        // hasOwnProperty这是函数在原型的原型中
        console.log(obj.__proto__.hasOwnProperty("hasOwnProperty"));//false
        console.log(obj.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));//true
    </script>
```

#### 4.8 toString方法

当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值

如果我们希望在输出对象时不输出[object Object]，可以为对象添加一个toString()方法

```html
   <script>
        function Person(name , age , gender){  
            this.name = name;  
            this.age = age;  
            this.gender = gender;  
            this.sayName = function(){  
                alert(this.name);  
            };  
        }

        Person.prototype.toString = function(){  
            return "Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]";  
        };

        var obj = new Person("小工",15,"男");
        var obj1 = new Person("小宏",15,"男");
        console.log(obj.toString());
        console.log(obj1.toString());
    </script>
```

#### 4.9 垃圾回收

就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾
这些垃圾积攒过多以后，会导致程序运行的速度过慢，
所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾
当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，
此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，
所以这种垃圾必须进行清理。
在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，
我们不需要也不能进行垃圾回收的操作
我们需要做的只是要将不再使用的对象设置null即可

概括：就是当我们没有实例去操作那块内存了，这个垃圾对象就被回收了。

### 5 数组

#### 5.1数组的操作

数组其实也是一个对象，它和我们的普通的对象的功能类似，用来存储一些值得，不同得是属性名，数组使用索引来操作元素，数组的索引是从零开始得，

数组得存储性能要比常规得对象要好，我们在开发中会经常得使用到。

创建数组的两种方式：

```html
 	<script>
        var arr =new Array(1,123,43);
        console.log(arr);  //1,123,43依次输出
        console.log(typeof arr); //object
    </script>
    <script>
        var arr = [10,122,1231];
        console.log(arr);//10,122,1231依次输出
        console.log(typeof arr); //object
    </script>
```

向数组中添加元素语法：数组对象[索引] = 值; 或者调用push方法，每次向最后添加一个元素，

```html
    <script>
        var arr = [];
        arr[0] =10;
        arr.push(100);
        console.log(arr);  // 10 100
    </script>
```

创建数组时直接添加元素语法：var arr = [元素1,元素2....元素N];

```
 <script>
        var arr = [10,122,1231];
        console.log(arr);//10,122,1231依次输出
        console.log(typeof arr); //object
    </script>
```

读取数组中得元素如果不存在直接返回undefined;

```html
    <script>
        var arr = [10,122,1231];
        console.log(arr[10]);//undefined
    </script>
```

获取和修改数组的长度
使用length属性来操作数组的长度
获取长度：数组.length
length获取到的是数组的最大索引+1
对于连续的数组，length获取到的就是数组中元素的个数
修改数组的长度
数组.length = 新长度

```

    <script>
        var arr = [10,122,1231];
        console.log(arr.length);//3

        arr[32] = 20;
        console.log(arr.length);//33

        arr.length =1;
        console.log(arr); //只有一个元素了 10
    </script>
```

如果修改后的length大于原长度，则多出的部分会空出来
如果修改后的length小于原长度，则原数组中多出的元素会被删除
向数组的最后添加元素：数组[数组.length] = 值;

```html
    <script>
        var arr = [10,122,1231];
        console.log(arr);   //10,122,1231
        arr[arr.length] = 10;
        arr[arr.length] = 10234;
        console.log(arr.length);//5
        console.log(arr);   //10,122,1231 10 10234

        // arr.length =1;  // 改变了元素组得值
        // console.log(arr); //只有一个元素了 10
    </script>
```

创建一个数组长度为10的代码如下：

```
    <script>
        var arr = new Array(10);
        console.log(arr.length);  //10 
        var arr1 = [10];
        console.log(arr1.length); //1
    </script>
```

注意：数组里面存放的数据类型可以是任意的，可以是函数、对象、基本类型。

#### 5.2 数组的方法



| functionName | function                                                     | usage                                   |
| :----------- | :----------------------------------------------------------- | :-------------------------------------- |
| push()       | 用来向数组的末尾添加一个或多个元素，并返回数组新的长度       | 语法：数组.push(元素1,元素2,元素N)pop() |
| pop()        | 用来删除数组的最后一个元素，并返回被删除的元素               |                                         |
| unshift()    | 向数组的开头添加一个或多个元素，并返回数组的新的长度         |                                         |
| shift()      | 删除数组的开头的一个元素，并返回被删除的元素                 |                                         |
| reverse()    | 可以用来反转一个数组，它会对原数组产生影响                   |                                         |
| concat()     | 可以连接两个或多个数组，它不会影响原数组，而是新数组作为返回值返回 |                                         |

```html
//push()方法的测试
	<script>
        var arr = [23,1231,213,3123];
        console.log(arr.length);  //4
        arr.push(2420);
        console.log(arr.length);  //5
        var tmp = arr.push(2420,"dadad",undefined,false);
        console.log(tmp); //9
    </script>
```

```html
 	//pop()方法的测试
	 <script>
        var arr = [23,1231,213,3123];
        var tmp = arr.pop();
        console.log(tmp);  //3123
        console.log(arr.length);  //3
    </script>
```

```html
	// unshift函数的测试
<script>
        var arr = [23,1231,213,3123];
        var tmp = arr.unshift(10,15,454,454);
        console.log(tmp);  //8
        console.log(arr);  //10,15,454,454,23,1231,213,3123
    </script>
```

```html
   //shift函数的测试
	<script>
        var arr = [23,1231,213,3123];
        var tmp = arr.shift();
        console.log(tmp);  //23
        console.log(arr);  //1231,213,3123
    </script>
```

```
 	//reverse()函数的测试
 	<script>
         var arr = [23,1231,213,3123];
         var tmp = arr.reverse();
         console.log(tmp);  //3123,213,1231,23
         console.log(arr);  //3123,213,1231,23
    </script>
```

```html
    <script>
        var arr = [23,1231,213,3123];
        var arr22 = [23,1231,213,3123];
        var tmp = arr.concat(arr22);
        console.log(tmp);
        console.log(arr);
    </script>
```

##### 5.2.1 **slice(sart,[end])**

可以从一个数组中截取指定的元素  
该方法不会影响原数组，而是将截取到的内容封装为一个新的数组并返回  
参数：  

1. 截取开始位置的索引（包括开始位置） 
2. 截取结束位置的索引（不包括结束位置）  
           第二个参数可以省略不写，如果不写则一直截取到最后  
             参数可以传递一个负值，如果是负值，则从后往前数  

```html
<script>
        var arr = [123,2131,231,3123,3123,131];
        var tmp = arr.slice(3);
        console.log(tmp); //3123,3123,131
        console.log(arr);//123,2131,231,3123,3123,131
    </script>
    <script>
        var arr = [123,2131,231,3123,3123,131];
        var tmp = arr.slice(3,4);
        console.log(tmp);//3123
        console.log(arr);//123,2131,231,3123,3123,131
    </script>
```

##### 5.2.2 **splice()**

可以用来删除数组中指定元素，并使用新的元素替换  
   该方法会将删除的元素封装到新数组中返回  
参数：  
   1.删除开始位置的索引  
   2.删除的个数  
   3.三个以后，都是替换的元素，这些元素将会插入到开始位置索引的前边  

```html
     <script>
        var arr = [123,2131,231,3123,3123,131];
        var tmp = arr.splice(3,2,12313,123132);
        console.log(tmp); //3123,3123
        console.log(arr);//123,2131,231,3,2,12313,123132,131
    </script>
```

##### 5.3.3 **join([splitor])**

可以将一个数组转换为一个字符串
参数：
	需要一个字符串作为参数，这个字符串将会作为连接符来连接数组中的元素
	如果不指定连接符则默认使用,

```html
  <script>
        var arr = [123,2131,231,3123,3123,131];
        var tmp = arr.join("");
        console.log(tmp); //123213123131233123131
        var tmp = arr.join("-");
        console.log(tmp); //123-2131-231-3123-3123-131
    </script>
```

##### 5.3.4 **sort()**

可以对一个数组中的内容进行排序，默认是按照Unicode编码进行排序
调用以后，会直接修改原数组。
可以自己指定排序的规则，需要一个回调函数作为参数：

```html
<script>
        var arr = ["a","d", "g", "f","h"];
        arr.sort();
        console.log(arr);
        // 0: "a"
        // 1: "d"
        // 2: "f"
        // 3: "g"
        // 4: "h"
    </script>
```

我们可以自己来指定排序的规则
我们可以在sort()添加一个回调函数，来指定排序规则，
回调函数中需要定义两个形参,
浏览器将会分别使用数组中的元素作为实参去调用回调函数
使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边

- 浏览器会根据回调函数的返回值来决定元素的顺序，
  如果返回一个大于0的值，则元素会交换位置
  如果返回一个小于0的值，则元素位置不变
  如果返回一个0，则认为两个元素相等，也不交换位置
- 如果需要升序排列，则返回 a-b
  如果需要降序排列，则返回b-a

```html
   <script>
         var arr = [123,2131,231,3123,3123,131];
         var tmp = arr.sort(function(a,b){
            return a- b;
         });

         console.log(tmp);
         console.log(arr);
         
        // 0: 123
        // 1: 131
        // 2: 231
        // 3: 2131
        // 4: 3123
        // 5: 3123
    </script>
```

#### 5.3**遍历数组**

遍历数组就是将数组中元素都获取到
一般情况我们都是使用for循环来遍历数组

```html
for(var i=0 ; i<数组.length ; i++){  
    //数组[i]  
}
```

使用forEach()方法来遍历数组**（不兼容IE8）**

```html
数组.forEach(function(value , index , obj){  
  
});
```

forEach()方法需要一个回调函数作为参数，
数组中有几个元素，回调函数就会被调用几次，
每次调用时，都会将遍历到的信息以实参的形式传递进来，
我们可以定义形参来获取这些信息。
value:正在遍历的元素
index:正在遍历元素的索引
obj:被遍历对象

```html
   <script>
        var arr = [[231,1231,3,312,3,13],[1313213,13123,1321312],2,31,3123,1];
        arr.forEach(function(value,index,arr){
            console.log(value);
            console.log(index);
            console.log(arr);
        });
    </script>
```

call()
apply()
**这两个方法都是函数对象的方法需要通过函数对象来调用**
通过两个方法可以直接调用函数，并且**可以通过第一个实参来指定函数中this**
不同的是call是直接传递函数的实参而apply需要将实参封装到一个数组中传递

```html
     <script>
        var func = function()
        {
            console.log(arguments[0]);//231
            console.log(arguments[1]);//231
            console.log(arguments[2]);//4142
        }
        func(231,231,4142);
    </script>

    <script>
        var func = function()
        {
            console.log(this.name);
        }
        var obj ={name:"小红"};
        func.apply(obj);//小红
        // func.call(obj);//小红
        func(obj);//""
    </script>

    <script>
        function add (x, y) 
    { 
        console.log (x + y);
    } 
    function minus (x, y) 
    { 
        console.log (x - y); 
    } 
    add.call (minus , 1, 1);    //2
    //这个例子中的意思就是用 add 来替换 minus ，add.call(minus ,1,1) == add(1,1) ，所以运行结果为：console.log (2); // 注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。
    //A.call( B,x,y )：就是把A的函数放到B中运行，x 和 y 是A方法的参数。

    </script>
```

**arguments**
arguments和this类似，都是函数中的隐含的参数
arguments是一个类数组元素，它用来封装函数执行过程中的实参
所以即使不定义形参，也可以通过arguments来使用实参
**arguments中有一个属性callee表示当前执行的函数对象**

```html
     <script>
        var func = function()
        {
            console.log(arguments[0]);//231
            console.log(arguments[1]);//231
            console.log(arguments[2]);//4142
        }
        func(231,231,4142);
    </script>
```

练习1：数组去重

```html
	<script>
       var arr = [1, 3, 3, 4, 23,434,5, 5, 4]
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1)
                    j--;
                }       
            }
        }
        console.log("first", arr) //first [ 1, 3, 4, 23, 434, 5 ]
       
    </script> 

    <script>
        var arr = [1,2,32,2,23,32,43,5,23,23];
        var output = [];
        for(var i = 0; i < arr.length;i++)
        {
            var flag = true;
            for(var j = 0; j < output.length; j++){
               if(arr[i]==arr[j])
               {
                   flag=false;
               }
            }
            if(flag)
            {
                output.push(arr[i]);
            }
        }
        console.log(output);//[ 1, 2, 32, 23, 43, 5 ]
    </script>
```