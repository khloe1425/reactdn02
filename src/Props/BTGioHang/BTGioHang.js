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
            

        let sp = { maSP: spGioHang[0], tenSP: spGioHang[1], hinhAnh: spGioHang[2], giaBan: spGioHang[3], soLuong: 1 }
        console.log(sp);
        
        let newState = {
            //spread operater
            gioHang:[...this.state.gioHang, sp]
        }
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
                            <button data-toggle="modal" data-target="#exampleModal" className='btn btn-success'  >Giỏ hàng (0)</button>
                        </div>
                    </div>
                </nav>

                <ProductList mangDT={this.phoneArray}  themGioHang={this.themGioHang}  />

                <Cart gioHang={this.state.gioHang} />


            </div>
        )
    }
}
