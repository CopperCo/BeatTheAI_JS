// FUNCTIONS
function resetBoard() {
  guessesRemain = 9;
  guessedByUser = [];
  randGuess = lettersComp[Math.floor(Math.random() * lettersComp.length)];
  console.log('Computer choice is: ' + randGuess);
}

function resetGame() {
  wins = 0;
  losses = 0;
  resetBoard();
  updateUI();
}

function isValidGuess(letterString) {
  if (lettersComp.includes(letterString)) {
    if (guessedByUser.includes(letterString)) {
      alert('Sadly, you already picked that letter... Try another letter.');
      return false;
    } else {
      return true;
    }
  }
  alert('Opps... I only picked a letter in the alphabet, you should too...');
  return false;
}

function updateUI() {
  document.getElementById('wins').innerHTML = 'Wins: ' + wins;
  document.getElementById('loss').innerHTML = 'Losses: ' + losses;
  document.getElementById('remainingGuesses').innerHTML =
    'Guesses left: ' + guessesRemain;
  document.getElementById('userGuess').innerHTML =
    "You've guessed so far: " + guessedByUser.toString();
}

// VARIABLES
var userChoice;
var wins;
var losses;
var guessesRemain;
var guessedByUser;
var lettersComp = 'abcdefghijklmnopqrstuvwxyz'.split('');
var randGuess;

resetGame();

// USER GUESS
document.onkeyup = function(event) {
  userChoice = event.key.toLowerCase();
  if (isValidGuess(userChoice)) {
    guessedByUser.push(userChoice);

    //Compare Guess

    if (userChoice == randGuess) {
      wins++;
      resetBoard();
    } else {
      guessesRemain--;
    }

    if (guessesRemain == 0) {
      losses++;
      resetBoard();
    }

    // update html
    updateUI();

    if (wins == 5 || losses == 5) {
      if (wins == 5) {
        alert("Congrats you're the WINNER!");
      } else {
        alert('Sorry... Please comeback again!');
      }
      resetGame();
    }
  }
};
