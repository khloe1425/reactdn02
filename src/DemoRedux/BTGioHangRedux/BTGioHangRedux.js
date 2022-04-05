import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

export default class BTGioHangRedux extends Component {

    phoneArray = [
        { "maSP": 1, "tenSP": "VinSmart Live","giaBan": 5700000, "hinhAnh": "./img/Phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs","giaBan": 7600000, "hinhAnh": "./img/Phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "giaBan": 27000000, "hinhAnh": "./img/Phone/applephone.jpg" }
    ]



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
                            <button data-toggle="modal" data-target="#exampleModal" className='btn btn-success'  >Giỏ hàng ()</button>
                        </div>
                    </div>
                </nav>

              <ProductList phoneArray={this.phoneArray}/>
              
            <Cart/>

            </div>
    )
  }
}
