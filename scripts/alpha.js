
function keyboardHandleButtonPress(event) {
  const playerPressed = event.key;
  console.log(playerPressed);
  
if(playerPressed === 'Escape'){
  gameOver();
}

  const currentAlphabetElement = document.getElementById('current-alphabet');

  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log('you get a point');

    const currentScore = getTextElementValueById('current-score');
    // console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else {
    console.log('you lost your life');
    const currentLife = getTextElementValueById('current-life');
    // console.log(currentLife);
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);
    if (updatedLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener('keyup', keyboardHandleButtonPress)
function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById('start-page');
  hideElementById('final-score');
  showElementById('play-ground');

setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0);

  continueGame()
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
  const lastScore = getTextElementValueById('current-score');
  setTextElementValueById('last-score',lastScore);

  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);

}
