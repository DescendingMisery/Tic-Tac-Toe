const bodyElement = document.querySelector('body');
const turnParaElement = document.getElementById('turn');

function dmc5EasterEgg_Start() 
{
    if ((currentPlayers[0].name === 'Vergil' && currentPlayers[1].name === 'Dante')) {
        player1_symbol.classList.add('p1');
        player2_symbol.classList.add('p2');
        dmc5duel.play();
        titleCard.textContent = 'THE DUEL';
        bodyElement.classList.add('dmc5');
        currentPlayerName.classList.add('dmc5');
        turnParaElement.classList.add('dmc5');
    }
    else if (currentPlayers[0].name === 'Dante' && currentPlayers[1].name === 'Vergil') {
        player1_symbol.classList.add('p2');
        player2_symbol.classList.add('p1');
        dmc5duel.play();
        titleCard.textContent = 'THE DUEL';
        bodyElement.classList.add('dmc5');
        currentPlayerName.classList.add('dmc5');
        turnParaElement.classList.add('dmc5');
    }

}
function dmc5EasterEgg_active() // changes color of each tile for each player ( Dante/Vergil )
{
    if(activePlayerIdentifier === 0)
    {
        for(const fieldBox of gameField)
        {
            fieldBox.classList.add('vergil');
            fieldBox.classList.remove('disabled');
        }
    }
}
function dmc5EasterEgg_end()
{
    dmc5duel.pause();
    bodyElement.classList.remove('dmc5');
}
function dbzEasterEggStart() {

}