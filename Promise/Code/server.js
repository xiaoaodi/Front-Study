const express = require("express")

var app = new express();

app.all("/server",(request,responed)=>{
    responed.setHeader("Access-Control-Allow-Origin","*")
    responed.send("server send")
})

app.listen("9000",function(){
    console.log("9000端口的监听已经开启")
})