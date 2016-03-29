function movingBox(){

    var clickMe = document.getElementById('click-me');
    /* info */
    var rctWidth = clickMe.clientWidth;
    var rctHeight = clickMe.clientHeight;
    var bClickedFlag = true;// Is rectangle clicked?
    
    /* Score and Miss function */
    var addScore = function(){
        gameUtil.curScore += 1;
        gameUtil.score.innerHTML = gameUtil.curScore;  
        
        gameUtil.curMiss = 0;
        gameUtil.miss.innerHTML = gameUtil.curMiss;  
    };
    var addMiss = function(){
        gameUtil.curMiss += 1;
        gameUtil.miss.innerHTML = gameUtil.curMiss;
    };
    
    /* event */
    var downFunc = function(event){
        clickMe.style.backgroundColor = 'blue';
        
        if(bClickedFlag === false){
            addScore();
            bClickedFlag = true;
        }
    };
    var upFunc = function(event){
        clickMe.style.background = 'red';
    };
    clickMe.addEventListener('mousedown', downFunc);
    clickMe.addEventListener('mouseup', upFunc);
    
    /* change position randomly */
    var changePos = function(){

        if(bClickedFlag){
            bClickedFlag = false;
        }
        else{
            addMiss();
        }
        
        /* adjust next position */
        clickMe.style.marginTop = 
            Math.ceil(Math.random() * (gameUtil.scrWidth - rctWidth)) + 'px';   
        clickMe.style.marginLeft = 
            Math.ceil(Math.random() * (gameUtil.scrHeight - rctHeight)) + 'px';
    };
     
    /* 
        Initialize box info
        If Game start, Sets Color 'red' and Changes 'position'
        Else, Returns resource (event listener)....
    */
    this.initRect = function(bGameStart){
        
        if(bGameStart === true){
            clickMe.style.backgroundColor = 'red';
            changePos();
        }
        else{
            clickMe.removeEventListener('mousedown', downFunc);
            clickMe.removeEventListener('mouseup', upFunc);
        }
    };   
}
