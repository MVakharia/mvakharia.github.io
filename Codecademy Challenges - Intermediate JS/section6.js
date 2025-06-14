const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log(`No  ${veg}  please. I will have pizza with extra cheese.`);
}

const begrudginglyAccept = (veg) => {
    console.log(`Ok, I guess I will eat some ${veg}.`);
}

function declineEverything (arr) {
    arr.forEach(politelyDecline);
}

declineEverything(veggies);

function acceptEverything (arr) {
    arr.forEach(begrudginglyAccept);
}

acceptEverything(veggies);

