// Intializing while loops
var arr = [];

var i = 0;
while (i < 5) {
    arr.push(i);
    i++;
}
console.log(arr);

// Initialzing for loop
var arr = [];

for (var i = 0; i < 5; i++) { // basically = for i in range(0, 5):
    arr.push(i);
}
console.log(arr);

var arr = [];

// Demonstrating the power of the step in for loops (running through all odd number before 10)
for (var i = 1; i < 10; i += 2) { // for (set_variable, condition, step)
    arr.push(i);
}
console.log(arr);

// Counting backwards with a for loop
arr = [];

for (var i = 10; i > 0; i -= 2) {
    arr.push(i);
}
console.log(arr);

// Iterating through an array using a for loop
var arr = [1, 4, 6, 6, 2];
var total = 0;

for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);

// Nested for loop
var nestArr = [[1, 2], [3, 4], [5, 6, 7]];
var prod = 1;

for (i = 0; i < nestArr.length; i++) {
    for (var j = 0; j < nestArr[i].length; j++) {
        prod *= nestArr[i][j];
    }
    console.log(prod);
    prod = 1;
}

// Do... While loops
var arr = [];
var i = 10

do { // a do while loops runs something AND THEN checks the condition (so it'll always run through at least one iteration -- no matter the condition)
    arr.push(i);
    i++;
} while (i < 5)
console.log(arr);
