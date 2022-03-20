---
title: JavaScript学习笔记（第四部分）总共四部分
date: 2022/3/20 22:30


---

##  JavaScript学习笔记（第四部分）总共四部分

### 9 事件

#### 9.1 事件对象

当响应函数被调用时，浏览器每次都会将一个事件对象作为实参传递进响应函数中，这个事件对象中封装了当前事件的相关信息，比如：鼠标的坐标，键盘的按键，鼠标的按键，滚轮的方向。。

可以在响应函数中定义一个形参，来使用事件对象，但是在IE8以下浏览器中事件对象没有做完实参传递，而是作为window对象的属性保存

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
           #box1{
                border: 1px solid black;
                width: 300px;
                height: 50px;
                margin-bottom: 10px;    
            }
            #box2{
                border: 1px solid black;
                width: 300px;
                height: 20px;
            }
    </style>
    <script>
        window.onload =function(){
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");

            box1.onmousemove = function(event){
                event  = event || window.event;

                var x = event.clientX;
                var y = event.clientY;

                box2.innerHTML ="x = "+x + " , y = "+y;
            };
        };  

    </script>
</head>
<body>
    <div id="box1"></div>
    <div id="box2"></div>
</body>
</html>
```

```html
//practice
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1{
            width: 90px;
            height: 100px;
            background-color: rebeccapurple;
            position: absolute;
        }
    </style>
    <script>
        window.onload = function(){
            var box1 = document.getElementById("box1");

            document.onmousemove = function(event){
                event = event || window.event;
                var st = document.body.scrollTop || document.documentElement.scrollTop;
			    var sl = document.body.scrollLeft || document.documentElement.scrollLeft;

                var left = event.clientX;
                var top = event.clientY;
                
                //设置div的偏移量
                box1.style.left = left + sl + "px";
                box1.style.top = top + st + "px";
            }
        }
    </script>
</head>
<body>
    <div id="box1">

    </div>
</body>
</html>
```

**获取到鼠标的坐标**
clientX和clientY
用于获取鼠标在当前的可见窗口的坐标
div的偏移量，是相对于整个页面的

pageX和pageY 可以获取鼠标相对于当前页面的坐标
但是这个两个属性在IE8中不支持，所以如果需要兼容IE8，则不要使用
var left = event.clientX;
var　top = event.clientY;

#### 9.2 事件的冒泡（Bubble）

事件的冒泡指的是事件向上传导，当后代元素上的事件被触发时，将会导致其祖先元素上的同类事件也会触发。
事件的冒泡大部分情况下都是有益的，如果需要取消冒泡，则需要使用事件对象来取消

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#box1{
				width: 200px;
				height: 200px;
				background-color: yellowgreen;
			}
			
			#s1{
				background-color: yellow;
			}
			
			
		</style>
		<script type="text/javascript">
			
			window.onload = function(){
				
				var s1 = document.getElementById("s1");
				s1.onclick = function(event){
					event = event || window.event;
					alert("我是span的单击响应函数");
					event.cancelBubble = true;
				};
				
				//为box1绑定一个单击响应函数
				var box1 = document.getElementById("box1");
				box1.onclick = function(event){
					event = event || window.event;
					alert("我是div的单击响应函数");
					
					event.cancelBubble = true;
				};
				
				//为body绑定一个单击响应函数
				document.body.onclick = function(){
					alert("我是body的单击响应函数");
				};
			};
			
			
		</script>
	</head>
	<body>
		
		<div id="box1">
			我是box1
			<span id="s1">我是span</span>
		</div>
		
	</body>
</html>

```

**可以将事件对象的cancelBubble设置为true，即可取消冒泡**

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
				/*
				 * 开启box1的绝对定位
				 */
				position: absolute;
			}
			
		</style>
		
		<script type="text/javascript">
			window.onload = function(){
				var box1 = document.getElementById("box1");
				//绑定鼠标移动事件
				document.onmousemove = function(event){
					
					event = event || window.event;
					var st = document.body.scrollTop || document.documentElement.scrollTop;
					var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
					var left = event.clientX;
					var　top = event.clientY;
					
					//设置div的偏移量
					box1.style.left = left + sl + "px";
					box1.style.top = top + st + "px";
					
				};
				
				var box2 = document.getElementById("box2");
				box2.onmousemove = function(event){
					event = event || window.event;
					
					event.cancelBubble = true;  //冒泡是取消的
				};	
			};
			
			
		</script>
	</head>
	<body style="height: 1000px;width: 2000px;">
		<div id="box2" style="width: 500px; height: 500px; background-color: #bfa;"></div>
		<div id="box1"></div>
	</body>
</html>

```

#### 9.3 事件的委派

指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。

事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能

我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的
我们可以尝试将其绑定给元素的共同的祖先元素

**target** : event中的target表示的触发事件的对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function(){
				
				var u1 = document.getElementById("u1");
				var btn01 = document.getElementById("btn01");

				btn01.onclick = function(){
					//创建一个li
					var li = document.createElement("li");
					li.innerHTML = "<a href='javascript:;' class='link'>新建的超链接</a>";
					
					//将li添加到ul中
					u1.appendChild(li);
				};
				var allA = document.getElementsByTagName("a");
				u1.onclick = function(event){
					event = event || window.event;
					if(event.target.className == "link"){
						alert("我是ul的单击响应函数");
					}
					
				};
            }
    </script>
</head>
<body>
    <button id="btn01">添加超链接</button>
    
    <ul id="u1" style="background-color: #bfa;">
        <li>
            <p>我是p元素</p>
        </li>
        <li><a href="javascript:;" class="link">超链接一</a></li>
        <li><a href="javascript:;" class="link">超链接二</a></li>
        <li><a href="javascript:;" class="link">超链接三</a></li>
    </ul>
    
</body>
</html>
```



#### 9.4 事件的绑定

addEventListener()
通过这个方法也可以为元素绑定响应函数
参数：
1.事件的字符串，不要on
2.回调函数，当事件触发时该函数会被调用
3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false

使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，
这样当事件被触发时，响应函数将会按照函数的绑定顺序执行

这个方法不支持IE8及以下的浏览器



attachEvent()

在IE8中可以使用attachEvent()来绑定事件
参数：
1.事件的字符串，要on
2.回调函数

这个方法也可以同时为一个事件绑定多个处理函数，
不同的是它是后绑定先执行，执行顺序和addEventListener()相反

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function(){
            function bind(obj , eventStr , callback){
				if(obj.addEventListener){
					//大部分浏览器兼容的方式
					obj.addEventListener(eventStr , callback , false);
				}else{
					/*
					 * this是谁由调用方式决定
					 * callback.call(obj)
					 */
					//IE8及以下
					obj.attachEvent("on"+eventStr , function(){
						//在匿名函数中调用回调函数
						callback.call(obj);
					});
                }
            };

				var btn01 = document.getElementById("btn01");
				bind(btn01 , "click" , function(){
					alert(this);
				});
			
				
			};
    </script>
</head>
<body>
		<button id="btn01">点我一下</button>
</body>
</html>
```



#### 9.5 事件的传播

关于事件的传播网景公司和微软公司有不同的理解
微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，
然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。
网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，
然后在向内传播给后代元素
W3C综合了两个公司的方案，将事件传播分成了三个阶段
1.捕获阶段
在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
2.目标阶段
事件捕获到目标元素，捕获结束开始在目标元素上触发事件
3.冒泡阶段
事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件

如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true
一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false

IE8及以下的浏览器中没有捕获阶段

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
			#box1{
				width: 300px;
				height: 300px;
				background-color: yellowgreen;
			}
			
			#box2{
				width: 200px;
				height: 200px;
				background-color: yellow;
			}
			
			#box3{
				width: 150px;
				height: 150px;
				background-color: skyblue;
			}
    </style>
    <script>
        window.onload = function(){
        	  var box1 = document.getElementById("box1");
				var box2 = document.getElementById("box2");
				var box3 = document.getElementById("box3");
				bind(box1,"click",function(){
					alert("我是box1的响应函数")
				});
				
				bind(box2,"click",function(){
					alert("我是box2的响应函数")
				});
				
				bind(box3,"click",function(){
					alert("我是box3的响应函数")
				});
                
		    	function bind(obj , eventStr , callback){
                    if(obj.addEventListener){
                        //大部分浏览器兼容的方式
                        obj.addEventListener(eventStr , callback , true);
                    }else{
                        obj.attachEvent("on"+eventStr , function(){
                            //在匿名函数中调用回调函数
                            callback.call(obj);
                        });
                    }
			}
				
			};
			
			
    </script>
</head>
<body>
    
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    
</body>
</html>
```



#### 9.6 常用事件

##### 9.6.1 鼠标事件

拖拽事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        	#box1{
				width: 100px;
				height: 100px;
				background-color: red;
				position: absolute;
			}
			
			#box2{
				width: 100px;
				height: 100px;
				background-color: yellow;
				position: absolute;
				
				left: 200px;
				top: 200px;
			}
    </style>
    <script>
        window.onload = function(){
				/*
				 * 拖拽box1元素
				 *  - 拖拽的流程
				 * 		1.当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
				 * 		2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
				 * 		3.当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
				 */
				//获取box1
				var box1 = document.getElementById("box1");
				var box2 = document.getElementById("box2");
				var img1 = document.getElementById("img1");

				drag(box1);
				drag(box2);
				drag(img1);
			};
			
			/*
			 * 提取一个专门用来设置拖拽的函数
			 * 参数：开启拖拽的元素
			 */
			function drag(obj){
				//当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
				obj.onmousedown = function(event){
					obj.setCapture && obj.setCapture();
					event = event || window.event;
					var ol = event.clientX - obj.offsetLeft;
					var ot = event.clientY - obj.offsetTop;
					document.onmousemove = function(event){
						event = event || window.event;

						var left = event.clientX - ol;
						var top = event.clientY - ot;
						
						//修改box1的位置
						obj.style.left = left+"px";
						obj.style.top = top+"px";
						
					};
					
					//为document绑定一个鼠标松开事件
					document.onmouseup = function(){
						//当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
						//取消document的onmousemove事件
						document.onmousemove = null;
						//取消document的onmouseup事件
						document.onmouseup = null;
						//当鼠标松开时，取消对事件的捕获
						obj.releaseCapture && obj.releaseCapture();
					};					
					return false;
				};
			}
    </script>
</head>
<body>
		
    我是一段文字
    
    <div id="box1"></div>
    
    <div id="box2"></div>
    
    <img src="img/an.jpg" id="img1" style="position: absolute;"/>
</body>
</html>
```

滚轮事件：

onwheel都支持

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
       #box1{
				width: 100px;
				height: 100px;
				background-color: red;
			}
   </style>
    <script>
        window.onload = function(){
				var box1 = document.getElementById("box1");
				box1.onmousewheel = function(event){
					
					event = event || window.event;
					if(event.wheelDelta > 0 || event.detail < 0){ //event.detail ie8的属性值
						//向上滚，box1变短
						box1.style.height = box1.clientHeight - 10 + "px";
						
					}else{
						//向下滚，box1变长
						box1.style.height = box1.clientHeight + 10 + "px";
					}
					
					/*
					 * 使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false
					 * 需要使用event来取消默认行为event.preventDefault();
					 * 但是IE8不支持event.preventDefault();这个玩意，如果直接调用会报错
					 */
					event.preventDefault && event.preventDefault();
					return false;	
				};
				
				//为火狐绑定滚轮事件
				bind(box1,"DOMMouseScroll",box1.onmousewheel);	
			};
			
			function bind(obj , eventStr , callback){
				if(obj.addEventListener){
					obj.addEventListener(eventStr , callback , false);
				}else{
					obj.attachEvent("on"+eventStr , function(){
						callback.call(obj);
					});
				}
			}
    </script>
</head>
<body style="height: 2000px;">
		
		<div id="box1"></div>
		
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
    <style>
        #box{
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
        }
    </style>
    <script>
            window.onload = function(){
                document.onkeydown = function(event)
                 {
                    event = event || window.event;

                     var speed = 10 ;
                     if(event.ctrlKey)  
                     {
                        speed = 20;
                     }

                     console.log(event.keyCode);
                     switch(event.keyCode){
						case 37:
							box.style.left = box.offsetLeft - speed + "px";
							break;
						case 39:
							box.style.left = box.offsetLeft + speed + "px";
							break;
						case 38:
							box.style.top = box.offsetTop - speed + "px";
							break;
						case 40:
							box.style.top = box.offsetTop + speed + "px";
							break;
					}     
                }
            }
    </script>
</head>
<body>
    <div id="box"></div>
</body>
</html>
```



##### 9.6.2 键盘事件

键盘事件：
onkeydown
按键被按下
对于onkeydown来说如果一直按着某个按键不松手，则事件会一直触发
当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常的快，这种设计是为了防止误操作的发生。
onkeyup
按键被松开

键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document

keyCode

可以通过keyCode来获取按键的编码
通过它可以判断哪个按键被按下
除了keyCode，事件对象中还提供了几个属性
altKey
ctrlKey
shiftKey
这个三个用来判断alt ctrl 和 shift是否被按下
如果按下则返回true，否则返回false

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function(){

            document.onkeydown =function(event){
                event = event || window.event;
                if(event.keyCode == 89 && event.ctrlKey)
                {
                    alert("ctrl + y 同时被按下");
                }
            }
            var input = document.getElementsByTagName("input")[0];
            input.onkeydown = function(event)
            {
                event = event || window.event;

                if(event.keyCode >=48 && event.keyCode<= 57)
                {
                    return false;  //不能舒服数字
                }

            }
            
        }
    </script>
</head>
<body>
    <input type="text" id="inner">
</body>
</html>
```



### 10 BOM

浏览器对象模型(browser object model)
BOM可以使我们通过JS来操作浏览器
在BOM中为我们提供了一组对象，用来完成对浏览器的操作
BOM对象
Window： 代表的是整个浏览器的窗口，同时window也是网页中的全局对象
Navigator：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
Location：代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
History：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
而且该操作只在当次访问时有效
Screen：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息

这些BOM对象在浏览器中都是作为window对象的属性保存的，
可以通过window对象来使用，也可以直接使用

#### 10.1Navigator

代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了
一般我们只会使用userAgent来判断浏览器的信息，
userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，
不同的浏览器会有不同的userAgent

火狐的userAgent
Mozilla5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko20100101 Firefox50.0

Chrome的userAgent
Mozilla5.0 (Windows NT 6.1; Win64; x64) AppleWebKit537.36 (KHTML, like Gecko) Chrome52.0.2743.82 Safari537.36

IE8
Mozilla4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)

IE9
Mozilla5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)

IE10
Mozilla5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)

IE11
Mozilla5.0 (Windows NT 6.1; WOW64; Trident7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了

```
alert(navigator.appName);  
  
var ua = navigator.userAgent;  
  
console.log(ua);  
  
if(firefoxi.test(ua)){  
alert("你是火狐！！！");  
}else if(chromei.test(ua)){  
alert("你是Chrome");  
}else if(msiei.test(ua)){  
alert("你是IE浏览器~~~");  
}else if("ActiveXObject" in window){  
alert("你是IE11，枪毙了你~~~");  
}
```

#### 10.2 History

对象可以用来操作浏览器向前或向后翻页
length
属性，可以获取到当成访问的链接数量
back()
可以用来回退到上一个页面，作用和浏览器的回退按钮一样
forward()
可以跳转下一个页面，作用和浏览器的前进按钮一样
go()
可以用来跳转到指定的页面
它需要一个整数作为参数
1:表示向前跳转一个页面 相当于forward()
2:表示向前跳转两个页面
-1:表示向后跳转一个页面
-2:表示向后跳转两个页面

#### 10.3 Location

该对象中封装了浏览器的地址栏的信息
如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）
alert(location);
如果直接将location属性修改为一个完整的路径，或相对路径
则我们页面会自动跳转到该路径，并且会生成相应的历史记录
location = “http:[www.baidu.com"](http://www.baidu.com"/);
location = “01.BOM.html”;
assign()
用来跳转到其他的页面，作用和直接修改location一样
reload()
用于重新加载当前页面，作用和刷新按钮一样
如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面
location.reload(true);
replace()
可以使用一个新的页面替换当前页面，调用完毕也会跳转页面
不会生成历史记录，不能使用回退按钮回退

#### 10.4 window

##### 10.4.1定时器

**setInterval()**
定时调用
可以将一个函数，每隔一段时间执行一次
参数：
1.回调函数，该函数会每隔一段时间被调用一次
2.每次调用间隔的时间，单位是毫秒

返回值：
返回一个Number类型的数据
这个数字用来作为定时器的唯一标识
**clearInterval()可以用来关闭一个定时器**
方法中需要一个定时器的标识作为参数，这样将关闭标识对应的定时器

clearInterval()可以接收任意参数，
如果参数是一个有效的定时器的标识，则停止对应的定时器
如果参数不是一个有效的标识，则什么也不做

```
var num = 1;  
var timer = setInterval(function() {  
	count.innerHTML = num++;  
	if(num == 11) {  
		//关闭定时器  
		clearInterval(timer);  
	}  
}, 1000);
```

##### 10.4.2 延时调用

**setTimeout**

延时调用一个函数不马上执行，而是隔一段时间以后在执行，而且只会执行一次
延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次
延时调用和定时调用实际上是可以互相代替的，在开发中可以根据自己需要去选择

var timer = setTimeout(function(){
console.log(num++);
},3000);

使用clearTimeout()来关闭一个延时调用
clearTimeout(timer);

\#类的操作

**直接修改元素的类css：**

通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面。 这样的执行的性能是比较差的，而且这种形式当我们要修改多个样式时，也不太方便 我希望一行代码，可以同时修改多个样式

我们可以通过修改元素的class属性来间接的修改样式.这样一来，我们只需要修改一次，即可同时修改多个样式，浏览器只需要重新渲染页面一次，性能比较好，
并且这种方式，可以使表现和行为进一步的分离

```
box.className += " b2";	//注意有空格，添加class属性
```

```
//定义一个函数，用来向一个元素中添加指定的class属性值  
/*  
 * 参数:  
 * 	obj 要添加class属性的元素  
 *  cn 要添加的class值  
 * 	  
 */  
function addClass(obj, cn) {  
	if (!hasClass(obj, cn)) {  
		obj.className += " " + cn;  
	}  
}  
/*  
 * 判断一个元素中是否含有指定的class属性值  
 * 	如果有该class，则返回true，没有则返回false  
 * 	  
 */  
function hasClass(obj, cn) {  
	var reg = new RegExp("\\b" + cn + "\\b");  
	return reg.test(obj.className);  
}  
/*  
 * 删除一个元素中的指定的class属性  
 */  
function removeClass(obj, cn) {  
	//创建一个正则表达式  
	var reg = new RegExp("\\b" + cn + "\\b");  
	//删除class  
	obj.className = obj.className.replace(reg, "");  
}  
/*  
 * toggleClass可以用来切换一个类  
 * 	如果元素中具有该类，则删除  
 * 	如果元素中没有该类，则添加  
 */  
function toggleClass(obj , cn){	  
	//判断obj中是否含有cn  
	if(hasClass(obj , cn)){  
		//有，则删除  
		removeClass(obj , cn);  
	}else{  
		//没有，则添加  
		addClass(obj , cn);  
	}  
}
```

# JSON

**JavaScript Object Notation** JS对象表示法

## JSON 格式

1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
2. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和`null`（不能使用`NaN`, `Infinity`, `-Infinity`和`undefined`）。
3. 字符串**必须使用双引号表示**，不能使用单引号。
4. 对象的键名必须放在双引号里面。
5. 数组或对象最后一个成员的后面，不能加逗号。

JS中的对象只有JS自己认识，其他的语言都不认识
**JSON就是一个特殊格式的字符串**，这个字符串可以被任意的语言所识别，
并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互
JSON和JS对象的格式一样，只不过**JSON字符串中的属性名必须加双引号**
其他的和JS语法一致
JSON分类：
1.对象 {}
2.数组 []

JSON中允许的值：
1.字符串
2.数值
3.布尔值
4.null
5.对象
6.数组

举例：

```
var arr = '[1,2,3,"hello",true]';  
			  
var obj2 = '{"arr":[1,2,3]}';  
  
var arr2 ='[{"name":"孙悟空","age":18,"gender":"男"},{"name":"孙悟空","age":18,"gender":"男"}]';
```

复制

JSON工具类

json > js对象
JSON.parse()
可以将以JSON字符串转换为js对象
它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回

var o = JSON.parse(json);
var o2 = JSON.parse(arr);

var obj3 = {name:”猪八戒” , age:28 , gender:”男”};

JS对象 > JSON
JSON.stringify() -ify/fy，表示”使……化。
可以将一个JS对象转换为JSON字符串
需要一个js对象作为参数，会返回一个JSON字符串

var str = JSON.stringify(obj3);
console.log(str);

JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错



# other

## localStorage

只读的`localStorage` 属性允许你访问一个[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 源（origin）的对象 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)；其存储的数据能在跨浏览器会话保留。`localStorage` 类似 [`sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)，但其区别在于：存储在 `localStorage` 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 `sessionStorage` 的数据会被清除 。

## eval()

eval()
这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
如果使用eval()执行的字符串中含有{},它会将{}当成是代码块
如果不希望将其当成代码块解析，则需要在字符串前后各加一个()

eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，
但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患

```
var str = '{"name":"孙悟空","age":18,"gender":"男"}';  
var obj = eval("("+str+")");  
```

编码

```
<!DOCTYPE html>  
<html>  
	<head>  
		<meta charset="UTF-8">  
		<title></title>  
		<script type="text/javascript">  
			  
			/*  
			 * 在字符串中使用转义字符输入Unicode编码  
			 * 	\u四位编码  
			 */  
			console.log("\u2620");	  
		</script>  
	</head>  
	<body>		  
		<!--在网页中使用Unicode编码  
			&#编码; 这里的编码需要的是10进制  
		-->  
		<h1 style="font-size: 200px;">&#9760;</h1>  
		<h1 style="font-size: 200px;">&#9856;</h1>		  
	</body>  
</html>
```

复制

confirm()用于弹出一个带有确认和取消按钮的提示框
需要一个字符串作为参数，该字符串将会作为提示文字显示出来
如果用户点击确认则会返回true，如果点击取消则返回false
var flag = confirm(“确认删除”+name+”吗?”);

## # 原生js

## 原生js实现复制内容到剪切板

```
copy() {  
    const input = document.createElement("input");  
    document.body.appendChild(input);  
    input.setAttribute("value",this.solution.code);  
    input.select();  
    if (document.execCommand("copy")) {  
        document.execCommand("copy");  
        // console.log("复制成功");  
    }  
    document.body.removeChild(input);  
}
```

![image-20220320174418595](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320174418595.png)

![image-20220320174715130](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320174715130.png)

![image-20220320174925361](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320174925361.png)

![image-20220320175057044](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320175057044.png)

![image-20220320175131406](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320175131406.png)

![image-20220320202807313](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320202807313.png)

![image-20220320203014949](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320203014949.png)

![image-20220320204745412](C:\Users\hasee\AppData\Roaming\Typora\typora-user-images\image-20220320204745412.png)