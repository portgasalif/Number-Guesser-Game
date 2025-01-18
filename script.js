let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomInt = Math.floor(Math.random() * 10);

    return randomInt;
};

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Number should between 0 and 9");
    }
    const humanDiff = getAbsoluteDistance(targetNumber, humanGuess);
    const computerDiff = getAbsoluteDistance(targetNumber, computerGuess);

    if (humanDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};
