// Arrow functions are anonymous functions that can't be used as constructors too and are often used as callbacks

// To define an arrow function, we use the () => {} structure as follows:
let greet = (mood) => { return "Today is a " + mood + " day!"; }
console.log(greet("great"));  

OR:
greet = (mood) => "Today is a " + mood + " day!";
console.log(greet("good")); 

let numbers = [3, 5, 8, 9, 2];
const multiplyByTwo = number => number * 2;
let multipliedNumbers = numbers.map(multiplyByTwo); // map() creates a new array by calling a the specified function (ie the thing in the parantheses) once for each element in an array; it doesn't change the original array
console.log(multipliedNumbers);   

const divideByTwo = number => number / 2;
console.log(divideByTwo(4));           

// A REFRESHER ON THE MAINDIFFERENCES BETWEEN VAR, CONST, AND LET

// var cost = 5;
// This is globally scoped or function scoped, can be updated (cost = 10), and re-declared (var cost = 'five euros')

// let cost = 5
// This is block scoped (meaning they aren't defined outside of the loop, func, etc in which they were defined) and can be updated but not redeclared
// Let is sometimes preferred over var because of the fact it is block scoped.

// const cost = 6
// This is block scoped and can't be updated or  redeclared
