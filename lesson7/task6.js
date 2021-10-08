let arr1= [1,1,4,2,3,441,1,2,4,5,6,7,7,5,3,3,3]

function f1 (element,index,array)
{let a=0
    arr1.forEach(function(item, i, arr) {
       if (element==item){
          a++
       }
    })
    if (a>1)
    {
        array[index]="X"
    }
}
arr1.forEach(f1)
let str = arr1.join(';');
str=str.replace(/(X;)/g,'')
arr1= str.split(';')
console.log(arr1)