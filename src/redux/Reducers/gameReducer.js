
const gameState={
    mangXiNgau:[
        {hinh:'./img/Game/1.png', diem:1},
        {hinh:'./img/Game/2.png', diem:2},
        {hinh:'./img/Game/3.png', diem:3},
    ],
    banChon:true,
    banThang:0,
    tongSoBan:0
}

export const gameReducer = (state = gameState,action) => { 
    switch (action.type) {
     
    
        default: return state;
    }
 }