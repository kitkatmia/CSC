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
var sum = 0;
function addThree() {
    sum += 3;
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
