import React, { Component } from 'react'

export default class KetQua extends Component {
  render() {
    return (
      <div className="row justify-content-center">

        <div className="col-6">
          <p>Bạn chọn: <span className="text-danger" >Tài</span></p>
          <p>Số bàn thắng: <span className="text-success">0</span></p>
          <p>Tổng số bàn chơi: <span className="text-info">0</span></p>
          <button className='btn btnPlay'>Play Game</button>
        </div>
      </div>
    )
  }
}
