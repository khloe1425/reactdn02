import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        // console.log(this.props.phoneData);
        let {maSP,tenSP,giaBan,hinhAnh} = this.props.phoneData;
        return (
            <div className="card">
                <img src={hinhAnh}className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {tenSP}
                    </h5>
                    <p className="card-text">
                        {giaBan.toLocaleString()}
                    </p>
                    <button onClick={() => { 
                        
                        this.props.themGioHang(maSP,tenSP,hinhAnh,giaBan);

                     }}  data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Thêm Giỏ Hàng</button>
                </div>
            </div>
        )
    }
}
