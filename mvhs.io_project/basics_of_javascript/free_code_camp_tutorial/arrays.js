function newSection() {
    console.log('\n')
}

// Initiliazing an array
var arr = ['Bob', 24]; // javascript arrays are very similar to python lists

// Nested arrays
var nestArr = [[1, 'st'], [2, 'nd']];

// Indexing the arrays
console.log(arr[0]);
console.log(nestArr[0][1]);

// Modify arrays using indexes
newSection()
var unmodfiedArr = [1, 2, 4];
console.log(unmodfiedArr);
unmodfiedArr[2] = 3;
console.log(unmodfiedArr);

// Manipulating arrays
newSection()
var names = ['Bob', 'Joe'];
names.push('Susan'); // .push works like .append in python (add things to the right of the array)
console.log(names);
// Removing the last element
console.log(names.pop()); // .pop() returns the value that has been "popped"
console.log(names);
// Removing the first element
console.log(names.shift()); // again, the shifted element is returned
console.log(names);
// Adding an element to the beginning of an array
names.unshift('MeFirst');
console.log(names);

// Shopping list nested array example
var shopList = [['cereal', 3], ['milk', 2], ['oranges', 10], ['eggs', 24]]
