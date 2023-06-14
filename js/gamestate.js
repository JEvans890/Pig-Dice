class GameState { 
    isPlayer1Turn = true;
    turnScore = 0;
    player1Score = 0;
    player2Score = 0;

    rollLogic(rollValue) {
        if (rollValue === 1) { 
            this.turnScore = 0;
            this.endTurn();
        }
        else {
            this.turnScore += rollValue;
        }
    }

    endTurn() {
        if (this.isPlayer1Turn) {
            this.player1Score += this.turnScore;
        }
        else {
            this.player2Score += this.turnScore;
        }

        this.isPlayer1Turn = !this.isPlayer1Turn;
        this.turnScore = 0;
    }
}

function testGameState() {
    let game = new GameState();
    console.log(game.isPlayer1Turn === true);
    console.log(game.turnScore === 0);
    console.log(game.player1Score === 0);
    console.log(game.player2Score === 0);
    game.rollLogic(6);
    console.log(game.isPlayer1Turn === true);
    console.log(game.turnScore === 6);
    console.log(game.player1Score === 0);
    console.log(game.player2Score === 0);
    game.rollLogic(1);
    console.log(game.isPlayer1Turn === false);
    console.log(game.turnScore === 0);
    console.log(game.player1Score === 0);
    console.log(game.player2Score === 0);
    game.rollLogic(5);
    console.log(game.isPlayer1Turn === false);
    console.log(game.turnScore === 5);
    console.log(game.player1Score === 0);
    console.log(game.player2Score === 0);
    game.endTurn();
    console.log(game.isPlayer1Turn === true);
    console.log(game.turnScore === 0);
    console.log(game.player1Score === 0);
    console.log(game.player2Score === 5);
}