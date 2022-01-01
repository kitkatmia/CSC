// Objects are basically python dictionaries
var cat_details = {
    Name: 'Joe', // note that the key - "Name" - isn't presented as a string but rather as a variable would be
    Profession: 'Cat'
}

// Two ways to append things to a dictionary:
// 1.)
cat_details.age = 5;
// 2.)
cat_details["fluffiness_level"] = '100%';

// How to change the value of a key:
cat_details.Name = 'Mia' // You can also do cat_details["Name"]


// How to iterate through a dictionary:
for (var member in cat_details) { // the key is called a "member"
    if (cat_details.hasOwnProperty(member)) { // .hasOwnProperty(member) simply checks if such a key (member) exists within the dictionary (object)
        console.log("The member " + member + " of cat_details is " + cat_details[member]);
    }
}