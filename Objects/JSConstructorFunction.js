// In JavaScript, a constructor function is used to create objects.

function Person (){
    this.name= 'Chittaranjan',
    this.age= 23
}

const person = new Person()
console.log(person.name, person.age)

// constructor function
function Man(){
    this.name = 'Chitta',
    this.age = 34,
    this.greet = function(){
        console.log('Hello '+this.name)
    }
}

man1 = new Man()
man2 = new Man()
man2.name = 'Ashok' // Changing the value for an object
man1.greet()
man2.greet()

// JavaScript Constructor Function Parameters

function Person1(name, age, gender){
    this.name = name,
    this.age = age, 
    this.gender = gender, 
    this.intro = function(){
        console.log(this.name+' is '+this.age+' years old - '+this.gender)
    }
}

p1 = new Person1('Chitta', 34, 'M')
p2 = new Person1('Ambuja', 29, 'F')
p1.intro()
p2.intro()

/* Create Objects: Constructor Function Vs Object Literal
Object Literal is generally used to create a single object. 
The constructor function is useful if you want to create multiple objects.
*/

// using object literal
let person2 = {
    name: 'Sam'
}

function Person2 () {
    this.name = 'Sam'
}

let per1 = new Person2();
let per2 = new Person2();
console.log(per1.name);
console.log(per2.name);


/*JavaScript Object Prototype
You can also add properties and methods to a constructor function using a prototype. */
// constructor function
function Person3 () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let per31 = new Person3();
let per32 = new Person3();

// adding new property to constructor function
Person3.prototype.gender = 'Male';

console.log(per31.gender); // Male
console.log(per32.gender); // Male

//JavaScript Built-in Constructors
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

