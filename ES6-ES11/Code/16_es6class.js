
class Phone{
    constructor(brand, price){
        this.brand = brand
        this.price =price
    }

    call(){
        console.logs("i can paly iphone")
    }
}

class SmartPhone extends Phone{
    constructor(brand,price,color,size)
    {
        super(brand,price)
        this.color = color;
        this.size = size;
    }

    photo(){
        console.log("拍照")
    }

    playGame(){
        console.log("玩游戏")
    }

    call(){
        console.log("SmartPone is call")
    }
}

const xiaomi = new SmartPhone("xiaomu",990,"heise","asdasdad")
console.log(xiaomi)
xiaomi.call();

