class phone {
    get price() {
        console.log("价格提高的")
        return "i , love "
    }

    set price(newValue) {
        console.log("价格属性被修改了")
    }

}


let s = new phone()

console.log(s.price)
s.price = "free"
// console.log(s.price)