const kub = [6, 4, 3, 2, 5, 1]
var readline = require('readline');
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgBlue = "\x1b[34m"
const Reset = "\x1b[0m"
const reducer = (previousValue, currentValue) => previousValue + currentValue;
let nameP2
let nameP1
let rez = {
    p1: [],
    p2: []
}

function Drop() {
    return Math.ceil(Math.random() * 100000 % 6) - 1
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function PlayerOne() {
    rl.question("drop dice " + nameP1 + " : (Enter) ", function () {
        rez.p1.push(kub[Drop()])
        console.log(rez.p1)
        PlayerTwo()
    });
}

function PlayerTwo() {
    rl.question("drop dice " + nameP2 + " : (Enter) ", function () {
        rez.p2.push(kub[Drop()])
        console.log(rez.p2)
        if (rez.p2.length > 2) RerollP1()
        else PlayerOne()
    });
}


function RerollP1() {
    console.log(nameP1 + " summ: " + rez.p1.reduce(reducer))
    console.log(nameP2 + " summ: " + rez.p2.reduce(reducer))
    rl.question(nameP1 + " dice reroll ? (y/n)", function (answer) {
        if (answer == "y") {
            rl.question(nameP1 + " : which roll to re-roll? (1/2/3) ", function (answer) {
                let selected = Number(answer)
                console.log(selected)
                if (selected == true && 1 <= selected && selected <4) {
                    rez.p1[selected - 1] = kub[Drop()]
                    console.log(rez.p1)
                } else {
                    console.log("number not valid")
                }
                RerollP2()
            });
        } else RerollP2()
    });
}

function RerollP2() {
    rl.question(nameP2 + " dice reroll ? (y/n)", function (answer) {
        if (answer == "y") {
            rl.question(nameP2 + " : which roll to re-roll? (1/2/3) ", function (answer) {
                let selected = Number(answer)
                console.log(selected)
                if (selected == true && 1 <= selected && selected <4) {
                    rez.p2[selected - 1] = kub[Drop()]
                    console.log(rez.p2)
                } else {
                    console.log("number not valid")
                }
                Finish()
            });
        } else
            Finish()
    });
}

function Finish() {
    console.log(nameP1 + " [" + rez.p1 + "] summa: " + rez.p1.reduce(reducer))
    console.log(nameP2 + " [" + rez.p2 + "] summa: " + rez.p2.reduce(reducer))
    if (rez.p1.reduce(reducer) > rez.p2.reduce(reducer))
        console.log(nameP1 + FgGreen + "~WIN~" + Reset)
    else
        console.log(nameP2 + FgGreen + " ~WIN~" + Reset)
    rl.close()
}

function StartGame() {
    rl.question("Name " + FgRed + "Player 1" + Reset + " :", function (answer) {
        nameP1 = FgRed + answer + Reset
        rl.question("Name " + FgBlue + "Player 2" + Reset + " :", function (answer) {
            nameP2 = FgBlue + answer + Reset
            PlayerOne()
        });
    });
}

StartGame()
