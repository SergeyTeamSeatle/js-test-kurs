var readline = require('readline');

let n =30
let arreyLenth = 4
let arrey=[]

const reducer = (previousValue, currentValue) => previousValue + currentValue;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("введите чило: ", function (answer) {
    let enterNumb = Number(answer)
    console.log(Boolean(enterNumb))
     if (Boolean(enterNumb) == true )
     {  n=enterNumb}
        console.log("число = ", n)
    rl.question("количество частей: ", function (answer) {
        let part = Number(answer)
        if (Boolean(part) == true )
        {arreyLenth=part}
        console.log("число = ", arreyLenth)
        while (arrey.length != arreyLenth-1)
        {
            let numb=Math.ceil((Math.random()+(n/arreyLenth)-0.5)*100)
            arrey.push(numb/100)
        }
        arrey.push(Math.ceil((n*100-arrey.reduce(reducer)*100))/100)
        console.log(arrey)
        rl.close()
    });
});