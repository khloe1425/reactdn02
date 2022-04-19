import React, { Component, PureComponent } from 'react'

export default class ChildPureComponent extends PureComponent {

    // Không có shouldComponentUpdate()
    //Nếu giá trị của cha không truyền props xuống con thì tự biết là không render lai
    //! cần phải gọi constructor
    // static getDerivedStateFromProps(newProps,currentState){
    //     //quy định pros nào đổi thì render lại
    //     console.log("getDerivedStateFromProps PureComponent")
    //     return null
    // }
  render() {
      console.log("render PureComponent")
    return (
      <div>ChildPureComponent
          <p>{this.props.like}</p>
          {/* <p>{this.props.product.name}</p> */}
      </div>
    )
  }
}
