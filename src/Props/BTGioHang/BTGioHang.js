import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

export default class BTGioHang extends Component {

    phoneArray = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/Phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/Phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/Phone/applephone.jpg" }
    ]

    // Những dữ liệu tính toán không cần lưu trữ trong biến
    state = {
        gioHang: [
            // {maSP: 1, tenSP: "VinSmart Live",hinhAnh: "./img/Phone/vsphone.jpg",giaBan: 27000000,soLuong:1 }
        ]
    }
    //Hàm chứa setState



    //cần chứa nhiều loại đối tượng, kiểu dữ liệu khác nhau
    // gioHang1 = {
    //     sp1:{"maSP": 1},
    //     nv1:{"maSP": 2},
    //     hv1
    // }

    //cần chứa chung 1 loại dữ liệu
    // gioHang2 = [
    //     {"maSP": 1},
    //     {"maSP": 2},
    // ]

    // rest paramester
    themGioHang = (...spGioHang) => {
        // spGioHang : maSP,tenSP,hinhAnh,giaBan
            

        //sp mới được thêm vào giỏ hàng
        let sp = { maSP: spGioHang[0], tenSP: spGioHang[1], hinhAnh: spGioHang[2], giaBan: spGioHang[3], soLuong: 1 }
        // Kiểm tra sản phẩm có trong giỏ hàng chưa
        //find => object thỏa đk tìm kiếm, findIndex => vị trị phần tử thỏa đk
        let gioHangCapNhat = [...this.state.gioHang];
        let spTK = gioHangCapNhat.find((spGioHang) => { 
            //kiểm tra sản phẩm mới có trùng mã với sản phầm trong giả hàng ko?
            return spGioHang.maSP === sp.maSP
         })
         
         if(spTK){
             //có sản phẩm trong giỏ hàng
             spTK.soLuong +=1;
         }else{
             //thêm sp mới
            // let newState = {
            //     //spread operater
            //     gioHang:[...this.state.gioHang, sp]
            // }
    
            // this.setState(newState);
            gioHangCapNhat.push(sp);
         }

         this.setState({
             gioHang:gioHangCapNhat
         });
      


    }

    xoaGioHang = (maSPXoa) => {
        //C1: dựa vào mã tìm vị trí phần => splice() xóa phần khỏi mảng

        //C2: filter => 1 mảng mới thỏa đk lọc
        // gio Hang: sp 1, 2, 3
        //=> xóa maSP 1 => sp 2,3 (lọc các sp không chứa mã 1 - maSPXoa)
        let gioHangCapNhat = [...this.state.gioHang];
        gioHangCapNhat = gioHangCapNhat.filter((sp) => { 
            return sp.maSP !== maSPXoa
         });

        this.setState({
            gioHang:gioHangCapNhat
        })

    }


    tangGiamSL = (maSPSL, sl) => {

        let gioHangCapNhat = [...this.state.gioHang];

        let spTK = gioHangCapNhat.find(sp => sp.maSP === maSPSL);

        if(spTK){
            spTK.soLuong += sl;
            if(spTK.soLuong <1){
                alert("Số lượng không đúng");
                //sl = 0 -1 => -1
                //=> sl = 0 - -1 = 1
                //C1 Ngăn không cho giảm xuống số 0 => luôn trở lại số mặc định là 1
                // spTK.soLuong -= sl;

                //C2 xóa sản phẩm khỏi giỏ hàng
                this.xoaGioHang(maSPSL);
                //sau khi xóa được thì thoát khỏi hàm
                return;
            }

        }

        this.setState({
            gioHang:gioHangCapNhat
        })

    }


    tinhTongSL = () => {
        let {gioHang} = this.state;

        // map => return trả về 1 mảng mới
        // trả về 1 kết quả tính toán (forEach, for, reduce)
        // sum là kết quả tổng cuối cùng nhận đc

        let sum =  gioHang.reduce((tongSL,sp) => { 
                return tongSL +=sp.soLuong;
         }, 0);

        return sum;
    }

    render() {
        return (
            <div className='container'>
                <h2>Bài tập giỏ hàng</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <div>
                            <button data-toggle="modal" data-target="#exampleModal" className='btn btn-success'  >Giỏ hàng ({this.tinhTongSL()})</button>
                        </div>
                    </div>
                </nav>

                <ProductList mangDT={this.phoneArray}  themGioHang={this.themGioHang}  />

                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang}  tangGiamSL={this.tangGiamSL} />


            </div>
        )
    }
}
