const person = {
    name: 'chitta',
    age: 20, 
    greet: function() {
        console.log('Hello')
    }
}

person.greet()

const student = {
    name: 'Ambuja',
    rollNo: 234556,
    totalMarks: 41,
    studInfo: function(){
        console.log('name of the student - '+student.name)
        console.log('Rool No of the student - '+student.rollNo)
    },
    result: function(){
        if(student.totalMarks>=40)
            console.log('PASSED')
        else console.log('FAILED')
    }
}

student.studInfo()
student.result()