function openPlayerEditor(event) 
{
    playerIdentifier = +event.target.dataset['playerid'];

    playerConfigOverlay.style.display = 'block';
    backDrop.style.display = 'block';
}
function closePlayerEditor() 
{
    playerConfigOverlay.style.display = 'none';
    backDrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    playerConfigError.textContent = '';
    const inputUserNameElement = document.getElementById('playername');
    inputUserNameElement.value = '';
}
function savePlayerEditor(event) {
    event.preventDefault(); // prevent the page from automatically refreshes, block data being sent to a server.
    const formData = new FormData(event.target); // it passes the value to the form element.
    const enteredPlayerName = formData.get('username').trim(); // get the name attribute from our input element/

    if (!enteredPlayerName) 
    {
        event.target.firstElementChild.classList.add('error');
        playerConfigError.textContent = 'Enter a valid username please';
        errorTimes++;
        if (errorTimes == 7) 
        {
            
            audio.play();
            playerConfigError.textContent = 'ARE U FUCKING ILLITERATE????';
            playerConfigError.classList.add('error');
            errorTimes = 0;
        }
        else{
            playerConfigError.classList.remove('error');
        }
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-' + playerIdentifier + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    currentPlayers[playerIdentifier - 1].name = enteredPlayerName; // store entered player name
    closePlayerEditor();

}