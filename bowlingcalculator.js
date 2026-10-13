function calculateBowlingScore(bowlingRolls) {
    let totalScore = 0;
    let currentRoll = 0;

    for (let frameNumber = 1; frameNumber <= 10; frameNumber++) {
        if (bowlingRolls[currentRoll] === 10) {
            totalScore += 10 + bowlingRolls[currentRoll + 1] + bowlingRolls[currentRoll + 2];
            currentRoll++;
        }
        else if (bowlingRolls[currentRoll] + bowlingRolls[currentRoll + 1] === 10) {
            totalScore += 10 + bowlingRolls[currentRoll + 2];
            currentRoll += 2;
        }
        else {
            totalScore += bowlingRolls[currentRoll] + bowlingRolls[currentRoll + 1];
            currentRoll += 2;
        }

        console.log("Frame " + frameNumber + ": Total score = " + totalScore);
    }

    console.log("Final Score: " + totalScore);

    return totalScore;
}

let gameRolls = [
    10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10
];

calculateBowlingScore(gameRolls);