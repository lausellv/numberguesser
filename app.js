// game values
let min =1,
max = 10,
winingNum = 2,
guessesLeft =3;

//UI elements
const game = document.querySelector('#game'),
 maxNum = document.querySelector('.max-num'),
 minNum = document.querySelector('.min-num'),
 guessBtn = document.querySelector('#guess-btn'),
 guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// list for guess
guessBtn.addEventListener('click', function() {
 let guess =  parseInt(guessInput.value);
 

 //validate our input (make sure it's not blank , it's not higher than the max or less than the min)
 if ( guess < min || guess > max || isNaN(guess)){
   setMessage(`Please enter a number between ${min} and ${max}`, `red`);
 }

 // check if won
 else if (guess === winingNum){

  gameOver(true,`Game over! ${winingNum} is correct!`) ;
// // Disable input // Game over won
// guessInput.disabled = true;
// // make border green
// guessInput.style.borderColor = 'green';
// // set message
// setMessage(`${winingNum} is correct!`, 'green');

//if they don't guess
 }else  {
guessesLeft -=1;
if (guessesLeft === 0){
  gameOver(false, `Game over, you lost. The correct number was ${winingNum}.`)
  // game over -  lost 
// guessInput.disabled = true;
// setMessage(`Game over, you lost. The correct number was ${winingNum}.`, 'red');


 
}  else {
  // game continues bc answer is wrong and he still has guesses left . Tell user his guess is not correct
  setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
  // make border red
guessInput.style.borderColor = 'red';

// clear the input as well (the number that they chose)
guessInput.value = '';
}

 }
});


// game over 
function gameOver (won, msg){
  let color;
  won === true ? color='green' : color='red';
// Disable input // Game over won
guessInput.disabled = true;
// change border color 
guessInput.style.borderColor = color;
// change text msg color
message.style.color = color;

setMessage(msg);


}

// set msg
function setMessage (msg, color){
  message.style.color = color;
  message.textContent = msg;
}


