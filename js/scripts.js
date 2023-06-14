//Business Logic
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


//UI Logic
function handleEndTurn(game) {
    game.endTurn();
    updateDisplay(game);
}

function handleRoll(game) {
    const rollValue = diceRoll();
    game.rollLogic(rollValue);
    updateDisplay(game);
}

function updateDisplay(game) {
    let player1Score = document.querySelector(".score1");
    let player2Score = document.querySelector(".score2");
    let turn = document.querySelector("#turn h2");
    let turnScore = document.querySelector("#turnScore #score");

    player1Score.innerText = game.player1Score
    player2Score.innerText = game.player2Score
    if (game.isPlayer1Turn === true) {
        turn.innerText = "Player1";
    }
    else {
        turn.innerText = "Player2";
    }
    turn.innerText += ", it is your turn!";
    turnScore.innerText = game.turnScore;
}

window.onload = function () {
    let game = new GameState();
    endTurnButton = document.getElementById("endTurn");
    rollButton = document.getElementById("roll");
    endTurnButton.addEventListener("click", function () { handleEndTurn(game) })
    rollButton.addEventListener("click", () => handleRoll(game))
}