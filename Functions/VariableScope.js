// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3

// program showing local scope of a variable
var a1 = "hello";

function greet1() {
    let b = "World"
    a1 = "hellooo"
    console.log(a1 + b);
}

greet1();
//console.log(a1 + b); // error