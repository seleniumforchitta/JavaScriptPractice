// Program to count number to 1

function countNumber(num){
    console.log(num)
    num = num-1
    if(num>0){
        countNumber(num)
    }
}

countNumber(10)