import React, { Component } from 'react'
import "./GameTaiXiu.css"
import xingau2 from "../../asset/img/Game/2.png";
import XiNgau from './XiNgau';
import KetQua from './KetQua';

export default class GameTaiXiu extends Component {
    render() {
        return (
            <div className='container-fluid gameTX'>
                <div className="w-75 mx-auto text-center py-5">
                    <h2>Game Tài Xỉu</h2>
                    
                    <XiNgau/>

                    <KetQua/>
                </div>
            </div>
        )
    }
}
