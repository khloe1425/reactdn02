import React, { Component } from 'react'

export default class HandleEvent extends Component {

    render() {
        return (
            <div>HandleEvent

                <button onClick={() => {
                    alert("Click");
                }} >Click</button>
            </div>
        )
    }
}
