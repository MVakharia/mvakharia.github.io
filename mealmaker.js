//Within 'menu', 'meal' needs to be a string and 'price' needs to be a number.

const menu = {
    //The '_meal' property.
    _meal: '',

    //The '_price' property.
    _price: 0,

    //A 'set' accessor. The value of the '_meal' property is set using this accessor.
    //The 'mealToCheck' argument becomes the value that the user assigns to 'meal'.
    set meal(mealToCheck) {
        if(typeof mealToCheck === 'string') {
            //Assigns the value of 'mealToCheck' to the '_meal' property.
            return this._meal = mealToCheck;
        }
    },

    //A 'set' accessor. The value of the '_price' property is set using this accessor.
    //The 'priceToCheck' argument becomes the value that the user assigns to 'price'.
    set price(priceToCheck) {
        if(typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        //If the 'meal' property and the 'price' property both have values,
        if(this._meal && this._price) {
            //Return the correct output.
            return `Today's special is ${this._meal} for $${this._price}!`
        }
        else {
            return `Meal or price not set correctly!`;
        }
    }
}

//This invokes the 'meal' setter, as we're setting the value of 'meal'.
//Through the setter, 'mealToCheck' is assigned the value '399'.
//The 'if' statement in the setter then checks if '399' is a string.
//If it is, the '_meal' property in 'menu' is assigned the value '399'.
menu.meal = 399;

//This invokes the setter, as we're setting the value of 'price'.
menu.price = 'Five Pounds';

//This will fail the type check.
console.log(menu);

//This will log a message telling you that the price hasn't been set correctly.
console.log(menu.todaysSpecial);

//This invokes the setter, as we're setting the value of 'meal'.
menu.meal = 'Pasta';

//This invokes the setter, as we're setting the value of 'price'.
menu.price = 16;

//This will pass the type check.
console.log(menu);

//This will display the intended output.
console.log(menu.todaysSpecial);

