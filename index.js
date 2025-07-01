let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;
const confettiColors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
        
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const hintDisplay = document.getElementById('hint');
const confettiContainer = document.getElementById('confetti-container');
        
guessButton.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});
        
function checkGuess() {
const userGuess = parseInt(guessInput.value);
            

if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100!";
    message.className = "text-red-400";
    return;
}
            
attempts++;
attemptsDisplay.textContent = attempts;
            
if (userGuess === targetNumber) {
    message.innerHTML = `🎉 <span class="font-bold">Correct!</span> You guessed the number in ${attempts} attempts! 🎉`;
    message.className = "text-green-400";
    guessInput.disabled = true;
    guessButton.disabled = true;
    createConfetti();
    hintDisplay.textContent = "You won!";
} 
else if (attempts >= maxAttempts) {
    message.textContent = `Game over! The number was ${targetNumber}.`;
    message.className = "text-red-400";
    guessInput.disabled = true;
    guessButton.disabled = true;
    hintDisplay.textContent = "Game over!";
} 
else {
    if (userGuess < targetNumber) {
        message.textContent = "Too low! Try a higher number.";
        message.className = "text-blue-300";
        hintDisplay.textContent = "Go higher!";
    } 
    else{
        message.textContent = "Too high! Try a lower number.";
        message.className = "text-purple-300";
        hintDisplay.textContent = "Go lower!";
    }
}
            
            guessInput.value = '';
            guessInput.focus();
        }
        
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `-10px`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.opacity = Math.random();
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = confetti.style.width;
        confettiContainer.appendChild(confetti);
                
        setTimeout(() => {
            confetti.remove();
            }, 5000);
            
        }
        }
        
// Focus input on page load
guessInput.focus();
