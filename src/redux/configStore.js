import { combineReducers, createStore } from "redux";

// reducer: state khi đưa lên redux

const gioHang = [
    { maSP: 1, tenSP: "VinSmart Live",giaBan: 5700000, hinhAnh: "./img/Phone/vsphone.jpg",soLuong:1 }
]

//rootReducer là tập hợp các reducer của dự án
// mỗi reducer là data của 1 nghiệp vụ cần xử lý
const rootReducer = combineReducers({
    //các reducer (state) cần lưu trữ
    gioHangReducer: (state = gioHang,action) => { 
    //    console.log(action)
        switch (action.type) {
            case "THEM_GIO_HANG":
                console.log(action.spGioHang)
                //Tạo obj mới từ các thuộc tính cũ, có thêm thuộc mới là soLuong
                // Spread Operator
                let spGioHang = {...action.spGioHang,soLuong:1};
                    
                state.push(spGioHang);
                console.log(state);
                //obj, array: tính bất biến (tham chiếu)
                //redux không nhận biết được thay đổi khi trùng địa chỉ ô nhớ
                // => không render lại UI
                // return state; //(trả về địa chỉ ô nhớ)
                return [...state]
            default: return state;
        }


        
     }

     //xemChiTietReducer
     //loginReducer
});

export const store = createStore(rootReducer);
