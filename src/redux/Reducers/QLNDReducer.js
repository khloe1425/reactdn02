
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
    },
    nguoiDung:{
        values:{
            taiKhoan:'',
            hoTen:'',
            matKhau:'',
            sdt:'',
            email:'',
            loaiND:'KH'
        },
        errors:{
            taiKhoan:'',
            hoTen:'',
            matKhau:'',
            sdt:'',
            email:'',
            loaiND:''
        }
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
                //trùng địa chỉ ô nhớ nên giá trị của values đã đổi nhưng redux tự nhận diện để render lại
                state.nguoiDung.values = ndTimKiem;
               
                //Copy tạo đối tương mới
             
                state.nguoiDung = {...state.nguoiDung};
                
             }

             return {...state}

        case "HANDLE_INPUT":
            // console.log(action.nguoiDung);

            state.nguoiDung = action.nguoiDung

            return {...state}

        case "CAP_NHAT":
            console.log(action.nguoiDungCapNhat);
             let mangNguoiDung = [...state.mangND];
            // Find
            // let ndTK = mangNguoiDung.find((nd) => { 
            //     return nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
            //  })

            //  if(ndTK){
            //      //tìm thấy
            //      //find không dùng được
            //     //  ndTK = action.nguoiDungCapNhat

            //     ndTK.hoTen = action.nguoiDungCapNhat.hoTen;
            //     ndTK.matKhau = action.nguoiDungCapNhat.matKhau;
            //     ndTK.sdt = action.nguoiDungCapNhat.sdt;
            //     ndTK.email = action.nguoiDungCapNhat.email;
            //     ndTK.loaiND = action.nguoiDungCapNhat.loaiND;
            //  }
            let ndIndex = mangNguoiDung.findIndex((nd) => { 
                    return nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
                 })
             
            if(ndIndex > -1){
                mangNguoiDung[ndIndex] = action.nguoiDungCapNhat;
            }
             state.mangND = mangNguoiDung;
            return {...state}

        case "XOA_ND":
            let mangNguoiDungXoa = [...state.mangND];
            state.mangND = mangNguoiDungXoa.filter((nd) => { 
                return nd.taiKhoan !== action.taiKhoanXoa
             })
        return {...state}
        default: return state;
    }
}