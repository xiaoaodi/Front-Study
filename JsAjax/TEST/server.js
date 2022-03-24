
const { response } = require('express')
const { request } = require('express')
const express = require('express')
const res = require('express/lib/response')

const app = express()

app.get('/home',(request,response)=>{
    response.sendFile(__dirname + "/index.html");
})

app.get("/data",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send("用户的数据")
})

app.listen(9000, function(){
    console.log("我在监听9000端口")
})