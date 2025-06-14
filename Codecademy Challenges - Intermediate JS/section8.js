// Write your code here:

function shoutGreetings (arr) {
    let newArray = [];

    for(let i=0; i < arr.length; i++) {
        newArray[i] = `${arr[i].toUpperCase()}!`
    }

    return newArray;
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
