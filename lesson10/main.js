const zero = new Promise((res) => {
    console.log('start zero');
    setTimeout(() => {
        console.log('zero');
        res();
    }, Math.random() * 5000);
})

function first(callback) {
    console.log('start first');
    setTimeout(() => {
        console.log('first');
        callback()
    }, Math.random() * 5000)
}

function second() {
    console.log('start second');
    return new Promise((res) => {
        setTimeout(() => {
            console.log('second');
            res();
        }, Math.random() * 5000);
    })
}

function third() {
    console.log('start third');
    return Promise.resolve('third')
        .then((text) => console.log(text))
}

function fourth(callback) {
    console.log('start fourth');
    setTimeout(() => {
        console.log('fourth');
        callback()
    }, Math.random() * 5000)
}

async function fifth() {
    console.log('start fifth');
    console.log('fifth');
}




zero
    .then(() => {
        return 1
    })
    .then(() => first(function (rez) {
            second().then(() => {
                third().then(() => {
                    fourth((rez) => {
                        fifth()
                    })
                })
            })
        }
    ))