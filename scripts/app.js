let playerIdentifier = 0;
let activePlayerIdentifier = 0;
let errorTimes = 0;
let currentRound = 1;
let gameisOver = false;
var audio = document.getElementById('audio');
var dmc5duel = document.getElementById('dmc5duel');
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const currentPlayers = [
    { 
        name: '', 
        symbol: 'X' 
    },
    { 
        name: '', 
        symbol: 'O' 
    }
];

const editPlayer1Btn = document.getElementById('edit-player1-btn');
const editPlayer2Btn = document.getElementById('edit-player2-btn');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');
const gameStarterBtn = document.getElementById('gamestart');

const formElement = document.querySelector('form');
const playerConfigOverlay = document.getElementById('config-overlay');
const backDrop = document.getElementById('backdrop');
const playerConfigError = document.getElementById('config-error');
const gameArea = document.getElementById('active-game');
const gameErrorForm = document.getElementById('game-error');
const gameBoard = document.getElementById('game-board');
const gameField = document.querySelectorAll('#game-board li');
const currentPlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const winnerNameElement = document.getElementById('winner-name');

editPlayer1Btn.addEventListener('click', openPlayerEditor);
editPlayer2Btn.addEventListener('click', openPlayerEditor);

cancelBtn.addEventListener('click', closePlayerEditor);
backDrop.addEventListener('click', closePlayerEditor);

formElement.addEventListener('submit', savePlayerEditor);

gameStarterBtn.addEventListener('click', startGame);

for (const gameBox of gameField)
{
    gameBox.addEventListener('click', selectGameBox);
}