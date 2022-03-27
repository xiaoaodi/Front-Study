let name = "aodi"

let change = function(){
    console.log("我能学习")
}

const obj = {
    name,
    change,
    improve(){
        console.log("继续加油")
    }
}

console.log(obj.name) //aodi
obj.change(); //我能学习
obj.improve() //继续加油