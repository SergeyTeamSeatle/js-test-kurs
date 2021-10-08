let arr1= [1,1,4,2]
let arr2= [5,1,2,1]
let a= 0
let b= 0

function f1 (element,index,array)
{
    arr2.forEach(function(item, i, arr) {
       if (element==item){
           a++
           if(i==index){
               b++
           }

       }
    })
}

arr1.forEach(f1)
console.log("повторы="+a+"  совподает пазиция="+b)