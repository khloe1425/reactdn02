// rcc
import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import NavComponent from './NavComponent'

export default class HomeComponent extends Component {

    //trả về thành phần UI của component => để hiển thị trên html
   //div: đối tượng JSX (đối tượng UI) do reactjs định nghĩa
   //className: thuộc tính của đối tượng JSX
    render() {

        return (
            //không được return 2 thẻ cùng cấp
            // <div></div>
            //=> div là object => return chỉ trả về 1 biến (return obj)
            //=> chỉ được có 1 thẻ bao bên ngoài trong lệnh return
            <div className='container home'>
                HomeComponent
                <div className="row">
                    <div className="col-12">
                       <HeaderComponent/>
                    </div>
                    <div className="col-4">
                       <NavComponent/>
                    </div>
                    <div className="col-8">
                        <ContentComponent/>
                    </div>
                    <div className="col-12">
                       <FooterComponent/>
                    </div>
                </div>
            </div>

        )
    }
}
