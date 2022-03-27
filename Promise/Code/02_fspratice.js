const fs = require('fs')

// fs.readFile('./Code/resource/content.txt',(err, data)=>{
//     if(err)
//     {
//         throw err;
//     }
//     console.log(data.toString())
// })


const pro = new Promise((resolve, reject) => {
    fs.readFile('./Code/resource/content.txt', (err, data) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(data)
        }
    })
})

pro.then((value) => {
    console.log(value.toString())
}, (err) => {
    console.log(err, toString())
})

const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};


function getFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

const g = function* () {
    try {
        const foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run(generator) {
    const it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);