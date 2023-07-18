const prompt=require("prompt-sync")();

function Testing(){
    console.log('I am inside the function')
}

Testing()


// Function with parameters
function greet(name){
    console.log('Hello '+name)
}

const name = prompt("Enter your name ")
greet(name)

// Function with multiple parameters 
function addNumbers(a,b){
    return a+b
}

console.log(addNumbers(100,1))
console.log(addNumbers(100,-1))

// Function Expressions
let square = function(num) {return num * num}
console.log(square(4))
let y = square(5)
console.log(y)