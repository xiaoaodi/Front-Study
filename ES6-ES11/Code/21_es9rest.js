
function func({name , age ,...user}){
    console.log(name)
    console.log(age)
    console.log(user)
}


func({
    name:"aodi",
    age:19,
    sex:1,
    address:"今后"
})


const one = {
    a:"1111"
}

const two ={
    b:"@222"
}

const sum = { ...one,...two}


console.log(sum)
