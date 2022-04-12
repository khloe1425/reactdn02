import React, { Component } from 'react'
import { connect } from 'react-redux'


class XiNgau extends Component {
  
  render() {
    console.log(this.props.mangXiNgau);
    
    return (
      <div className="row">
        <div className="col-4">
          <button
           onClick={() => { 
              let action = {
                type:"DAT_CUOC",
                banChon:true
              }

              this.props.dispatch(action)

            }} className='btn btnGame'>TÀI</button>
        </div>
        <div className="col-4">
          <div className='imgGroup'>
            <img src={this.props.mangXiNgau[0].hinh} alt="" />
            <img src={this.props.mangXiNgau[1].hinh} alt="" />
            <img src={this.props.mangXiNgau[2].hinh} alt="" />
            {/* <img src="../../asset/img/Game/2.png" alt="" /> */}
            {/* <img src={xingau2} alt="" /> */}
          </div>
        </div>
        <div className="col-4">
          <button onClick={() => { 
              let action = {
                type:"DAT_CUOC",
                banChon:false
              }

              this.props.dispatch(action)

            }} className='btn btnGame'>XỈU</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => { 
      return {
        mangXiNgau: rootReducer.gameReducer.mangXiNgau
      }
 }

export default connect(mapStateToProps)(XiNgau);