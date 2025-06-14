// Write your code here:

function convertToBaby (arr) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        newArray[i] = `baby ${arr[i]}`;
    }

    return newArray;
}




// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))
/*
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
*/