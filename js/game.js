// variables
var numSquares = 3;
var colors = [];
var correctColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var newGameButton = document.getElementById('new-game');
var mode = document.querySelectorAll('.mode');
var wholeBody = document.querySelector('body');
var score = 0;
var theme = 'mistyrose';

function check() {
  console.log('test');
}

playGame();

function playGame() {
  difficulty();
  interactiveSquares();
  newGame();
}

// Setup difficulty level buttons
function difficulty() {
  for (var i = mode.length - 1; i >= 0; i--) {
    mode[i].addEventListener('click', function() {
      for (var i = mode.length - 1; i >= 0; i--) {
        mode[i].classList.remove('default');
      }
      this.classList.add('default');
      switch (this.textContent) {
        case 'Easy':
          numSquares = 3;
          break;
        case 'Hard':
          numSquares = 6;
          break;
      }
      newGame();
    });
  }
  // Set default difficulty to easy
  mode[1].classList.add('default');
}

// ability to click squares, and add the colors
function interactiveSquares() {
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].addEventListener('click', function() {
      var clickedColor = this.style.backgroundColor;
      // adds point to score
      if (clickedColor === correctColor) {
        messageDisplay.textContent = 'Correct!'
        h1.style.backgroundColor = correctColor;
        score++;
        scoreboard.textContent = 'Score: ' +score;
      } else {
        this.style.backgroundColor = theme;
        messageDisplay.textContent = 'No'
      }
    });
  }
}

// function to start new game
function newGame() {
  colors = generateRandomColors(numSquares);
  correctColor = winningColor();
  colorDisplay.textContent = correctColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  messageDisplay.textContent = '';
  newGameButton.textContent = 'New Colors';
  h1.style.backgroundColor = theme;
}

// Picks the color
function winningColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Gives a random rgb code to, makes it a string
function randomRGB() {
  let rValue = Math.floor(Math.random() * 256);
  let gValue = Math.floor(Math.random() * 256);
  let bValue = Math.floor(Math.random() * 256);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

// Generates the number of squares based on difficulty selected
function generateRandomColors(numSquares) {
  let arr = [];
  for (var i = numSquares - 1; i >= 0; i--) {
    arr.push(randomRGB());
  }
  return arr;
}

// makes it listen for click to run newgame function
newGameButton.addEventListener('click', newGame);