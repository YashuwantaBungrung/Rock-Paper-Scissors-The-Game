let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerMove) {
    let compMove = '';
    let result = '';
    let randomNumber = Math.random();
    
    if (randomNumber < 1 / 3) {
        compMove = 'Rock';
    } else if (randomNumber < 2 / 3) {
        compMove = 'Paper';
    } else {
        compMove = 'Scissors';
    }

    if (compMove === playerMove) {
        result = 'Tie';
        ties++;
    } else if (
        (playerMove === 'Rock' && compMove === 'Scissors') ||
        (playerMove === 'Paper' && compMove === 'Rock') ||
        (playerMove === 'Scissors' && compMove === 'Paper')
    ) {
        result = 'You Won';
        wins++;
    } else {
        result = 'You Lose';
        losses++;
    }

    alert(`You chose ${playerMove}, Computer chose ${compMove}. ${result}`);
    updateScorecard();
}

function updateScorecard() {
    if (losses===3){
        alert(`You have scored ${wins}`);
        wins = 0;
        losses = 0;
        ties = 0;
        alert(`Scorecard reset, as losses reached 3!`);
    }

    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;

  
}