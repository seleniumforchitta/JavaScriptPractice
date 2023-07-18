
const prompt=require("prompt-sync")({sigint:true});

const number = prompt('Enter a number - ')
if (number > 0) {
    console.log('it is a positive number')
}
else if(number < 0){
    console.log('it is a Negative number')
}
else if(number == 0){
    console.log('it is a Zero')
}
else console.log('Enter a valid input')