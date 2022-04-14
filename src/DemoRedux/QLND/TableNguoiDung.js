import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {


  renderTable = () => { 
    let count = 1;
      return this.props.mangND.map((nd) => { 
        
        return <tr key={nd.taiKhoan}>
            <td>{count++}</td>
            <td>{nd.taiKhoan}</td>
            <td>{nd.hoTen}</td>
            <td>{nd.matKhau}</td>
            <td>{nd.email}</td>
            <td>{nd.sdt}</td>
            <td>{nd.loaiND === 'KH' ? "Khách Hàng":"Nhân Viên" }</td>
            <td>
              <button onClick={() => { 
                  let action ={
                    type:"XOA_ND",
                    taiKhoanXoa: nd.taiKhoan
                  }
                  this.props.dispatch(action);
                  
               }}  className='btn btn-danger'>Xóa</button>
              <button onClick={() => { 
                  let action = {
                    type:"XEM_THONG_TIN",
                    tkNguoiDung: nd.taiKhoan
                  }
                  this.props.dispatch(action);

               }} className='btn btn-info'>Xem</button>
            </td>
        </tr>

       })
   }



  render() {
    console.log(this.props.mangND);
    return (
      <div className="card">
      <div className="card-header bg-dark text-white">
          Table
      </div>
      <div className="card-body">
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Tài khoản</th>
                      <th scope="col">Họ Tên</th>
                      <th scope="col">Mật khẩu</th>
                      <th scope="col">Email</th>
                      <th scope="col">SDT</th>
                      <th scope="col">Loại người dùng</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderTable()}
              </tbody>
          </table>

      </div>
  </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
  return{
    mangND: rootReducer.QLNDReducer.mangND
  }
}

export default connect(mapStateToProps)(TableNguoiDung)