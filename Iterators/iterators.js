/*The 'forEach' iterator method.*/

//An array of strings containing names of fruits.
const fruits = ['strawberry', 'grape', 'cherry', 'pineapple'];

/*
C# syntax:
foreach(fruit in fruits) {
    Console.WriteLine($"I want to eat a ${fruit}.");
}
*/
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));
//The 'in' keyword is used in a 'for...in' loop, not in a 'foreach' loop.

/*The 'map' iterator method.*/

//An array of strings containing animal names. The first letter of each string spells out 'Hello World'.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//Each string is an array of chars. 'secretMessage' finds and returns the first char in each string.
//Then, it places each char into an array of chars.
const secretMessage = animals.map(animal => {return animal[0]});

//Prints the above array of chars.
console.log(secretMessage);

//Joins the array of chars together to form a string.
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const smallNumbers = bigNumbers.map(bigNumber => {return bigNumber / 100});

console.log(smallNumbers);

//The 'filter' iterator method.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallRandomNumbers = randomNumbers.filter(num => {return num < 250});

console.log(smallRandomNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavouriteWords = favoriteWords.filter(word => {return word.length > 7});

console.log(longFavouriteWords);

//The 'findIndex' iterator method.

//An array of strings containing animal names.
const moreAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//Logs the array of strings.
console.log(moreAnimals);

//Uses 'findIndex' to locate the index of the string that is equivalent to the string 'elephant'.
const foundAnimal = moreAnimals.findIndex(animal => {return animal === 'elephant'} );

//Logs the found index.
console.log(foundAnimal);

//Uses 'findIndex' to locate the index of the string that starts with the letter 's'.
const startsWithS = moreAnimals.findIndex(animal => {return animal[0] === 's'});

console.log(startsWithS);

/*The 'reduce' function.*/

//I've followed the Codecademy lesson, I've read the documentation, and I'm still no closer to understanding what it does.

const newNumbers = [1,3,5,7];

//Returns a single value after iterating through the elements of an array.
const newSum = newNumbers.reduce(function (accumulator, currentValue)
    {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator * currentValue;
});

console.log(newSum + " is the final value.");

/*Exercise - Iterator Documentation*/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

//'some()' is a conditional that returns true if the curly-braced criteria is met for one element in the array.
//In this example, we're asking it to return true if one word in the array 'words' is less than 6 characters.
console.log(words.some(word => { return word.length < 6 }) );

//Declares a new list and initialises it to the old list,
//but 'filtered' down to only include words of more than 5 characters.
const interestingWords = words.filter(word => {return word.length > 5});

console.log(interestingWords);

//Returns true if 'every' word is 5 characters or more.
console.log(interestingWords.every(word => {return word.length > 5}));

console.log("\n\n\n");

/*Exercise - Choosing The Right Iterator*/

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

/*Passing a function as a 'forEach' argument, without the function parameter.*/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log(`No  ${veg}  please. I will have pizza with extra cheese.`);
}

//Instead of requiring the user to explicitly define a 'let item in arr',
//the 'item' is implicitly defined.
function declineEverything (arr) {
    arr.forEach(politelyDecline);
    //instead of
    //arr.forEach(item => {politelyDecline(item)});

    //In this second case, we're explicitly defining 'item' and setting 'item' as the parameter,
    //which is redundant.
}

declineEverything(veggies);

/*Filtering items in common between two arrays*/

//As a 'const':
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

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/*Sorting objects by one of their shared properties*/

const speciesArray = [
    {speciesName:'shark', numTeeth:50},
    {speciesName:'dog', numTeeth:42},
    {speciesName:'alligator', numTeeth:80},
    {speciesName:'human', numTeeth:32}
];

//Sorts the array of objects by 'numTeeth', in ascending order.
function sortSpeciesByTeeth(arr) {
    return arr.sort(function (a, b) {
        return a.numTeeth - b.numTeeth
    });
}

console.log(sortSpeciesByTeeth(speciesArray));