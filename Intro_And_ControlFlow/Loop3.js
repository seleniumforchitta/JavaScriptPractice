// let i = 0 
// do
// {
//     console.log(i)
//     i++
// }while(i<10)

// Find out all the prime numbers between 1-100
var arr = []

for(let i=1;i<=100;i++)
{
    if(i == 1 || i == 2)
        arr.push(i)
    else{
        let count=0
        for(let j=i;j>1;j--)
        {
            if(i%j==0)
                count++
        }
        if(count<2)
            arr.push(i)
    }
}
console.log(arr)