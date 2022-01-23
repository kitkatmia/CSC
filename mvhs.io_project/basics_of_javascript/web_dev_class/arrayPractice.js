// MOST IMPORTANT METHODS + EXAMPLES

// .join method
let arr = ['this', 'is', 'a', 'string'];
let str = arr.join(' ');
console.log(str);

// .split method
let str1 = 'this is a string';
let arrSplit = str1.split(' ');
console.log(arrSplit);

// .filter method
let filterArr = [1, 10, 100];
let arr_less_than_fifty = arr.filter(item => item < 50);
console.log(arr_less_than_fifty);

// .map method
let mapArr = [1, 2, 3];
let arr_plus_one = mapArr.map(item => item + 1);
console.log(arr_plus_one);

// .forEach method
let forEachArr = [1, 2, 3];
forEachArr.forEach(item => {
    console.log(item);
})

// PRACTICE
// Q1: given array is [0, 1, 2, 3]. Return [2, 3, 4, 5]
let givenArr = [0, 1, 2, 3];
let plusTwoArr = givenArr.map(item => item + 2);
console.log(plusTwoArr);


// Q2 given array is [10, 19, 2o, 30]. Return [10, 20, 30]
let numArr = [10, 20, 19, 30];
let evenArr = numArr.filter(item => item % 2 == 0);
console.log(evenArr);

// Given a string names, return Hi.my.name.is.Ashwin.and.Jackson
let names = 'Hi my name is Ashwin and Jackson';
let joinPeriod = names.split(' ').join('.')
console.log(joinPeriod);

// Given arrInput, return [1, 3, 4, 2] using javascript methods
let arrInput = [1, 1, 3, 4, 1, 2, 2, 3];
let newArr = [];

arrInput.forEach(item => {
    if (!newArr.includes(item)) {
        newArr.push(item);
    }
});

console.log(newArr);