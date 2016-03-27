function movingBox(){

    var clickMe = document.getElementById('click-me');
    /* info */
    var rctWidth = clickMe.clientWidth;
    var rctHeight = clickMe.clientHeight;
    var bClickedFlag = true;// Is rectangle clicked?
    
    /* Score, Miss function */
    var addScore = function(){
        curScore += 1;
        score.innerHTML = curScore;  
        
        curMiss = 0;
        miss.innerHTML = curMiss;  
    };
    var addMiss = function(){
        curMiss += 1;
        miss.innerHTML = curMiss;
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
            Math.ceil(Math.random() * (scrWidth - rctWidth)) + 'px';   
        clickMe.style.marginLeft = 
            Math.ceil(Math.random() * (scrHeight - rctHeight)) + 'px';
    };
     
    /* 
        Initialize box info
        If Game starts, Set Color 'red' and Change 'position'
        Else, Return resource(event listener)....
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
