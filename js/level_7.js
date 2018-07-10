// level 7

// not understand yet, just try
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

let totitleacase = titleCase("Hello world and good bye")

console.log(totitleacase);