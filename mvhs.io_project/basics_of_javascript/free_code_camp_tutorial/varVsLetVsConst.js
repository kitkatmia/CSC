// var = can be redeclared, defined globally unless defined within a function (then local)
// let = doesn't let you declare a variable twice (although you can change it), scope of let is limited to the block, statement, or expression it was declared within
// const = doesn't let you declare a variable twice or change them using the = keyword, is read-only (overall very helpful if you know that you know that you never want to change the variable [like if you define a function within it]), very common to be all capital to signify it's const
// For the most part, use const and let; var has its uses but is less commonly used


// EXAMPLE: declaring and redeclaring variables
let cat = 'Mia';
const dog = 'Bob';
var parrot = 'Hugh';

cat = 'Ebany'; // you can change variables defined using let (just not redfine them)
// NOTE: by redifine I mean let cat = 'Ebany' or const dog = 'Joe'
// dog = 'Joe'; <-- this gives an error because const is READ-ONLY
var parrot = 'Cocoa';
console.log(cat, dog, parrot);

// EXAMPLE: global + local scopes
let i = 'Global scope';
var j = 'Global scope';
if (true) {
    let i = 'Local scope';
    var j = 'Local scope';
    console.log('Scope for i is: ', i);
    console.log('Scope for j is: ', j);
}
console.log('Scope for i is: ', i);
console.log('Scope for j is: ', j);

// EXAMPLE: mutating arrays within const
const s = [1, 2, 3, 4, 6];
s[4] = 5;
console.log(s)

// How to prevent mutations within objects defined by const
const CONSTANTS = {'one': 3, 'two': 2};
Object.freeze(CONSTANTS);
CONSTANTS['one'] = 3; // doesn't do anything cause object is frozen
console.log(CONSTANTS)