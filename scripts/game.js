const titleCard = document.querySelector('title');
const player1_symbol = document.getElementById('p1_symb');
const player2_symbol = document.getElementById('p2_symb');

function resetGame()
{
    activePlayerIdentifier = 0;
    currentRound = 1;
    gameisOver = false;
    gameOverElement.style.display ='none';
    let gameBoardIndex = 0;
    for( let i = 0; i < 3; i++)
    {
        for ( let j = 0; j < 3; j++)
        {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoard.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}
function startGame() {
    
    if (currentPlayers[0].name === '' && currentPlayers[1].name === '') {
        gameErrorForm.textContent = 'CAN YOU JUST INPUT YOUR GOD DAMN USERNAME??????';
        return;
    }
    else {
        gameErrorForm.textContent = '';
    }
    dmc5EasterEgg_Start();
    resetGame();
    currentPlayerName.textContent = currentPlayers[activePlayerIdentifier].name;
    gameArea.style.display = 'block';
    
}
    
function switchPlayer() {
    
    if (activePlayerIdentifier === 0) {
        activePlayerIdentifier = 1;
    }
    else {
        activePlayerIdentifier = 0;
    }
    currentPlayerName.textContent = currentPlayers[activePlayerIdentifier].name;
}
function selectGameBox(event) {
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0 || gameisOver) 
    {
        return;
    }

    selectedField.textContent = currentPlayers[activePlayerIdentifier].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayerIdentifier + 1;
    //console.log(gameData);
    const winnerId = checkForGameOver();
    //console.log(winnerId);
    currentRound++;
    switchPlayer();
    
    if(winnerId !== 0)
    {
        endGame(winnerId);
    }
}
function checkForGameOver() 
{
    for(let i = 0; i < 3; i++) // checking rows (horizontal)
    {
        if (gameData[i][0] > 0 && ( gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2] ))
        {
            return gameData[i][0];
        }
    }

    for(let i = 0; i < 3; i++) // checking columns (vertical)
    {
        if (gameData[0][i] > 0 && ( gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i] ))
        {
            return gameData[0][i];
        }
    }
    // diagonal left to bottom right
    if( gameData[0][0] > 0 && (gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) )
    {   
        return gameData[0][0];
    }
    // diagonal right to bottom left
    if( gameData[2][0] > 0 && (gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) )
    {   
        return gameData[2][0];
    }
    
    if(currentRound === 9)
    {
        return -1; //draw
    }
    return 0;
}
function endGame(winnerId)
{
    gameisOver = true;
    gameOverElement.style.display ='block';
    dmc5EasterEgg_end();
    if(winnerId > 0)
    {
        const winnerName = currentPlayers[winnerId - 1].name;
        winnerNameElement.textContent = winnerName;
    }
    else
    {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw';
    }
    
}
