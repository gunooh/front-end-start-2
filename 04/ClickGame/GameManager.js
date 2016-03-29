function gameManager(){
    
    var moving = new movingBox();
    var timerId = null;
    
    var initializeGameState = function(){
        gameUtil.score.innerHTML = gameUtil.curScore;
        gameUtil.level.innerHTML = gameUtil.curLevel;
        gameUtil.miss.innerHTML = gameUtil.curMiss;
        gameUtil.chance.innerHTML = gameUtil.curChance;
    };
    var checkGameState = (function(){
            //be needed SCORE to pass.
            var needScore = 8;
                            
            return function(){
                /*
                    Is Game End?
                    - > "Game Fail" OR "Game Clear"
                */
                if((gameUtil.curMiss >= gameUtil.curChance) || (gameUtil.bGameStart === false)){
                    
                    gameUtil.bGameStart = false;
                    moving.initRect(false);
                    
                    clearInterval(timerId);
                    setTimeout(function(){
                        gameUtil.gameScreen.innerHTML = 'Game End';
                    }, 1000);
                }
                
                //Go to Next Level?
                if(gameUtil.curScore >= needScore){
                    needScore += needScore;
                    
                    gameUtil.curLevel += 1;
                    gameUtil.level.innerHTML = gameUtil.curLevel;
                    
                    if(gameUtil.   curChance - 5 <= 0){
                        gameUtil.bGameStart = false;
                        
                        gameUtil.curChance = 0;
                        gameUtil.chance.innerHTML = gameUtil.curChance;
                        return;
                    }
                    //subtract Chance...
                    gameUtil.curChance = gameUtil.curChance - 5;
                    gameUtil.chance.innerHTML = gameUtil.curChance;
                }
            };
        })();
    
    /* Game Start Function */
    this.start = function(){
        
        initializeGameState();  
        
        timerId = setInterval(function(){
            moving.initRect(gameUtil.bGameStart);
            checkGameState();
        }, gameUtil.nInterval);

    }; 
}

/*********** excute ***********/
var manager = new gameManager();
manager.start();
