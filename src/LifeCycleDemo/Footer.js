import React, { Component } from 'react'

export default class Footer extends Component {
  
    constructor(props){
        super(props);
        this.state={
        }
        console.log("constructor footer")
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log("getDerivedStateFromProps Footer")
        return null
    }
    shouldComponentUpdate(newProps,newState){
        console.log("shouldComponentUpdate Footer")
         //không render lại UI khi prop, state thay đổi
        return false;
    }
  
    render() {
        console.log("render footer")
        return (
        <div>Footer</div>
        )
  }
}
