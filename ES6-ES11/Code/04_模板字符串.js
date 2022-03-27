// es6引入新的声明字符串的方式 【】
// 1.声明、
let str =`新的声明的方式`

// 2.内容中可以直接出现换行符
let strOne = `<ul>
            <li>111 </li>
            <li>222 </li>
            <li>3333 </li>
            </ul>`;
console.log(strOne)

// 3.变量的拼接
let lovest = "aodi"
let put = `${lovest}今年学前端`
console.log(put)  //aodi今年学前端