// Basic if-else syntax
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller"
    }
    console.log(result)
}
testElse(3)

// Else-if statement (used when multiple conditions are needed to be accessed) (like elif in python)
function greaterThan(val) {
    var result = '';
    if (val > 15) { // order is very important in else-if statement; if the val > 5 block was run before this, result would never be = to "Bigger than 10"
        result = "Bigger than 15"; 
    } else if (val > 10) {
        result = "Bigger than 10";
    } else if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "Smaller or equal to 5";
    }
    console.log(result)
}
greaterThan(7)

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", 'Double Bogey', "Go home lol."]
function golfScorer(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par-2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScorer(5, 4));

// Switch Statement
function caseInSwitch(val) {
    var answer = '';
    switch(val) {
        case 1: // basically: if case == 1: doStuff
            answer = 'alpha';
            break; // break means that you're at the end of a case statement
        case 2:
            answer = 'beta';
            break; // if you don't have a break statement, the program would run through the next case statement automatically (ie assumes the next statement is true and, in this case, the answer would become gamma)
        case 3:
            answer = 'gamma';
            break;
        default: // this is like the else statement
            answer = 'person';
            break;
    }
    console.log(answer)
}
caseInSwitch(1)
caseInSwitch('yo')

// Switch Statement: special edition (multiple inputs - 1 output)
function sequentialSizes(val) {
    var answer = '';
    switch(val) {
        case 1:
        case 2: // because there are no break statements between the cases, the program keeps going to the next case automatically
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5: 
        case 6:
            answer = "Mid";
            break;   
        case 7:
        case 8: 
        case 9:
            answer = "High";
            break;    
    }
    console.log(answer);
}
sequentialSizes(1);
sequentialSizes(5);
sequentialSizes(7);

// Replacing if-else statements with switch statements
function uglyConditional(val) { // this is the messy if-else function
    var answer = "";
    if (vall == 'Yo') {
        answer = 'Yo';
    } else if (val == 2) {
        answer = 'Wassup';
    } else if (val == 3) {
        answer = 'Good gravy';
    } else if (val == 4) {
        answer = 'Have a nice life';
    } else if (val == 5) {
        answer = 'Bye';
    }
    console.log(answer)
}

function prettierConditional(val) { // this is the cleaner switch statement function
    var answer = "";
    switch(val) {
        case 'Yo':
            answer = 'Yo';
            break;
        case 2:
            answer = 'Wassup';
            break; 
        case 3:
            answer = 'Good Gravy';
            break;      
        case 4:
            answer = 'Have nice life';
            break;   
        case 5:
            answer = 'Bye';
            break;                        
    }
    console.log(answer)
}