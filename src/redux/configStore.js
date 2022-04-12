import { combineReducers, createStore } from "redux";

import { gameReducer } from "./Reducers/gameReducer";
import { QLNDReducer } from "./Reducers/QLNDReducer";
// reducer: state khi đưa lên redux

const gioHang = []

//rootReducer là tập hợp các reducer của dự án
// mỗi reducer là data của 1 nghiệp vụ cần xử lý
const rootReducer = combineReducers({
    //các reducer (state) cần lưu trữ
    gioHangReducer: (state = gioHang, action) => {
        //    console.log(action)
        switch (action.type) {
            case "THEM_GIO_HANG":
                //Tạo obj mới từ các thuộc tính cũ, có thêm thuộc mới là soLuong
                // Spread Operator
                let spGioHang = { ...action.spGioHang, soLuong: 1 };

                let spTK = state.find((sp) => {
                    return spGioHang.maSP === sp.maSP
                });

                if (spTK) {
                    //nếu đã tồn tại sp trong giỏ hàng
                    spTK.soLuong += 1;
                } else {
                    state.push(spGioHang);
                }
                //obj, array: tính bất biến (tham chiếu)
                //redux không nhận biết được thay đổi khi trùng địa chỉ ô nhớ
                // => không render lại UI
                // return state; //(trả về địa chỉ ô nhớ, giá trị)
                return [...state]//tạo địa chỉ ô nhớ mới
            case "XOA_GIO_HANG":
                let gioHangCapNhat = state.filter((sp) => {
                    //điều kiện lọc và trả kết quả
                    //sp1, sp2, sp3
                    //sp2 xóa => lọc ra những sp không cần xóa
                    // => sp1,sp3
                    return sp.maSP !== action.maSPXoa;
                })

                return [...gioHangCapNhat]
            case "TANG_GIAM_SL":

                let spTKSL = state.find((sp) => { 
                        return sp.maSP === action.maSPSL
                 });
                 
                 if(spTKSL){
                    //tìm thấy sp
                    spTKSL.soLuong += action.soLuong
                    // let gioHangCapNhat = state;
                    if(spTKSL.soLuong <1){
                        alert("Số lượng ko đúng");
                        // spTKSL.soLuong -= action.soLuong

                        //Xóa sản phẩm khi số lượng giảm dưới 1
                        let gioHangCapNhat = state.filter((sp) => {
                            return sp.maSP !== action.maSPSL;
                        })
                        
                        return [...gioHangCapNhat]
                    }
                 }

                 return [...state]
            default: return state;
        }
    },

    // gameReducer:gameReducer
    gameReducer,
    QLNDReducer

    //xemChiTietReducer
    //loginReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
