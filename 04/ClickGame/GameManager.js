/////////Global Variable

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
/* Game State Data */
var bGameStart = true;
var curScore = 0;
var curLevel = 1;
var curMiss = 0;
var curChance = 11;
var nInterval = 1500;



/**************** Game Manager Object ****************/
function GameManager(){
    
    //private
    /* member: Moving Box */
    var clickMe = new movingBox();
    
    
    //public
    /* Game Start Function */
    this.start = function(){
        
        // Initialize Game State
        (function(){
            score.innerHTML = curScore;
            level.innerHTML = curLevel;
            miss.innerHTML = curMiss;
            chance.innerHTML = curChance;
        })();
        
        
        // Check Game State
        var checkGameState = (function(){
            //be needed SCORE to pass the current level.
            var needScore = 8;
            
            return function(){
                /* Game End Check */
                if(curMiss >= curChance)
                {
                    bGameStart = false;
                
                    clearInterval(timerId);
                    clickMe.initRect(bGameStart);
                    
                    setTimeout(function(){
                        gameScreen.innerHTML = 'Game End';
                    }, 1000);
                }
                /* Next Level Check */
                if(curScore >= needScore){
                    curLevel += 1;
                    level.innerHTML = curLevel;
                    
                    needScore += needScore;
            
                    if(curChance - 5 <= 0){
                        bGameStart = false;
                        return;
                    }
                    curChance = curChance - 5;
                    chance.innerHTML = curChance;
                }
            };
        })();
        
        /* On timer callback function */
        var timerId = setInterval(function(){
            
            //1. change box position
            clickMe.changePos();
            //2. check "Game state"
            checkGameState();
            
        }, nInterval);
        
        clickMe.initRect(bGameStart);
    };
    
    
}

/*********** excute ***********/
var manager = new GameManager();
manager.start();
