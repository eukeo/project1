let guesses = 5;
let winGuesses = 6;
let myWord = ["PIXELS"];
let wordArray = ('PIXELS').split("");
let prompt = document.querySelector("p");

let buttons = document.getElementById("letters")
  console.log(buttons);
    buttons.addEventListener('click', eventClick)
function eventClick(event){
  console.log(event.target.textContent);
   
if (wordArray.includes(event.target.textContent)){
let divId = wordArray.indexOf(event.target.textContent)
  let divLetter = document.getElementById(`${divId}`)
    divLetter.textContent = event.target.textContent
    console.log("Correct!");
      event.target.style.backgroundColor = '#35ffa2'
      event.target.disabled = true;
        prompt.innerHTML = 'Correct!'
          winGuesses -= 1;
          console.log(winGuesses)
  } else {
    guesses -= 1;
    console.log("Incorrect!");
      event.target.style.backgroundColor = '#0091cd';
      event.target.disabled = true;
        prompt.innerHTML = 'Incorrect!'
          counter.innerHTML = (guesses + ' lives left!')
          console.log(guesses + ' lives left!');

  } if (guesses === 0){
      prompt.innerHTML = 'Game Over...'
      buttons.removeEventListener('click', eventClick)
        console.log("Game Over...")
  } if (winGuesses === 0){
      console.log(winGuesses)
      prompt.innerHTML = 'Winner!'
      buttons.removeEventListener('click', eventClick)
        console.log("Winner!")
    }
  };                                  