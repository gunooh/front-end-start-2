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
                    
                // Is Game End?
                if((curMiss >= curChance) || !bGameStart){
                    
                    bGameStart = false;
                    clickMe.initRect(bGameStart);
                    
                    clearInterval(timerId);
                    setTimeout(function(){
                        gameScreen.innerHTML = 'Game End';
                    }, 1000);
                }
                
                //Go to Next Level?
                if(curScore >= needScore){
                    needScore += needScore;
                    
                    curLevel += 1;
                    level.innerHTML = curLevel;
                    
                    if(curChance - 5 <= 0){
                        bGameStart = false;
                        
                        curChance = 0;
                        chance.innerHTML = curChance;
                        return;
                    }
                    //subtract Chance...
                    curChance = curChance - 5;
                    chance.innerHTML = curChance;
                }
            };
        })();
    
    /* Game Start Function */
    this.start = function(){
        
        initializeGameState();  
        
        timerId = setInterval(function(){
            clickMe.initRect(bGameStart);
            checkGameState();
        }, nInterval);

    }; 
}

/*********** excute ***********/
var manager = new GameManager();
manager.start();
