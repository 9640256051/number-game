let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let message = '';
    
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message = 'Please enter a valid number between 1 and 100.';
    } else {
        userGuess = Number(userGuess);
        guesses.push(userGuess);
        if (userGuess === randomNumber) {
            message = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses.length} attempts.`;
        } else if (userGuess < randomNumber) {
            message = 'Too low! Try again.';
        } else {
            message = 'Too high! Try again.';
        }
    }
    
    document.getElementById('message').textContent = message;
    document.getElementById('previousGuesses').textContent = `Previous guesses: ${guesses.join(', ')}`;
    document.getElementById('userGuess').value = '';
}
