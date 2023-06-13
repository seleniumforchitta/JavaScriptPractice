// creating an object
let stud = { };

// adding a property
stud.name = 'John';

// adding a method
stud.greet = function() {
    console.log('hello');
}

// accessing a method
stud.greet(); // hello

// Use of this keyword and methods inside a object
const student = {
    name: 'Ambuja',
    rollNo: 234556,
    totalMarks: 41,
    studInfo: function(){
        console.log('name of the student - '+this.name)
        console.log('Rool No of the student - '+this.rollNo)
    },
    result: function(){
        if(this.totalMarks>=40)
            console.log('PASSED')
        else console.log('FAILED')
    }
}

student.studInfo()
student.result()

// User of the this.variable and local varible 
const person = {
    name: 'Chittaranjan',
    age: 30,
    greet: function() {
        let surname = 'Swain';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();