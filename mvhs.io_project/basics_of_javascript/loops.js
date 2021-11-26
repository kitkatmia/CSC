var age;
for (age = 1; age < 13; age ++){ // Every for loop has an initialization (age = 1), condition (run until age < 18), and incremement (like a step - in this case, it means add 1 to age every time)
    console.log(`You\'re a kid who is ${age} years old!`); // `text ${var} text` is the javascript version of python f-strings
}

var alphabet = ['A', 'B', "C"];
for (var i = 0; i < alphabet.length; i++) { // the initialization, condition, and increment are all optional (but you must have at least one)
    // Same as: 
    // for i in range(0, len(alphabet)): 
    //     i += 1
    //     print(f"Index {i} of the array is {alphabet[i]}")
    console.log(`Index ${i} of the array is ${alphabet[i]}`);
}

var i = 3;
while (i > -1) // while loops in javascript are basically the same as python
{
    console.log(`You have ${i} lives left`);
    i -= 1;
}

for (var i = 0; i < 100; i++)
{
    if (i == 5) {
        break // You can use break / continue statements in if-statements and for loops!
    }
    if (i % 2 == 0) {
        console.log(`${i} is an even number`);
        continue;
    }
    console.log(i + " is an odd number.");
}

