
// rest用来代替arguments
// function data(...args)
// {
//     console.log(arguments)
// }


function data(...args)
{
    console.log(args)
}

data(213,131,23,342) //[ 213, 131, 23, 342 ]

// rest参数必须放到最后面
 
// function data(b,...args,a) error
// {
//     console.log(args)
// }
