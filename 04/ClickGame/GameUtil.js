var gameUtil = {
    /* Game View Element */   
    gameScreen: document.getElementById('game-screen'),
    
    score: document.getElementById('score'),
    level: document.getElementById('level'),
    miss: document.getElementById('miss'),
    chance: document.getElementById('chance'),
    
    /* Game Status Info */
    scrWidth: document.getElementById('game-screen').clientWidth,
    scrHeight: document.getElementById('game-screen').clientHeight,
    
    bGameStart: true,
    curScore: 0,
    curLevel: 1,
    curMiss: 0,
    curChance: 11,
    nInterval: 1500,
};
