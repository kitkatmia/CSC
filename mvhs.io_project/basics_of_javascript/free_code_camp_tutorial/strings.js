var newSection = '\n'

// initializing strings
var firstName = "Bob"; // called string literal

// How to escape quote symbol -- backslash (just like python)
console.log(newSection);
var doubleQuote = "He said, \"I am a double quoted string,\" and sighed.";
console.log(doubleQuote);
// You can also just use single quotes
var myLink = '<a href="http://www.google.com target="_blank>Link</a>"';
console.log(myLink);
// You can also use ticks
var myStr = `<a href='http://www.google.com' target="_blank>Link</a>"`;
console.log(myStr);

// Escape sequences
console.log(newSection);
var str = "First line\n\tTabbed second line\nThird line";
console.log(str);

// Concatinating strings
console.log(newSection);
var str1 = 'I come first. ';
var str2 = 'I come second.';
console.log(str1 + str2);

var str3 = 'Hello ';
str3 += 'wo';
str3 += 'rld';
console.log(str3);

var myName = 'Bob';
var sentenceStart = 'My name is ' + myName + ", and I am well";
console.log(sentenceStart);

// Length of the string
console.log(newSection);
var myName = 'Joe'; 
console.log(myName.length); // var.length gives you the lenght of the string; similar to len(var)

// Bracketing
console.log(newSection);
var myName = 'Adamariz'; 
var firstLetter = myName[0]; // javascript, like python, use zero-based indexing
console.log(firstLetter);
var lastLetter = myName[myName.length - 1];  // find the last letter of the string; similar to myName[-1] in python
// to find the last letter you do var.length-1, to find the 3rd last letter you do var.length-3, and so on
console.log(lastLetter);

// Strings are immutable; the individual characters of the string cannot be changed but the string itself can
var helloWorld = "Jello World!";
// Can't do this:
// helloWorld[0] = 'H'
// Need to do this:
var helloWorld = "Hello World!";

// Word Blanks
console.log(newSection);
function wordBlanks(noun, adj, verb, adverb) {
    var result = `The ${adj} ${noun} ${verb} to the store ${adverb}.`; // Using tick marks (``) plus ${} works similar to f-strings in python
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
