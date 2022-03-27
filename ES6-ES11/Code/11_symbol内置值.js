class Person{
    static [Symbol.hasInstance](param){
        console.log(param)
        console.log("我被用来检查")
        return false
    }
}

let o = {

}

console.log( o instanceof Person) //false


const arr = [1,12,3,1]
const arr2 = [32,32,13,23]
arr2[Symbol.isConcatSpreadable] =false
console.log(arr.concat(arr2))
// {}
// 我被用来检查
// false
// [
//   1,
//   12,
//   3,
//   1,
//   [ 32, 32, 13, 23, [Symbol(Symbol.isConcatSpreadable)]: false ]
// ]
