import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {

  renderGioHang = () => {
    console.log(this.props.gioHang);
    return this.props.gioHang.map((sp) => {
      return <tr key={`gioHang${sp.maSP}`}>
        <td>{sp.maSP}</td>
        <td>
          <img style={{ width: '20px' }} src={sp.hinhAnh} alt="" />
        </td>
        <td>{sp.tenSP}</td>
        <td>
          <button onClick={() => {
            this.tangGiamSL(sp.maSP, 1)
          }} className='btn btn-success'>+</button>
          <span>{sp.soLuong}</span>
          <button onClick={() => {
            this.tangGiamSL(sp.maSP, -1)
          }} className='btn btn-danger'>-</button>
        </td>
        <td>{sp.giaBan.toLocaleString()}</td>
        <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
        <td>
          <button onClick={() => {
            this.xoaGioHang(sp.maSP)
          }} className='btn btn-danger'>Xoa</button>
        </td>
      </tr>
    })
  }

  xoaGioHang = (maSPXoa) => {
    let action = {
      type: "XOA_GIO_HANG",
      maSPXoa: maSPXoa
    }
    this.props.dispatch(action);

  }

  tangGiamSL = (maSP, sl) => {
    let action = {
      type: "TANG_GIAM_SL",
      maSPSL: maSP,
      soLuong: sl
    }

    this.props.dispatch(action);

  }


  render() {

    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Giỏ Hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Hình</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>

                  {this.renderGioHang()}

                </tbody>
              </table>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//lấy state từ store redux vầ lưu trong props của component
const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.gioHangReducer
  }
}

//chuyển component của react trở thành component mới của redux (chứa dữ liệu của store, chứa phương thức dẩy liệu lên store)
export default connect(mapStateToProps)(Cart);