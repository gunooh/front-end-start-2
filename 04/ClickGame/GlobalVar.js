/* Game View Element */
var gameScreen = document.getElementById('game-screen');
/* Game View info */
var scrWidth = gameScreen.clientWidth;
var scrHeight = gameScreen.clientHeight;

/* Game state element */
var score = document.getElementById('score');
var level = document.getElementById('level');
var miss = document.getElementById('miss');
var chance = document.getElementById('chance');
/* Game State info */
var bGameStart = true;
var curScore = 0;
var curLevel = 1;
var curMiss = 0;
var curChance = 11;
var nInterval = 1500;
