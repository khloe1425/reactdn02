import React, { Component } from 'react'

import { connect } from 'react-redux'

class ProductItem extends Component {

  themGioHang = (phone)=>{
      // disptach: nhận vào đối tượng action
      // đẩy dư liệu lên reducer
      let action ={
        type:"THEM_GIO_HANG",
        spGioHang:phone
      }
      this.props.dispatch(action);

  }

  render() {
    let {hinhAnh,tenSP,giaBan } = this.props.phone

    return (
      <div className="card">
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button onClick={() => { 
            this.themGioHang(this.props.phone);
           }} data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Thêm Sản Phẩm</button>
        </div>
      </div>
    )
  }
}
//tạo ra component mới có tính năng của redux và react component
//khi chỉ cần đẩy dư liệu lên store thì không cần khai báo mapStateToProps
export default connect()(ProductItem);