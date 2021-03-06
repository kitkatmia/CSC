// Normal function
function addition(a, b) { // Notice: you call function, not def
    return `${a} + ${b} = ${(a+b)}`;
}
console.log(addition(5, 6));

// Anonymous Function (think lambda)
const greet = function(name, time_of_day) {
    console.log(`Good ${time_of_day}, ${name}`);
}
greet('Bob', 'morning');

let add = (a, b) => console.log(a + b);   
add(1, 2)