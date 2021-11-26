// Two ways to initialize an array (which is similar to a poython list)
// 1.)
var arr = [1, 2, 3];
var arr2 = new Array(1, 5, 2);

console.log(arr, arr2);

console.log(arr[1]) // indexing works the same as in python

arr[2] = 'three'; // can have different types [ie int, string, bool] mixed in an array
console.log(arr) 