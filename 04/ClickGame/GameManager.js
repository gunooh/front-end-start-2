function GameManager(){

    var clickMe = new movingBox();
    var timerId = null;
    
    var initializeGameState = function(){
        score.innerHTML = curScore;
        level.innerHTML = curLevel;
        miss.innerHTML = curMiss;
        chance.innerHTML = curChance;
    };
    var checkGameState = (function(){
            //be needed SCORE to pass.
            var needScore = 8;
            
            return function(){
                // Is Game Ended?
                if(curMiss >= curChance)
                {
                    bGameStart = false;
                
                    clearInterval(timerId);
                    clickMe.initRect(bGameStart);
                    
                    setTimeout(function(){
                        gameScreen.innerHTML = 'Game End';
                    }, 1000);
                }
                
                //Go to Next Level?
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
    
    /* Game Start Function */
    this.start = function(){
        
        initializeGameState();  
          
        timerId = setInterval(function(){
            clickMe.changePos();
            checkGameState();
        }, nInterval);
        
        clickMe.initRect(bGameStart);
    };
    
    
}

/*********** excute ***********/
var manager = new GameManager();
manager.start();
