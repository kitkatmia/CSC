// Generate random decimal between 0-1
console.log(Math.random());

// Generate random number
console.log(Math.ceil(Math.random()*20)); // random number between 0 and 20
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9

// Generate a random number within a range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(0, 6));
console.log(randomRange(5, 10)) ;