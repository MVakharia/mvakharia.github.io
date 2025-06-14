/*Functions as data*/

//A function with an annoyingly long name
const checkThatThreePlusThreeEqualsSixTwoMillionTimes = () => {
    for (let i=1; i < 2000000; i++) {

        if((3+3) !== 6) {
            console.log('Something has gone very wrong.');
        }
    }
}

//Declaring a new variable with a much shorter name and setting it to the value of the function.
const isThreePlusThree = checkThatThreePlusThreeEqualsSixTwoMillionTimes;

//Invoking the variable as a function.
isThreePlusThree();

//Getting the name of the original function.
console.log(isThreePlusThree.name);






/*Functions as parameters*/

//A function that adds 2 to whatever is passed into it.
const addTwo = num => {
    return num + 2;
}

//A function that checks if the function passed into it
// adds 2 to a number passed into that function.
//This is a very obtuse way to teach functions as parameters (in C# we'd call them delegates).
//It isn't the way I'd teach it at all. If you want to know how I'd teach it, scroll down.
const checkConsistentOutput = (func, val) => {
    //A new variable that is two more than the value of 'val', the second parameter of this function.
    let checkA = val + 2;
    //I'm not even going to bother trying to explain this.
    //It only made sense to me upon revisiting it after writing the lesson below.
    let checkB = func(val);

    if(checkA === checkB) {
        return checkB;
    }
    else {
        return 'inconsistent results';
    }
}
console.log(checkConsistentOutput(addTwo, 12));




/*Here we go. Function as parameters: the correct way to teach this topic:*/

/*Keep It Simple, Stupid!*/

//This is a function. It adds 5 to whatever number we pass in.
const addFive = num => {
    return num + 5;
}

//This is a variable we use to test the function. It invokes 'addFive' with a parameter of 3, which outputs 8.
let eight = addFive(3);

console.log(eight);

//This is another function. It adds 6 to whatever number we pass in.
const addSix = num => {
    return num + 6;
}

//A variable we use to test the function. It invokes 'addSix' with a parameter of 10, which outputs 16.
let sixteen = addSix(10);

console.log(sixteen);

//Since 'func1' and 'func2' are parameters for 'addTwoFunctions',
//'func1' and 'func2' can't have their own parameters.
//So the parameters for the functions that are passed into 'func1' and 'func2',
//which are 'param1' and 'param2', instead become parameters for 'addTwoFunctions'.
//So now all 4 of these elements are parameters of one function.
const addTwoFunctions = (func1, param1, func2, param2) => {
    //In the body of the function, we reinsert the parameters into the functions.
    return func1(param1) + func2(param2);
}

//Four parameters: the first function, its parameter, the second function, and its parameter.
//Adds 5 to a number and adds 6 to a number, and adds those two numbers together.
console.log(addTwoFunctions(addFive, 3, addSix, 4));

//And done.