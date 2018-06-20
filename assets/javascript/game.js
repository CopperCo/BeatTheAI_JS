// VARIABLES
var userChoice;
var wins = 0;
var losses = 0;
var guessesRemain = 9;
var guessedByUser = [];
var gameOver = false;

// Determine the Computers Guesses
var lettersComp = "abcdefghijklmnopqrstuvwxyz".split("");

var randGuess = lettersComp[Math.floor(Math.random() * lettersComp.length)];
console.log("Computer choice is: " + randGuess);

// USER GUESS
document.onkeyup = function(event) {
  userChoice = event.key;
  guessedByUser.push(userChoice);
  console.log("User choice is: " + userChoice);
  console.log(guessedByUser);

  //Compare Guess

  if (userChoice == randGuess) {
    // alert("You guessed right");
    wins++;
    guessesRemain = 9;
    guessedByUser = [];
    console.log("User guessed right");
  } else {
    guessesRemain--;
    console.log("Remaining Guesses: " + guessesRemain);
  }

  if (guessesRemain == 0) {
    losses++;
    guessesRemain = 9;
  }

  if (wins == 5 || losses == 5) {
    gameOver = true;
  }

  if (gameOver == true) {
    location.reload();
  }

  // while (wins == 5) {
  //   if (confirm("Play again?")) {
  //     document.reset();
  //   }
  // }

  // Function
  function arrGuess() {}

  // update html
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("loss").innerHTML = "losses: " + losses;
  document.getElementById("remainingGuesses").innerHTML =
    "Guesses left: " + guessesRemain;
  document.getElementById("userGuess").innerHTML =
    "You've guessed so far: " + guessedByUser.toString();
};
