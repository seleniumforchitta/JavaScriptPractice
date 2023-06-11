var arr = [23, 45, 67, 56, 78, 21, 12]
var arr1 = []
var arr2 = []
var arr3 = []
let str = ''
for(let i of arr)
{
    arr1.push(i)
}

arr.forEach(i=>{
    str = str + i +','
})

for(let i=arr.length-1;i>=0;i--)
{
    arr3.push(arr[i])
}

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(str)