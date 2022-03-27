
// class iphone {
//     constructor(brand, price){
//         this.brand = brand
//         this.price =price
//     }

//     call (){
//         console.log("我可以打电话")
//     }
// }

// let oneplus = new iphone("AODI",100)

// console.log(oneplus)

function phone (brand,price){
    this.brand = brand
    this.price = price
}

phone.prototype.call = function(){
        console.log("daiandajh")
}

// 实例化对象啊

let obj =new phone("xxxx",10000)
obj.call();
console.log(obj)
