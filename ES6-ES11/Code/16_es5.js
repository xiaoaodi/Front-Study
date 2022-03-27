function phone(brand,price)
{
    this.brand =brand
    this.price =price
}

phone.prototype.call  = function(){
    console.log("i can ")
}

//智能手机
function SmartPhone(brand, price,color,size)
{
    phone.call(this,brand,price)
    this.color = color;
    this.size = size
}


SmartPhone.prototype = new phone;
SmartPhone.prototype.constructor = SmartPhone;

SmartPhone.prototype.photo = function(){
    console.log("我可以拍照")
}

SmartPhone.prototype.playGame = function(){
    console.log("我可以玩游戏")
}

const chuzi = new SmartPhone('锤子',2499,'黑色',"5.5inch")

console.log(chuzi)