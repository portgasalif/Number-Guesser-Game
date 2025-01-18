let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomInt = Math.floor(Math.random() * 10);

    return randomInt;
    console.log(generateTarget());
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDiff = Math.abs(targetNumber - humanGuess);
    const computerDiff = Math.abs(targetNumber - computerGuess);

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
