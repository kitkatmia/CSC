// Basic syntax of CONDTITONAL ternary operator (which is basically a shortened if-else conditional):
// condition ? statement-if-true: statement-if-false

function checkEqual(a, b) {
    console.log(a == b ? 'Equal' : 'Not Equal');
}
checkEqual(1, 2);
checkEqual(1, 1)

// Using multiple conditional ternary operators (nested)
function checkSign(num) {
    console.log(num > 0 ? 'positive': num < 0 ? 'negative': 'zero')
}

checkSign(0)
checkSign(1)
checkSign(-1)