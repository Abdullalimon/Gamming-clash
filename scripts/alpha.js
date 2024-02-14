// function play(){
//     const homeSection = document.getElementById('start-page');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function continueGame(){
  const alphabet = getRandomAlphabet();
  console.log('your alphabets:',alphabet);

  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('start-page');
    showElementById('play-ground');
    continueGame()
}
