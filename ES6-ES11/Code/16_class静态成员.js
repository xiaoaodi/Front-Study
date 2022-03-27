function phone(){

}

phone.name ="手机"
phone.change = function(){
    console.log("改变")
}
phone.prototype.size = "200";

let nokia = new phone();

console.log(nokia.name) //undefined
console.log(phone.name) //phone
console.log(nokia.size) //200

class phone1{
    static name = "shouji"
    static change(){
        console.log("i can change world")
    }
}

let ipone1 = new phone1()

console.log(ipone1.name) //undefined
console.log(phone1.name) //shouji
phone1.change() // i can change world 