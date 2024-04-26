console.log("Hello World");

//Javascript Variables
let a = 4
var b = 5.67
// var is used in the older versions of JavaScript, let is the new way of declaring variables starting ES6 (ES2015).
let d = true;
let f; // If you use a variable without initializing it, it will have an undefined value.
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(d));
console.log(typeof(f));
console.log(f); //undefined
console.log(!d);

let x=5, y=7, z=9;
console.log(x);
x = 3;
console.log(x);

//Javascript Constants 
const c = "Ambuja"
const e = null;
console.log(typeof(c));
console.log(typeof(e));
// c = 10;  // Error! constant cannot be changed.
console.log(c)

//const p;  // Error! Missing initializer in const declaration.
p = 5;
console.log(p) 

const t1 = Symbol(7878)
console.log(t1)
console.log(t1.description)
console.log(t1.toString)

const student = {
    fname: 'Abhishek',
    lname: 'Rajan',
    age: 34,
    weight: '78'
}
student.fname = 'Ranjan'

console.log(student.fname)
console.log(student)
console.log(typeof(student.age))
console.log(typeof(student.fname))
console.log(++student.age)


console.log(2 =='2')
console.log(2 ==='2')
console.log(student.fname=='Ranjan')

delete student.fname
console.log(student.fname)
console.log(student)
console.log(Number(student.weight))

console.log(student.weight===78)
console.log(student.weight===String(78))

console.log(student.age.toString())

console.log(parseInt('20.66'))
var aa = parseFloat('20.66')
console.log(typeof(aa))

console.log(`Hello I am Tick`)


