import React, { Component } from 'react'

export default class Header extends Component {
  
    constructor(props){
        super(props);
        this.timer = {
        }
    }
  
  
    render() {
    return (
      <div>
          <button className='btn btn-success'>Login</button>
      </div>
    )
  }

  componentDidMount(){
      this.timer = setInterval(() => { 
          //code cần chạy nhiều lần
          console.log("Check data")
       },1000)
  }


  componentWillUnmount(){
      //chạy trước khi component bị hủy (ẩn đi khỏi UI)

      clearInterval(this.timer);
      console.log("componentWillUnmount Header")
  }
}
