import React, { Component } from 'react'

export default class BTChangeCar extends Component {

    //B2: xác định state
    state ={
        imgCar: './img/CarBasic/products/black-car.jpg'
    }
    renderCar = (color)=>{
        //B3: xác định hàm sẽ gọi setState
        let newState = {
            imgCar: `./img/CarBasic/products/${color}-car.jpg`
        }

        this.setState(newState);
    }

    render() {
        return (
            <div className='container'>
                <div className="row py-5">
                    <div className="col-7">
                        <img className='img-fluid' src={this.state.imgCar} alt="" />
                    </div>
                    <div className="col-5">
                        <ul className="list-group">
                            <li onClick={() => { 
                                this.renderCar('black');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid' src={'./img/CarBasic/icons/icon-black.jpg'} alt="" />
                                    </div>
                                    <div className="col-9">
                                        Black Car
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => { 
                                this.renderCar('red');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid' src={'./img/CarBasic/icons/icon-red.jpg'} alt="" />
                                    </div>
                                    <div className="col-9">
                                        Red Car
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => { 
                                this.renderCar('silver');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid' src={'./img/CarBasic/icons/icon-silver.jpg'} alt="" />
                                    </div>
                                    <div className="col-9">
                                    Silver Car
                                    </div>
                                </div>
                            </li>
                            <li onClick={() => { 
                                this.renderCar('steel');
                             }}  className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid' src={'./img/CarBasic/icons/icon-steel.jpg'} alt="" />
                                    </div>
                                    <div className="col-9">
                                        Steel Car
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
