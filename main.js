let phase = 'waiting';
let lastTimeStamp;

let heroX;
let heroY;
let sceneOffSet;

let platform = [];
let stick = [];

let score = 0;

// CONFIG

const canvas = document.getElementById('game');

// Drawing context
const ctx = canvas.getContext('2d');

// UI Elements
const scoreElement = document.getElemntById('score');
const restartElement = document.getElementById('restart');

// Start game
resetGame();

// Reset game state and layout
const resetGame = () => {
  // Reset game state
  phase = 'waiting';
  lastTimeStamp = undefined;

  platforms = [{ x: 50, w: 50 }];

  generatePlatforms();
  generatePlatforms();
  generatePlatforms();
  generatePlatforms();

  // Init hero position
  heroX = platform[0].x + platformp[0].w - 30;
  heroY = 0;

  draw();
};

const draw = () => {};

window.addEventListener('mousedown', (e) => {});

window.addEventListener('mouseup', (e) => {});

const animate = (timestamp) => {};
