import React, { Component } from 'react'

export default class ProductItem extends Component {

    // Props là thuộc tính được định nghĩa sẵn trong class Component
    // truyền data từ component cha xuống cho component con
    // chỉ truyền 2 cấp cha con trực tiếp

    render() {

        // console.log(this.props)
        // console.log(this.props.colorProduct)
        console.log(this.props.shoesObj)
        let {image,name,price} = this.props.shoesObj;

        return (
            <div className="card">
                <img src={this.props.shoesObj.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name }</h5>
                    <p className="card-text">{ price}</p>
                    <a href="#" className="btn btn-primary">add to card</a>
                </div>
            </div>

        )
    }
}
