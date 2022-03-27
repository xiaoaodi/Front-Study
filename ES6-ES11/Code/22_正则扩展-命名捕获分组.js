
let str =`<a href="http://www.aodi.com">aodi</a>`

const reg =/<a href="(?<url>.*)">(?<text>.*)<\/a>/
const res = reg.exec(str)

console.log(res)
console.log(res.url)
console.log(res.text)



//反向断言

let str1  = "312asdada你1231312sadasdad3413"
const reg1 = /(?<=你)\d+/
const rse1 = reg1.exec(str1)
console.log(rse1) //1231312

