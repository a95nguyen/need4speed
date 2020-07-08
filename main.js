window.addEventListener('load', init);

// Global Var

// Available Levels
const levels = {
    easy: 5,
    medium: 3, 
    hard: 2
}

const levelWord = [
    'Easy', 
    'Medium',
    'Hard'
];

// To change level
let currentLevel = levels.easy;
let currentLevelWord = levelWord[0];
let time = currentLevel; 
let score = 0; 
let isPlaying; 

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    "paddle",
    "answer",
    "awesome",
    "distance",
    "fertile",
    "wakeful",
    "belief",
    "slippery",
    "bizarre",
    "learned"
  ];

  // Initialize Game
  function init() {
      // Show number of seconds in UI
      seconds.innerHTML = currentLevel;
      // Load word from array
      showWord(words);
      // Start matching on word input
      wordInput.addEventListener('input', startMatch);
      // Call countdown every second
      setInterval(countdown, 1000);
      // Check game status
      setInterval(checkStatus, 50);
  }

  // Start match
  function startMatch() {
      if(matchWords()) {
          isPlaying =  true;
          time = currentLevel + 1;
          showWord(words);
          wordInput.value = '';
          score++;
    } 
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
        currentLevel = levels.easy;
        time = currentLevel + 1;
        currentLevelWord = levelWord[0];
        seconds.innerHTML = currentLevel;
    } else if(score >= 10 && score < 20) {
        currentLevel = levels.medium;
        time = currentLevel + 1;
        currentLevelWord = levelWord[1];
        scoreDisplay.innerHTML = score;
        seconds.innerHTML = currentLevel;
    } else if(score >= 20) {
        currentLevel = levels.hard;
        time = currentLevel + 1;
        currentLevelWord = levelWord[2];
        scoreDisplay.innerHTML = score;
        seconds.innerHTML = currentLevel;

    } else {
        scoreDisplay.innerHTML = score;
    }
  }

  // Match currentWord to wordInput
  function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!'
        return true;
    } else {
        message.innerHTML = 'Level: ' + currentLevelWord;
        return false; 
    }
}

  // Pick & show random word
  function showWord(words) {
      // Generate random array index
      const randIndex = Math.floor(Math.random() * words.length);
      // Output a random word at the index
      currentWord.innerHTML = words[randIndex];
  }

  // Countdown timer
  function countdown() {
      // Make sure time is not run out
      if(time > 0) {
          // Decrament the time
          time --;
      } else if(time === 0) {
          // Game is over
          isPlaying = false;
      }
      // Show time
      timeDisplay.innerHTML = time;
  }

  // Check game status
  function checkStatus() {
      if(!isPlaying && time === 0) {
          message.innerHTML = 'Game Over!!!';
          score = -1;
      }
  }