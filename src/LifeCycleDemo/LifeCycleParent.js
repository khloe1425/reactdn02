import React, { Component } from 'react'
import Child from './Child'
import ChildPureComponent from './ChildPureComponent';
import Footer from './Footer';
import Header from './Header';

export default class LifeCycleParent extends Component {

    constructor(props){
        super(props);
        this.state = {
            number:1,
            like:1,
            soLuong:0,
            product:{
              id:"001",
              name:"SP 1"
            },
            isLogin: false
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(newProps,currentState){

        console.log("getDerivedStateFromProps Parent")
        return null
    }

    // Updating: thay doi prop, state
    // props của con: thay doi khi dữ liệu từ compent cha truyền xuống thay đổi
    //=> state của cha
    // props của cha: thay đổi khi reducer thay đổi
    // State: gọi setState
  shouldComponentUpdate(newProps,newState){
      console.log("shouldComponentUpdate");
    return true;
  }
  
    render() {
      console.log("render")
    return (
      <div className='container'>

          <button onClick={() => { 
            this.setState({
              isLogin:true
            })
           }} className='btn btn-info'>Change Login</button>

           {this.state.isLogin ? "username": <Header/> }
          


          <h2>LifeCycleParent</h2>



          <p>{this.state.number}</p>
          <button onClick={() => { 
              this.setState({
                number: this.state.number + 1
              })
           }} className='btn btn-success'>Change number</button>
           
            <p>{this.state.like}</p>
          <button onClick={() => { 
              this.setState({
                like: this.state.like + 1
              })
           }} className='btn btn-danger'>Change like</button>
            
            {/* Doi state của cha  */}
            <p>{this.state.soLuong}</p>
          <button onClick={() => { 
              this.setState({
                soLuong: this.state.soLuong + 1
              })
           }} className='btn btn-danger'>Change So luong</button>
             {/* Nếu không có truyền props cho con nhưng cha render lại vẫn làm render lại con */}
            <Child like={this.state.like} number={this.state.number}/>
           

            <p>{this.state.product.name}</p>
          <button onClick={() => { 
            // let newProduct = {
            //   id:"001",
            //   name:"SP 2"
            // }
              let newName = "Sam Sung"
              this.setState({
                product:{
                  name: newName
                }
              })
           }} className='btn btn-danger'>Change Product</button>
{/* product={this.state.product} */}
           <ChildPureComponent  like={this.state.like}  />

           <Footer/>
      </div>
    )
  }

  // Load ung dung
  componentDidMount(){
      //thư viện slick, countup => phải load xong UI => mới có thẻ để gắn hiệu ứng
      // lấy data từ API 
      console.log("componentDidMount");
  }

  //thay doi state hoac prop
  componentDidUpdate(){
    //thư viện slick, countup => phải load xong UI => mới có thẻ để gắn hiệu ứng
      // lấy data từ API
    console.log("componentDidUpdate");
  }

}
