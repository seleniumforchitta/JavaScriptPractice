// // program to show the change in global variable
// let a = "hello";

// function greet() {
//     a = 3
//     b = 6
// }

// // before the function call
// console.log(a);
// console.log(b);

// //after the function call
// greet();
// console.log(a); // 3


// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error