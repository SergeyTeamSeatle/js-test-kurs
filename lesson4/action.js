exports.Summ =Summ
function Summ(a,b){
    let v =a+b
    console.log(a+" + "+b+" = " +v +'  "typeof the result -> '+typeof v +'"')
}

exports.Division =Division
function Division(a,b){
    let v =a/b
    console.log(a+" / "+b+" = " +v+'  "typeof the result -> '+typeof v +'"')
}

exports.Multiplication =Multiplication
function Multiplication(a,b){
    let v =a*b
    console.log(a+" * "+b+" = " +v+'  "typeof the result -> '+typeof v +'"')
}

exports.Explicit =Explicit
function Explicit(a){
    console.log(a+'  "typeof the value -> '+typeof a +'"')
}
