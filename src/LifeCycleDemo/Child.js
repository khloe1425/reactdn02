import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log("constructor child")
    }
    static getDerivedStateFromProps(newProps, currentState) {

        console.log("getDerivedStateFromProps child")
        return null
    }
    shouldComponentUpdate(newProps, newState) {
        //quy dịnh có cần render lại UI hay không
        console.log("shouldComponentUpdate Child");

        console.log("newProps", newProps);// giá trị mới
        //! this.props: sẽ thay đổi ý nghĩa trong từng filecycle
        console.log("this.props", this.props);//giá trị cũ
        //Like thay đổi thì render lại
        // if (newProps.like !== this.props.like) {
        //     //giá trị cũ của like khác với giá trị mới của like
        //     // => like bị đổi
        //     //render lại UI khi prop, state thay đổi
        //     return true;
        // }
        //Number thay đổi không render lại
        // return false;
        return true;

    }

    render() {
        console.log("render child")
        return (
            <div>
                Child
                <p>Like: {this.props.like}</p>
                <p>Number: {this.props.number}</p>
            </div>
        )
    }

    // Load ung dung
    componentDidMount() {
        console.log("componentDidMount Child");
    }

    //thay doi state hoac prop
    componentDidUpdate() {
        //thư viện slick, countup => phải load xong UI => mới có thẻ để gắn hiệu ứng
        // lấy data từ API
        console.log("componentDidUpdate Child");
    }

}
