var marks = Array(6);
var marks = new Array(20,34,45,56,67,78);

var list = [20,34,45,56,67,78];
var list1 = [];

console.log(list[2]);
list1[0]=10;
console.log(list.length);
list1.push(20); // Add an element at the end
console.log(list1[1]);
list.pop(); //delete last added element
console.log(list);
list1.unshift(5); //Add an element as the start
console.log(list1);
console.log(marks.indexOf(45)); //in which index the value is
console.log(marks.includes(123)); //check whether the element is part of that array or not
submarks = marks.slice(2,5); //Will print from 2 to 4 in marks array
console.log(submarks);
//Add all the elements present in the array
var sum=0;
for(let i=0;i<marks.length;i++)
{
    //console.log(marks[i]);
    sum=sum+marks[i]
}
console.log(sum);

//reduce filter map
let TotalMark = marks.reduce((sum,TotalMarks)=>sum+TotalMarks,0);
console.log(TotalMark);

//Print even numbers
var scores = [12,13,14,16]
var nscores=[];
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    nscores.push(scores[i]);
}
console.log(nscores);

//Now lets do the same using filter method
let newFilterScores = scores.filter(score=>score%2==0); 
//it is filtering all the element on a certain condition
console.log(newFilterScores);

//Map Array function - - Array multiplied by 3 -  [36,42,48]
let newMultArr = newFilterScores.map(score=>score*3);
//it is mapping all the elements by a certain operation
console.log(newMultArr);
let TotalVal = newMultArr.reduce((sum,eachVal)=>sum+eachVal,0); //Now sum them
console.log(TotalVal);

//We can use filter, map, reduce in a sequence also - like below 
let finalVal = scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,eachVal)=>sum+eachVal,0)
console.log(finalVal);

//Sorting an array with Strings 
//Sorting an array with Numbers
let fruits = ["banana","kiwi","apple","jamun","papaya"]
fruits.sort();
console.log(fruits); 
console.log(fruits.reverse()); 

var list = [20,13,34,23,45,44,56,102,67,78];
console.log(list.sort()); //This sorts as per the digit value
console.log(list.sort((a,b)=>a-b)); // This is bubble sort
console.log(list.sort((a,b)=>b-a)); // in reverse order












