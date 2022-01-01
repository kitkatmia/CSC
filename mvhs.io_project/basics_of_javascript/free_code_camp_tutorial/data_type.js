/* This is how you do a 
multi-line
comment */

/* Data types:
Undefined: A variable that hasn't been set to be anything
Null: the var is set to nothing
Bool: true or false
String: string
Syymbol: immutable, primitive value that is unique
Number: #
Object: Store key-value pairs; like a dictionary
 */

// first declare the var
var Myname = "Bob"; // var can be used throughout your entire program
console.log(Myname);
Myname = 'Joe'; // now you can change it
console.log(Myname); 

let dogBreed = 'Labrador'; // let will only be used within the scope in which you declared it
console.log(dogBreed); 

const country = 'US'; // const is a variable that can never change
console.log(country); 

var helloWorld = 'Hello '; // common practice to use camelCase
console.log(helloWorld + 'world!') // like python, you can add strings together in javascript
console.log(helloWorld*5) // but you cannot multiply them; NaN is returned

var num = 8;
// How to increment (add 1):
num++;
console.log(num);
// How to decrement (subtract 1):
num--;
console.log(num);
// How to add / subtract however much you want:
num += 100; // add 100
num -= 10; // subtract 10 
console.log(num);
// You can also do multiplication and division! :
num /= 2; // divide by 2
console.log(num);
num *= 0; // multiply by 0
console.log(num);

// Finding the remainder of two numbers:
var remainder; // initialize variable remainder
remainder = 11%3
console.log(remainder)
