console.log("hi");

const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    console.log(`The user picked ${userInput}`);
    return userInput;
  } else {
    console.log("Invalid input.");
  }
};

let getComputerChoice = function () {
  let index = Math.floor(Math.random() * 3);
  console.log(`The computer picked ${index}`);
  switch (index) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("Something went wrong.");
  }
};

let determineWinner = function (userChoice) {
  if (getUserChoice(userChoice) === getComputerChoice()) {
    return "The game was a tie.";
  }
  else if(getUserChoice(userChoice) === "rock") {
    if(getComputerChoice() === "paper") {
      return "The computer won.";
    }
    else if(getComputerChoice() === "paper") {
      return "The computer lost.";
    }
  }
};

console.log(determineWinner("rock"));
