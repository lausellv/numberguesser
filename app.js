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
 console.log(guess);

 //validate our input (make sure it's not blank , it's not higher than the max or less than the min)
 if ( guess < min || guess > max || isNaN(guess)){
   setMessage(`Please enter a number between ${min} and ${max}`, `red`);
 }

 // check if won
 if (guess === winingNum){
// Disable input 
guessInput.disabled = true;
// make border green
guessInput.style.borderColor = 'green';
// set message
setMessage(`${winingNum} is correct!`, 'green');

 }else {}
});

// set msg
function setMessage (msg, color){
  message.style.color = color;
  message.textContent = msg;
}


