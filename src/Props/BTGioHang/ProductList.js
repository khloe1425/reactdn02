import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderPhone = () => {
        return this.props.mangDT.map((phone) => {
            return <div className="col-4" key={`phone${phone.maSP}`}>
                <ProductItem themGioHang={this.props.themGioHang} phoneData={phone} />
            </div>
        });

    }
    render() {
        // console.log(this.props.mangDT);
        return (
            <div className="row">
                {this.renderPhone()}
            </div>
        )
    }
}
