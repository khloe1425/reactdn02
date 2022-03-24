import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    productArray = [
        { id: 1, name: "Product 1", img: "https://picsum.photos/200", price: 3000 },
        { id: 2, name: "Product 2", img: "https://picsum.photos/200", price: 2000 },
        { id: 3, name: "Product 3", img: "https://picsum.photos/200", price: 1000 }
    ]
    renderProduct = () => {
        // các thẻ JSX là kiểu obj nên để lưu được nhiều obj thì cần tạo mảng để lưu
        let content = [];
        for (let index in this.productArray) {
            let objCol4 = <div className="col-4">
                    <div className="card">
                        <img src={this.productArray[index].img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.productArray[index].name}</h5>
                            <p className="card-text">{this.productArray[index].price}</p>
                        </div>
                    </div>
            </div>
            content.push(objCol4);
        }
        console.log(content);
        return content;

    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                   {this.renderProduct()}

                </div>
            </div>
        )
    }
}
