import React, { Component } from 'react'
import "./GameTaiXiu.css"
import xingau2 from "../../asset/img/Game/2.png";

export default class GameTaiXiu extends Component {
    render() {
        return (
            <div className='container-fluid gameTX'>
                <div className="w-75 mx-auto text-center py-5">
                    <h2>Game Tài Xỉu</h2>
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
                    <div className="row justify-content-center">
                        
                        <div className="col-6">
                            <p>Bạn chọn: <span className="text-danger" >Tài</span></p>
                            <p>Số bàn thắng: <span className="text-success">0</span></p>
                            <p>Tổng số bàn chơi: <span className="text-info">0</span></p>
                            <button className='btn btnPlay'>Play Game</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
