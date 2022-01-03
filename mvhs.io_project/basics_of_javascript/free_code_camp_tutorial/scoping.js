// This kind of overlaps with a bunch of other stuff, but it's special (and [for now] confusing) enough to get it's own file.
var global = 10; // this is a global variable that can be refrenced anywhere within the code (includingi in function)

function func1() {
    // vvvvvvvvv IMPORTANT vvvvvvvvvvv
    // Since oopGlobal DOES NOT have the word "var" in front of it, it is automatically scoped as a GLOBAL variable
    // ^^^^^^ IMPORTANT ^^^^^^^^^^^
    oopsGlobal = 1;
    var localVar = 'Yo, Wassup'; // this, on the other hand, is a local variable that is only visible within the function
}

function fun2() {
    var output = "";
    if (typeof global != 'undefined') { // typeof just checks the type of the var/object/etc
        output += "Global var: " + global + '\n';
    }
    if (typeof oopsGlobal != 'undefined') {
        output += 'OopsGlobal var: ' + oopsGlobal + '\n';
    }
    if (typeof localVar != 'undefined') {
        output += 'localVar var: ' + localVar + '\n'; // typeof localVar == undefined but if you try to print it, you'll recieve an error (because it's not defined)
    }
    console.log(output);
}

func1();
fun2();

// Having local and global variables
var outerWear = 'shirt';
function myOutfit() {
    var outerWear = 'hoodie'; 
    return outerWear;
}
console.log(myOutfit()) // local variable takes predence over global variable
console.log(outerWear) // this just calls on the global var though