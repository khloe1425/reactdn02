import React, { Component } from 'react'

export default class XiNgau extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <button className='btn btnGame'>TÀI</button>
        </div>
        <div className="col-4">
          <div className='imgGroup'>
            <img src="./img/Game/1.png" alt="" />
            <img src="./img/Game/2.png" alt="" />
            <img src="./img/Game/3.png" alt="" />
            {/* <img src="../../asset/img/Game/2.png" alt="" /> */}
            {/* <img src={xingau2} alt="" /> */}
          </div>
        </div>
        <div className="col-4">
          <button className='btn btnGame'>XỈU</button>
        </div>
      </div>
    )
  }
}
