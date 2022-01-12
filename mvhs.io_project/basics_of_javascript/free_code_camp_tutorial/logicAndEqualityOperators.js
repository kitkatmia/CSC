function bool() {
    return false; // notice false/true are lowercase in javascript
}
console.log(bool());

// Bools
function trueOrFalse(bool) {
    if (bool) {
        return 'It\'s true!';
    }
    return "No, it's false."; // the second statement acts as an ELSE statement because, if the first statement is true, the second will not run
}
console.log(trueOrFalse(false));

// == Operator
function equal(val) {
    if (val == 10) { // == checks if the values are the same
        return ('Value is equal to 10');
    }
    return ('Value is not equal to 10');
}
console.log(equal(5));
console.log(equal('10')); // since we use ==, it performs a type conversion

// Strict operator
function doubleEquality(val) {
    if (val === 3) { // === checks if the types AND values are the same 
        return 'Equal';
    }
    return 'Not equal';
}
console.log(doubleEquality(3))
console.log(doubleEquality('3'))

// Inequality operator (!=)
function notEqual(val) {
    if(val!=10) {
        return 'Not equal!'
    }
    return 'Equal'
}
console.log(notEqual(10))

// Strict inequality operator
function strictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal";
}
console.log(strictNotEqual('17'));

// Greater than and less than
function greaterLessThan(val) {
    if (val > 100) {
        return 'Greater than 100';
    }
    if (val > 50) {
        return 'Greater than 50';
    }
    if (val >= 20) {
        return 'Greater than or equal to 20';
    }
    if (val <= 10) {
        return 'Less than or equal to 10';
    }
    if (val <= 5) {
        return 'Less than or equal to 5';
    }
}
console.log(greaterLessThan(1000));
console.log(greaterLessThan(70));
console.log(greaterLessThan(20));
console.log(greaterLessThan(10));
console.log(greaterLessThan(1));

// And operator
function andOperator(val) {
    if (val > 50 && val < 100) { // && = and operator
        return 'Value is greater than 50 but less than 100';
    }
    return 'Value is not between 50 and 100'
}
console.log(andOperator(75));

// Or operator
function orOperator(val) {
    if (val < 10 || val > 20) { // || = or operator
        return 'Outside';
    }
    return 'Inside';
}
console.log(orOperator(30));
console.log(orOperator(5));
console.log(orOperator(15));

// Returning a boolean value:
function isLess(a, b) {
    return a > b 
    // this superior over the below code:
    // if (a>b) {
    //     return true
    // } 
    // return false
}

// How the or operator can help shorten code
arr = {
    'dog': 'Bob',
    'cat': 'Joe'
}
function findVal(prop) {
    return arr[prop] || 'No such property' // if prop exists, the first condtion is returned; else the string is returned
}
console.log(findVal('dog'))
console.log(findVal('pup'))