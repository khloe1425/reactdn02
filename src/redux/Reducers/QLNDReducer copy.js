
const QLNDState = {
    mangND: [
        { taiKhoan: "user123", hoTen: "Người dùng 1", matKhau: "1234354", email: "user@gmail.com", sdt: "54735254", loaiND: "KH" },
        { taiKhoan: "user456", hoTen: "Người dùng 2", matKhau: "769479", email: "user2@gmail.com", sdt: "765754", loaiND: "NV" }
    ],
    thongTinND: {
        taiKhoan: '',
        hoTen: '',
        matKhau: '',
        sdt: '',
        email: '',
        loaiND: ''
    }
}

export const QLNDReducer = (state = QLNDState, action) => {
    switch (action.type) {
        case "THEM_NGUOI_DUNG":
            //    state.mangND.push(action.dataNguoiDung);
            // console.log(action.dataNguoiDung);

            //copy mảng đổi địa chỉ ô nhớ cho mangND
            // => redux mới nhận biết được thay đổi và render lại UI
            state.mangND = [...state.mangND, action.dataNguoiDung]
            return { ...state }

        case "XEM_THONG_TIN":

            let ndTimKiem = state.mangND.find((nd) => {
                return nd.taiKhoan === action.tkNguoiDung
            })
            if (ndTimKiem) {
                //tìm thấy
                // console.log(ndTimKiem)
                state.thongTinND = ndTimKiem
             }

             return {...state}
        default: return state;
    }
}