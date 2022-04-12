
const gameState={
    mangXiNgau:[
        {hinh:'./img/Game/1.png', diem:1},
        {hinh:'./img/Game/1.png', diem:1},
        {hinh:'./img/Game/1.png', diem:1},
    ],
    banChon:true,
    banThang:0,
    tongSoBan:0
}

export const gameReducer = (state = gameState,action) => { 
    switch (action.type) {
     
        case "DAT_CUOC":
            state.banChon = action.banChon;

            return {...state}
        
        case "PLAY_GAME":

            let mangNgauNhien =[];
            for(let i =0; i <3 ; i++){
                //random số từ 1 - 6
                let number = Math.floor(Math.random() * 6) + 1;
                let xn = {
                    hinh:`./img/Game/${number}.png`,
                    diem:number
                }
                mangNgauNhien.push(xn);
            }

            state.mangXiNgau = mangNgauNhien;

            //Tính điểm
            let tong = mangNgauNhien.reduce((tong,xn) => { 
                    return tong += xn.diem
             },0);
             /**
              * TH1: tài && tong > 11 => thắnng
              * TH2: xỉu && tong <=11 => thắnng
              */
             if((state.banChon && tong > 11) || (!state.banChon && tong <= 11 ) ){
                 state.banThang +=1
             }
             state.tongSoBan +=1
            return {...state};
        
        default: return state;
    }
 }