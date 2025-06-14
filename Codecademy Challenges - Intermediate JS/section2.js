// Write your code here:

function reverseArray(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray[i] = array[array.length - (i + 1)];
    }

    return newArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];
