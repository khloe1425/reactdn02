import React, { Component } from 'react'
import style from "./BindingData.module.css"

//External css
//Import ở bất kỳ component nào cũng dùng chung cho toàn ứng dụng
import './BindingData.css';

export default class BindingData extends Component {
    // BindingData: đưa các giá trị của biến hiển lên UI

    //Ngoài render
    //thuộc tính của class
    tenSV = "Nguyễn Thị Sinh Viên";

    pets = [
        {
            id: 1,
            name: "Na",
            img: "https://picsum.photos/id/237/200/300",
            price: 3000
        },
        {
            id: 2,
            name: "Nú",
            img: "https://picsum.photos/id/237/200/300",
            price: 2000
        }
    ]


    render() {
        //Trong render
        // biến của hàm
        let age = 20;
        //CSS inline
        //nhiều thuộc css
        let styleImg = {
            width:"100%",
            height:"200px",
            border:"3px solid red",
            borderRadius:"15px"
        }
        return (
            <div className='container'>
                <h1>BindingData</h1>
                {/* {}: binding data lên UI */}
                <p className='alert alert-primary'>Tên sinh viên: <span>{this.tenSV}</span> </p>
                <p className='alert alert-danger'>Tuổi sinh viên: <span>{age}</span> </p>

                <div className="row">
                    <div className="col-4">
                        <div className="card reactCard">
                            <img style={styleImg} src={this.pets[0].img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 style={{color:"green"}} className="card-title">{this.pets[0].name}</h5>
                                <p className={`${style.colorPrice}`}>{this.pets[0].price}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={this.pets[1].img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.pets[1].name}</h5>
                                <p className="card-text">{this.pets[1].price}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
