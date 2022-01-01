// A calback is a function that is passed into another function and then called inside that function to complete some action.

// Callback func: other_func(callback_func)
function greeting(response) {
    console.log(response)
    if (response) {
        alert('Hello!');
    }
    else {
        alert('Your loss!');
    }
}

function want_greeting(callback) {
  var response = confirm("Do you want to be greeted?");
  callback(response);
}

// Not a callback func: other_func(callback_func(parameter))
// Callback func again: other_func(() => callback_func(parameter))
function personalized_greeting(name) {
    console.log(name)
    alert(`Hello ${name}!`);
}

function user_name(callback) {
  var name = prompt("What is your name?");
  console.log(name);
  callback(name);
}
// EXTRA NOTE: avascript runs code sequentially unless you use asynchrounous programming (which is when a functin runs ONLY AFTER a certain condition is met). One way to do this is using the setTimeout function, which takes in the callback function and the number of miliseconds you want it to wait before calling the callback function.