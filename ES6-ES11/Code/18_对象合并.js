// 判断两个值是否完全相等
console.log(Object.is(120,120))  //true
console.log(Object.is(NaN,NaN))  //true
console.log(NaN == NaN)//true

// 2. Object.assign 对象的合并

const config = {
    host:"localhost",
    port: 3306,
    name:"root",
    pass:"root"
}

const config2 = {
    host:"http://atguigu.com",
    port: 3306,
    name:"atguigu.com",
    pass:"i love you"
}

console.log(Object.assign(config,config2))

// 3. Object.setPrototypeOf 设置原型对象 
const school = {
    name: "aodi"
}

const cities ={
    xiaoqu: ["asdasda","asdad"]
}

Object.setPrototypeOf(school, cities)
console.log(Object.getPrototypeOf(school))
console.log(school)



