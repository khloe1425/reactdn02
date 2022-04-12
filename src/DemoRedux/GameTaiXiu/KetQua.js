import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {

  renderKQ = () => {
    let tong = this.props.gameReducer.mangXiNgau.reduce((tong, xn) => {
      return tong += xn.diem
    }, 0);

    let kq = tong > 11 ? "Tài": "Xỉu"

    return `${tong} - ${kq}`
  }
  render() {
    console.log(this.props.gameReducer)
    let { banChon, banThang, tongSoBan } = this.props.gameReducer
    return (
      <div className="row justify-content-center">

        <div className="col-6">
            <p className="text-success">{this.renderKQ ()}</p>


          <p>Bạn chọn: <span className="text-danger" >
            {banChon ? "Tài" : "Xỉu"}
          </span></p>
          <p>Số bàn thắng: <span className="text-success">{banThang}</span></p>
          <p>Tổng số bàn chơi: <span className="text-info">{tongSoBan}</span></p>
          <button onClick={() => {
            let action = {
              type: "PLAY_GAME"
            }

            this.props.dispatch(action)
          }} className='btn btnPlay'>Play Game</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    gameReducer: rootReducer.gameReducer
  }
}

export default connect(mapStateToProps)(KetQua);

// closure function
// main(){
//   console.log(first)
//     myFunction(){
//       console.log(second)
//     }
// }

// main() => console.log(first)
// main()() => console.log(second)