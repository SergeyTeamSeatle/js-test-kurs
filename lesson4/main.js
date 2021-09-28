let action = require("./action")

let string = "qwe"
let number = 123
let numberString = "123"
let boolean = true

action.Summ(string,boolean)
action.Summ(string,number)
action.Summ(number,boolean)
action.Summ(number,numberString)
action.Multiplication(string,boolean)
action.Multiplication(string,number)
action.Multiplication(number,boolean)
action.Multiplication(number,numberString)
action.Division(string,boolean)
action.Division(string,number)
action.Division(number,boolean)
action.Division(number,numberString)
action.Explicit(String(null))
action.Explicit(Number(null))
action.Explicit(Boolean(null))