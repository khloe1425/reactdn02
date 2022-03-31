import React, { Component } from 'react'

export default class Cart extends Component {

  renderGioHang = () => {
    return this.props.gioHang.map((sp) => {
      // let {maSP,hinhAnh } = sp;
      return <tr>
              <td>{sp.maSP}</td>
              <td>
                <img style={{ width: '20px' }} src={sp.hinhAnh} alt="" />
              </td>
              <td>{sp.tenSP}</td>
              <td>
                <button className='btn btn-success'>+</button>
                <span> {sp.soLuong} </span>
                <button className='btn btn-danger'>-</button>
              </td>
              <td>{sp.giaBan.toLocaleString()}</td>
              <td>{ (sp.soLuong * sp.giaBan).toLocaleString()}</td>
              <td>
                <button className='btn btn-danger'>Xóa</button>
              </td>
      </tr>
    })
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
              <table classname="table">
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
