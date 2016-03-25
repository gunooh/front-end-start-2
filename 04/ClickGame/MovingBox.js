/**************** Moving Box Object ****************/ 
function movingBox(){
    
    //private
    /* Moving rectangle element */
    var clickMe = document.getElementById('click-me');
    /* Moving rectangle info */
    var rctWidth = clickMe.clientWidth;
    var rctHeight = clickMe.clientHeight;
    var bClickedFlag;// Is rectangle clicked?
    
    /* event */
    var downFunc = function(event){
        clickMe.style.backgroundColor = 'blue';
        
        if(bClickedFlag === false){
            bClickedFlag = true;
            
            curScore += 1;
            score.innerHTML = curScore;
            
            curMiss = 0;
            miss.innerHTML = curMiss;
        }
    };
    var upFunc = function(event){
        clickMe.style.background = 'red';
    };
    clickMe.addEventListener('mousedown', downFunc);
    clickMe.addEventListener('mouseup', upFunc);
    
    
    //public
    
    /* initialize box info */
    this.initRect = function(bGameStart){
    
        if(bGameStart === true){
            clickMe.style.backgroundColor = 'red';
            bClickedFlag = true;
            this.changePos();
        }
        else{
            clickMe.removeEventListener('mousedown', downFunc);
            clickMe.removeEventListener('mouseup', upFunc);
        }
    };
    /* change position randomly */ 
    this.changePos = function(){
        if(bClickedFlag === false){
            curMiss += 1;
            miss.innerHTML = curMiss;
        }
        bClickedFlag = false;
        
        /* adjust next clickMe position */
        clickMe.style.marginTop = 
            Math.ceil(Math.random() * (scrWidth - rctWidth)) + 'px';
            
        clickMe.style.marginLeft = 
            Math.ceil(Math.random() * (scrHeight - rctHeight)) + 'px';
    };

    // bug:
    // mousedown 상태에서 포커스 벗어난 경우 처리 필요함..........
    // 또, 포커스 없이 클릭한 채로 박스를 긁을때...
}
