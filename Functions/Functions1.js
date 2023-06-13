function nameOfFunc(){
    console.log('Body of the functions')
}

nameOfFunc()

let name = 'chitta'
function greet(name){
    console.log('Hello '+name+', How are you ?')
}

greet(name)

function add(a,b){
    console.log(a+b)
    return a+b
}
add(4,5), add(4,55), add(4,555)
let x = add(3,43)
console.log(x)


//Function as expression
let y = function (num) { return num*num}
console.log(y(5))

let z = y(3)
console.log(z)