var arr = [1];
console.log("Original arr:",arr)
arr.push(2); // adds number to the end of the array
arr.push(3, 4); // you can also add multiple elements at a time
console.log("Pushed arr:", arr);

arr.pop(); // removes the last element
console.log("Popped arr:", arr);

arr.shift(); // removes the first element 
// NOTE: if you want to see what number got popped, simply print arr.shift()
console.log("Shifted array:", arr);

arr.unshift(0); // adds a number to the front of the array
console.log("Unshifted array:", arr);

// In other words, shift and unshift are the opposited of pop and push, respectively

var splice_me = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var spliced_arr = splice_me.splice(2, 4); // similar to python method of splicing --> arr[2:6]
console.log("Spliced arr:", spliced_arr)