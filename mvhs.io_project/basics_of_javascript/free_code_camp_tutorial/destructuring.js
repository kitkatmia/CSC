// Destructuring is a way of assigning object properties to variables 
// BASIC SYNTAX: const {property: variableName} = objectName
const AVG_TEMP = {
    yesterday_2: 75,
    yesterday: 78,
    today: 79,
    tomorrow: 50
};

const {today: tempofToday, tomorrow: tempofTomorrow} = AVG_TEMP;
console.log(tempofToday, tempofTomorrow);