import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {

    state ={
        values:{
            taiKhoan:'',
            hoTen:'',
            matKhau:'',
            sdt:'',
            email:'',
            loaiND:''
        },
        errors:{
            taiKhoan:'',
            hoTen:'',
            matKhau:'',
            sdt:'',
            email:'',
            loaiND:''
        }
    }

    handleInput = (event) => {

        let {value,name} = event.target;
        //Lưu giá trị từ form
        let newValues = {...this.state.values}
        //newValues.taiKhoan
        //newValues[taiKhoan]
        newValues[name] = value// hoTen:value, matKhau:value

        //Lưu thông báo lỗi
        let newError = {...this.state.errors}
        let messageError = '';

        if(value.trim() === ''){
            //bị rỗng
            messageError = name + " không được để trống";
        }

        if(event.target.getAttribute('typeform') === "email"){
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!reg.test(value)){
                    //bị lỗi
                    messageError = name + " không đúng định dạng";
                }
        }

        newError[name] = messageError;

        this.setState({
            values:newValues,
            errors:newError 
        },() => { 
            console.log(this.state)
         })
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        console.log('state submit', this.state)

        let isValid = true;
        // for in (duyệt từng thuộc tính đối tượng)
        for(let error in  this.state.errors){
            if(this.state.errors[error] !== ""){
                //bị lỗi
                isValid = false;
                break;
            }
        }
        if(!isValid){
            alert("Còn lỗi kìa");
            return;
        }
        //Submit lên redux




     }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    Đăng Ký
                </div>
                <div className="card-body">
                    <form onSubmit={(event) => { 
                        this.handleSubmit(event)
                     }}>
                        <div className="row">
                            <div className="col">
                                <input onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='taiKhoan' type="text" className="form-control" placeholder="Tài khoản" />
                            
                                 <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                            
                            </div>
                            <div className="col">
                                <input onChange={(event) => { 
                                    this.handleInput(event);
                                 }}  name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                            <p className='text-danger'>{this.state.errors.hoTen}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <input onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='matKhau' type="password" className="form-control" placeholder="Mật Khẩu" />
                            <p className='text-danger'>{this.state.errors.matKhau}</p>
                            </div>
                            <div className="col">
                                <input onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                            <p className='text-danger'>{this.state.errors.sdt}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <input onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='email' typeform="email"  type="email" className="form-control" placeholder="Email" />
                            <p className='text-danger'>{this.state.errors.email}</p>
                            </div>
                            <div className="col">
                                <select onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='loaiND' className="form-control">
                                    <option value="KH">Khách Hàng</option>
                                    <option value="NV">Nhân Viên</option>
                                </select>
                                <p className='text-danger'>{this.state.errors.loaiND}</p>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-success'>Đăng ký</button>
                        <button type='submit' className='btn btn-primary'>Cập Nhật</button>
                    </form>

                </div>
            </div>
        )
    }
}


export default connect()(FormDangKy)