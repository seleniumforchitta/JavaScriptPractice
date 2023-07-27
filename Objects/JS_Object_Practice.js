const student = {
    name: 'David',
    age: 30,
    address: {
        city: 'Ny',
        country: 'USA'
    }
}

console.log(typeof student)

console.log(student.name)
console.log(student.age)
console.log(student.address.city)
console.log(student['name'])
console.log(student.address['country'])