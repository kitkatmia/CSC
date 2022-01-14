// Anonymous function syntax vs (more concise) arrow function syntax
// WITHOUT PARAMS:
// Anon
var anon_magic = function() {
    console.log(new Date()); // new Date() returns current date
}
// Arrow (without params)
const arrow_magic = () => console.log(new Date())

anon_magic(); arrow_magic();

// WITH PARAMS
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
const CONCAT = (arr1, arr2) => arr1.concat(arr2);

arr1 = [1, 2]
arr2 = [3, 4, 5]
console.log(myConcat(arr1, arr2)); console.log(CONCAT(arr1, arr2))

// Writing higher order arrow functions
// Whenever one function takes in another function as an arguement, that's a good time for an arrow function
const realNumArr = [4, 5.6, -6, 7, 7.65, -23];

const squarePos = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x**2); 
    // .filter(arrow_function) returns an arrays of numbers that are intergers AND greater than 0
    // .map(arrow_function) takes in every element of the newly filtered array and returns it squared
    
    return squaredInt;
};

const squaredInt = squarePos(realNumArr);
console.log(squaredInt);