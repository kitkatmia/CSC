// Intializing an object (which is very similar to python dictionaries)
var dog = {
    'name': 'Joe',
    'legs': 4,
    'tails': 1,
    'friend names': ['Bob', 'Sue']
};

// Accessing properties on an object
// Two ways to do this: dot notation and bracket notation (both of which are essentially the same as how you access different column in python pandas dataframes)
var dogName = dog.name; 
var legsValue = dog.legs;
var friendNames = dog['friend names']; // you can use bracket notation any time, but it's required if the key has a space in it
var tailNum = dog['tails'];
console.log(dogName, legsValue, friendNames, tailNum)

// Accessing properties of objects
var players = {
    12: 'Nat',
    13: 'Ajuni',
    14: 'Elsa'
}
var playerNumber = 13
var player = players[playerNumber]; // accessing the players based off of their number
console.log(player)

// Update object properties
var cat = {
    name: 'Mia',
    1: true,
    color: 'black',
};
// Way #1
cat[1] = false;
// Way #2
cat.name = 'Kitty';
console.log(cat);

// Add new properties to an object
cat.meow = true; // add property meow with value true
cat['Cuteness Level'] = 100; // adds property "Cuteness level" with value 100
console.log(cat);

// Deletings properties
delete cat[1];
delete cat.meow;
console.log(cat);

// Using objects to simplify code
// Original code:
function uglyCode(val) {
    var answer = "";
    switch (val) {
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
    };
    console.log(answer);
} 

// Better code
function prettierCode(val) {
    var lookup = {
        'Yo': 'Yo',
        2: 'Wassup',
        3: 'Good Gravy',
        4: 'Have a nice life',
        5: 'Bye'
    };
    result = lookup[val];
    console.log(result);
}

uglyCode(2); prettierCode(2);
uglyCode(5); prettierCode(5);
uglyCode('Yo'); prettierCode('Yo');

// Check if object has a property
var cat = {
    name: 'Mia',
    1: true,
    color: 'black',
};
function checkObj(checkProp) {
    if (cat.hasOwnProperty(checkProp)) { // hasOwnProperty check if checkProp is a key in the object cat
        console.log(cat[checkProp]);
    } else {
        console.log('Not found.')
    }
}
checkObj('name')
checkObj('cat')

// Accessing nested objects
var music = [
    {
        'artist': 'Taylor Swift',
        'title': 'The Music Industry',
        'Top 3 Albums': {
            1: 'Folklore',
            2: '1989',
            3: 'Red'
        }
    },
    {
        'artist': 'Adele Laurie Blue Adkins',
        'title': 'Adele',
        'Top 3 Albums': {
            1: '21',
            2: '25',
            3: '30'
        }
    }
];
var TaylorBestAlbum = music[0]['Top 3 Albums'][1] // bracket notation
var AdeleBestAlbum = music[1]['Top 3 Albums'][1]
console.log(TaylorBestAlbum, AdeleBestAlbum)
var firstArtist = music[0].artist // dot notation
console.log(firstArtist)

// Mini-project: Changing details of records
// Setup
const collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection))

// Only change code below this line
function updateRecords(records, id, prop, value) {
    /*
    If value = empty string --> delete property
    If prop = track --> add track to the end of tracks list
    */
    if (value == "") {
        delete collection[id][prop];
    } else if (prop == 'tracks') {
        collection[id][prop] = collection[id][prop] || []; // executing whichever statement ends up being true --> if a list within collectio[id][prop] aleady exists, we don't change it. If it doesn't, we create a list within it.
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return records;
}

console.log(updateRecords(collection, 2468, 'tracks', 'test'));
console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));