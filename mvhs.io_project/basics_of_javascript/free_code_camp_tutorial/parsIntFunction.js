// Basic syntax of parseInt function
function convertToInt(str) {
    console.log(parseInt(str));
    // parseInt takes a string and returns an integer
    // If the string cannot be turned into an integer, NaN is returned
}
convertToInt('eife');
convertToInt('56');

// Use the parseInt functionwith a radix
function convertToInt(str) {
    console.log(parseInt(str, 2))
    // radix specified the base of then number in the string (ex: base 2 [binary], base 10 [normal numbers])
}
convertToInt('10011');