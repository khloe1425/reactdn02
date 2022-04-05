import { combineReducers, createStore } from "redux";

// reducer: state khi đưa lên redux

const gioHang = [
    { maSP: 1, tenSP: "VinSmart Live",giaBan: 5700000, hinhAnh: "./img/Phone/vsphone.jpg",soLuong:1 }
]

//rootReducer là tập hợp các reducer của dự án
// mỗi reducer là data của 1 nghiệp vụ cần xử lý
const rootReducer = combineReducers({
    //các reducer (state) cần lưu trữ
    gioHangReducer: (state = gioHang) => { 
        return state;
     }

     //xemChiTietReducer
     //loginReducer
});

export const store = createStore(rootReducer);
