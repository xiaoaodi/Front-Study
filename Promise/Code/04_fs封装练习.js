
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