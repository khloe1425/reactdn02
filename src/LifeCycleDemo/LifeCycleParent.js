import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycleParent extends Component {

    constructor(props){
        super(props);
        this.state = {
            number:1
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(newProps,currentState){

        console.log("getDerivedStateFromProps Parent")
        return null
    }

  render() {
      console.log("render")
    return (
      <div>
          <h2>LifeCycleParent</h2>
            <Child/>
      </div>
    )
  }

  componentDidMount(){
      //thư viện slick, countup => phải load xong UI => mới có thẻ để gắn hiệu ứng
      // lấy data từ API 
      console.log("componentDidMount");
  }

}
