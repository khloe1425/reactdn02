import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        console.log(this.props.phone);
        let {tenSP,hinhAnh,giaBan} = this.props.phone
        return (
            
            <div className="card">
                <img src={hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <p className="card-text">{giaBan}</p>
                    <button className="btn btn-primary" onClick={() => { 
                        //Lây dữ liệu của sản phẩm đang được click
                            console.log(this.props.phone);
                            let phoneData = this.props.phone
                            this.props.xemChiTiet(phoneData);
                     }}
                    >Xem chi tiet</button>
                </div>
            </div>
        )
    }
}
