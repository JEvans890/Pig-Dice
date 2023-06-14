function diceRoll() {
    const diceSides = 6;
    const randomNum = Math.random(); //[0,1)
    //randomNum * diceSides = [0,1) * 6 = [0, 6)
    //floor([0,6)) = 0 or 1 or 2 or 3 or 4 or 5
    // + 1
    return Math.floor(randomNum * diceSides) + 1;
}

function isWinning(score) {
    const winningThreshold = 20;
    return score >= winningThreshold;
}


