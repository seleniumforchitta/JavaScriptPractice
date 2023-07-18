console.log("Hello World");

let a = 4
const b = 5.67
var c = "Ambuja"
let d = true;
const e = null;
let f;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));

console.log(!d);

const t1 = Symbol(7878)
console.log(t1)
console.log(t1.description)
console.log(t1.toString)

const student = {
    fname: 'Chitta',
    lname: 'Swain',
    age: 34,
    weight: '78'
}
student.fname = 'Ranjan'

console.log(student.fname)
console.log(student)
console.log(typeof(student.age))
console.log(typeof(student.fname))
console.log(++student.age)


console.log(2=='2')

console.log(2==='2')

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


