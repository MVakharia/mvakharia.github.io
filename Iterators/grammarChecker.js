//A story with some unnecessary words, some misspellings, and a curse word.
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

//story = story.replace('breathtaking', 'stunning');

//Splits the string 'storyWords' into an array of strings.
// The split point is denoted by the parameter of 'split()', which is a single space.
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let correctWord = 'beautiful';
let badWord = 'freaking';
let replacedBadWord = 'really';

console.log(storyWords);


let count = 0;

//For each item in 'storyWords', increase 'count' by 1.
storyWords.forEach(word => { count++});

console.log("Word count: " + count);

//For each word in 'storyWords', if that word is not an unnecessary word, keep it in the array.
//'Filter' out all the unnecessary words.
storyWords = storyWords.filter(word => {
    if(word !== unnecessaryWord) {
        return word;
    }
});

//For each word in 'storyWords', if that word is 'misspelledWord', replace it with 'correctWord'.
storyWords = storyWords.map(word => {
    if(word === misspelledWord) {
        return correctWord;
    }
    return word;
});

let badWordsIndex = storyWords.findIndex(word => {return word === badWord});

console.log("The bad word is at index " + badWordsIndex);

storyWords[badWordsIndex] = replacedBadWord;

let lengthCheck = storyWords.every(word => {return word.length <= 10});

console.log(lengthCheck);

let longWordIndex = storyWords.findIndex(word => {return word.length > 10});

console.log(longWordIndex);

storyWords[longWordIndex] = 'stunning';

console.log(storyWords.join(' '));