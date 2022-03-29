import React, { Component } from 'react'
import ChiTiet from './ChiTiet'
import ProductItem from './ProductItem'

export default class BTXemChiTiet extends Component {


    phoneArray = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/Phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/Phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/Phone/applephone.jpg" }
    ]


    renderPhone = () => {

        return this.phoneArray.map((phone) => {
            return <div className="col-4" key={`phone${phone.maSP}`}>
                <ProductItem phone={phone} />

            </div>

        })
    }

    render() {
        return (
            <div className='container'>
                <div className="productList">
                    <div className="row">
                        {this.renderPhone()}
                    </div>
                </div>
                <div className="productDetail">
                    <div className="row">

                        <div className="col-4">
                            <img src="..." alt="..." />
                        </div>
                        <div className="col-8">
                            <h2>Thông số kỹ thuật</h2>

                            <ChiTiet />

                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
