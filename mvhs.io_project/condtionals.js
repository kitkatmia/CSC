var hour = 15;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

console.log("1" == 1); // Ignores types of element; only compares values (so it returns true)
console.log("1" === 1); // Does a strict comparison; compares the type and content (so it returns false)

var eggs = true;
var bacon = true;
if (bacon===true && eggs===true) { // && is the same as "and" in python
    console.log('Make bacon and eggs for breakfast!');
}

var money = 0;
var hunger = 0;
if (money <= 0 || hunger === 0) { // || is the same as the "or" operator in pytho
    console.log('No food for you!');
}

var pets = false;
if (!pets) { // !pets = not pets; similar to how in python != equals 'not equal to'
    console.log('Cool!')
}
else {
    console.log('Not as cool...')
}


var fruit = "Banana";
switch(fruit) { // a switch statement is basically saying a bunch of if-statements saying if var == ____, do ____
    case "Banana": // case means if switch var == (for ex:) Banana, then...
    case "Tomato": // the double stacked cases mean if var == x OR var == x, then...
        console.log('Eh, you\'re an ok fruit.');
        break // You must use the break statement or the code will automatically run the next block(s) (in this case printing "Ooh pretty good", "Delicious", and "You may be good or bad. Who knows? -\_O_O_/-")
    case "Kiwi":
        console.log("Ooh, pretty good!");
        break
    case "Mango":
        console.log("Delicious!");
        break
    default: // the default is like the else statement
        console.log('You may be good or bad. Who knows? -\\_O_O_/-');
        break
}