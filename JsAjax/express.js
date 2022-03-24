const express = require('express')

const app = express();

app.all('/server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    // response.setHeader('Access-Control-Allow-Origin', '*');
         //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('hello express');

})

app.post('/post_server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.send('hello post server');
  });

app.post('/ie_server', (request, response) => {
//设置响应头
response.setHeader('Access-Control-Allow-Origin','*')
response.setHeader("Access-Control-Allow-Headers", '*');
response.send('hello ie server');
});

  
app.all('/delay_server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader("Access-Control-Allow-Headers", '*');
    setTimeout(() => {
         response.send('delay_server');
    }, 3000);
  });

app.all('/cancel_server', (request, response) => {
//设置响应头
response.setHeader('Access-Control-Allow-Origin','*')
response.setHeader("Access-Control-Allow-Headers", '*');
setTimeout(() => {
        response.send('cancel_server');
}, 3000);
});
app.all('/resend_server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader("Access-Control-Allow-Headers", '*');
    setTimeout(() => {
            response.send('resend_server');
    }, 1000);
    });
 
app.all('/jquery_server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader("Access-Control-Allow-Headers", '*');
    const  data = 
    {
        name : "xiaofei",
        sex: "nan",
        age : 19
    }
    response.send(JSON.stringify(data))
  });   


  //axios 服务
app.all('/axios_server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {
      name: 'xiaoaodi'
    };
    response.send(JSON.stringify(data));
  });

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = {
      name: 'aodi'
    };
    response.send(JSON.stringify(data));
  });


//jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
      name: 'aodi'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
  });

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
      exist: 1,
      msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
  });
  
  //
  app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
      name: 'aodi',
      city: ['北京', '上海', '深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;
  
    //返回结果
    response.end(`${cb}(${str})`);
  });






app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.send('hello CORS');
  });

app.listen( 8000 ,()=>{

    console.log("服务已经启动，8000端口正在监听种。。。。")
})