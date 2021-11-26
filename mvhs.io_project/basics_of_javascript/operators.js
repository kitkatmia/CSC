var a = 3;
var b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b); // basically very similar math operators to python

// More usefully, though, you can do things like a = a - b in one line 
var c = 0;
c += a;
console.log(c);
c *= 2;
console.log(c);

var str = 'Hello';
console.log(str * 2); // different than python; cannot multiply strings
console.log(str + 1); // different than python in the way it converts the int/float to a str and then "adds" them