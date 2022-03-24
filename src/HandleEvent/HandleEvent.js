import React, { Component } from 'react'

export default class HandleEvent extends Component {

    name = "Nguyen Thi Hoc Vien";

    renderName = () => {
        alert("Ten HV:" + this.name);
    }

    loadName = () => {
        alert("Ten HV khi load web:" + this.name);
    }

    showAge = (age) => {
        alert("tuoi hv: " + age);
    }

    render() {
        // bien cuc bo
        let age = 20;

        return (
            <div>
                HandleEvent
                {/* Chay ngay khi load web */}
                <p>{this.loadName()}</p>

                <button onClick={() => {
                    alert("Click");
                }} >Click</button>

                {/* chi chay khi nguoi dung click */}
                <button onClick={this.renderName}>Show Name</button>

                <button onClick={(event) => {
                    this.showAge(age);
                }}>Show Age</button>
            </div>
        )
    }
}
