// Write your code here:


const justCoolStuff = (arr0, arr1) => arr0.filter(item => arr1.includes(item));


//As a function declaration:
function justCoolStuff1(arr0, arr1) {
    function isInSecondArray (item) {
        for(let i=0;i < arr1.length; i++) {
            if(arr1[i] === item) {
                return true;
            }
        }
        return false;
    }
    return arr0.filter(isInSecondArray);
}

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff1(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

