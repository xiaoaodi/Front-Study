const xiyou = [231,23,13,13,13,11]
for(let i of xiyou)
{
    console.log(i)
}

for(let i in xiyou)
{
    console.log(i)
}

let ite =  xiyou[Symbol.iterator]()

console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())

// { value: 231, done: false }
// { value: 23, done: false }
// { value: 13, done: false }
// { value: 13, done: false }
// { value: 13, done: false }
// { value: 11, done: false }
// { value: undefined, done: true }