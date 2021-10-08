let arr= [1,1]
let first=5
let last =10

function Fib (arr = [1,1],l){
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    if (arr.length!=l){
        Fib(arr,l)
    }
}

Fib(arr,last)
let rez = arr.slice(first-1, last-1)
console.log(rez)