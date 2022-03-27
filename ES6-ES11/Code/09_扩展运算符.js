
// [...]可以将数组的逗号分隔的参数序列

const TF = ["a","ad","adasd","asda"]

function change(){
    console.log(arguments)
}

change(...TF) //[Arguments] { '0': 'a', '1': 'ad', '2': 'adasd', '3': 'asda' }


//1. 数组的合并

const   AAA =  [1,123,231]
const BBB = [2313,3123,1,123,1]

const HEBING = [...AAA,...BBB]
console.log(HEBING)

// [
//     1,  123, 231,
//  2313, 3123,   1,
//   123,    1
// ]
// 2. 数组的克隆

const CCC  = [...AAA]
console.log(CCC)  //[ 1, 123, 231 ]