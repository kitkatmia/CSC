function newSection() {
    console.log('\n')
}

// How to intialize a function
function reusableFunc() {
    console.log('Hello world!');
}
reusableFunc()

// Taking in function paramters (arguments)
newSection()
function greeter(name) {
    console.log(`Hello ${name}!`);
}
greeter('Joe');

// Returning something
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(7));

// Understanding undefined values
var sum1 = 0;
function addThree() {
    sum1 += 3;
}
console.log(addThree());

// Setting variables equal to what a function returns
var processed = 0;
var num = 10;
function processedArg(num) {
    return (num + 5) / 3;
}
processed = processedArg(num);
console.log(processed)

// Returning Early Pattern from functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined; // if a or b is less than 0, the function doesn't excecute the last line; it's stopped short
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
console.log(abTest(-2, 2));

// Blackjack card counting function
// In blackjack, when you see a low card, count goes up and vice versa
// If the card is in the middle values, the count stays the same
// When the count is positive, the player should be high
// If the count is 0 or negative, the place should bet low
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        // NOTE: you don't need to put in cases 7, 8, 9 because the count stays the same in those cases
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }

    return `${count} ${holdbet}`
}
cc(2); cc('K'); cc(10); cc('K'); cc('A'); // executing the function a bunch of times
console.log(cc(4)) // it's asking: after all of the cards above + this one, should you bet or hold?

// Preset arguments/parameters
function subtract(num1 = 4, num2 = 2) {
    return num1 - num2;
}
console.log(subtract(7)); // num1 is set to 7 and num2 remains equal to 2

// Rest operator - lets you taken in any number of arguments into the function
const sum = (function () {
    return function sum(...args) { // ... is the rest operator. It lets you take in any number of arguments (which are named args)
        return args.reduce((a, b) => a + b, 0) // .reduce() method reduces the array to a single element by appling some function - the 0 at the end is the initial/default value
    }
})();
console.log(sum());
console.log(sum(1, 2));
console.log(sum(5, 6, 7));

// Spread operator - looks the same as the rest operator but expands an already existing array
// PRE-SPREAD-OPERATOR
const arr1 = ['JAN', 'FEB', 'MARCH', 'APRIL'];
let arr2;
(function () {
    arr2 = arr1; // doesn't actually create a copy of arr1; it quite literally sets arr2 to arr1
    arr1[0] = 'potato'
})();
console.log(arr2) // index 0 is potato because we set arr2 = arr1
// AFTER-SPREAD-OPERATOR
const arr3 = ['JAN', 'FEB', 'MARCH', 'APRIL'];
let arr4;
(function () {
    arr4 = [...arr3]; // spreads the contents of arr3 and then puts them within a new array (making a copy)
    arr3[0] = 'potato'
})();
console.log(arr4) // index 0 is still 'JAN'