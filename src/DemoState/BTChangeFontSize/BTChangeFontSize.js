import React, { Component } from 'react'

export default class BTChangeFontSize extends Component {

    state = {
        fs: 18
    }
    render() {
        console.log("Giá trị ban đầu" + this.state.fs);
        return (
            <div className='container'>
                {/* <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet.</p> */}
                <p style={{ fontSize: `${this.state.fs}px` }}>Lorem ipsum dolor sit amet.</p>
                <button className='btn btn-success' onClick={() => {

                    let newState = {
                        fs: this.state.fs + 1
                    }
                    this.setState(newState);

                }}>+</button>
                <button className='btn btn-danger' onClick={() => {
                    let newState = {
                        fs: this.state.fs - 1
                    }
                    this.setState(newState);
                }}>-</button>
            </div>
        )
    }
}
