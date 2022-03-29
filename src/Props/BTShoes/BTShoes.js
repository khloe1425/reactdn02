import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class BTShoes extends Component {

    shoesArray = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        }
    ]


    //load danh sach sản phẩm

    renderShoes = () => {
        return this.shoesArray.map((shoes, index) => {
            // key={index}
            return <div  className="col-4" key={`shoes${shoes.id}`}>
               {/* Component con */}
                <ProductItem shoesObj={shoes} />

            </div>
        });
    }



    render() {
        let color = "pink";
        let number = 0;

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                        </ul>

                    </div>
                    <div className="col-9">
                        <h2>Shoes Shop</h2>
                        <div className="row">
                                {this.renderShoes()}

                        </div>

                        {/* demo props */}
                        {/* Props có thể truyền mọi dữ liệu
                        Thường sử dụng truyền loại object, mảng => tiết kiệm code không cần tạo nhiều prop để truyền nhiều dữ liệu,
                        chỉ cần dùng 1 prop kiểu obj hoặc mảng đê truyền được nhiều dữ liệu */}
                        {/* <ProductItem  colorProduct={color} soLuong={number}  /> */}

                    </div>
                </div>

            </div>
        )
    }
}
