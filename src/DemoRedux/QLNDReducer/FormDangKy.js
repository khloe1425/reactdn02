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
        let newValues = {...this.props.nguoiDung.values}
        //newValues.taiKhoan
        //newValues[taiKhoan]
        newValues[name] = value// hoTen:value, matKhau:value

        //Lưu thông báo lỗi
        let newError = {...this.props.nguoiDung.errors}
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

        this.props.dispatch({
            type:"HANDLE_INPUT",
            nguoiDung:{
                values:newValues,
                errors:newError
            }
        });






        // this.setState({
        //     values:newValues,
        //     errors:newError 
        // },() => { 
        //     console.log(this.state)
        //  })
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        // console.log('state submit', this.state)

        let isValid = true;
        // for in (duyệt từng thuộc tính đối tượng)
        //forEach()
        for(let error in  this.props.nguoiDung.errors){
            if(this.props.nguoiDung.errors[error] !== ""){
                //bị lỗi
                isValid = false;
                break;
            }
        }
        for(let value in this.props.nguoiDung.values){
            if(this.props.nguoiDung.values[value] === ""){
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

        let action = {
            type:"THEM_NGUOI_DUNG",
            dataNguoiDung: this.props.nguoiDung.values
        }
        this.props.dispatch(action);



     }

    render() {
        // console.log(this.props.thongTinND);
        // let {taiKhoan,hoTen,matKhau,sdt,email,loaiND} = this.props.thongTinND;
        console.log(this.props.nguoiDung.values)
        let {taiKhoan,hoTen,matKhau,sdt,email,loaiND} = this.props.nguoiDung.values;
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
                                <input value={taiKhoan} onChange={(event) => { 
                                    this.handleInput(event);
                                 }}   name='taiKhoan' type="text" className="form-control" placeholder="Tài khoản" />
                            
                                 <p className='text-danger'>{this.props.nguoiDung.errors.taiKhoan}</p>
                            
                            </div>
                            <div className="col">
                                <input value={hoTen} onChange={(event) => { 
                                    this.handleInput(event);
                                 }}  name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                            <p className='text-danger'>{this.props.nguoiDung.errors.hoTen}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <input value={matKhau} onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='matKhau' type="password" className="form-control" placeholder="Mật Khẩu" />
                            <p className='text-danger'>{this.props.nguoiDung.errors.matKhau}</p>
                            </div>
                            <div className="col">
                                <input value={sdt}  onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                            <p className='text-danger'>{this.props.nguoiDung.errors.sdt}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <input value={email} onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='email' typeform="email"  type="email" className="form-control" placeholder="Email" />
                            <p className='text-danger'>{this.props.nguoiDung.errors.email}</p>
                            </div>
                            <div className="col">
                                <select value={loaiND} onChange={(event) => { 
                                    this.handleInput(event);
                                 }} name='loaiND' className="form-control">
                                    <option value="KH">Khách Hàng</option>
                                    <option value="NV">Nhân Viên</option>
                                </select>
                                <p className='text-danger'>{this.props.nguoiDung.errors.loaiND}</p>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-success'>Đăng ký</button>
                        <button onClick={(event) => { 
                            event.preventDefault();

                            let action ={
                                type:"CAP_NHAT",
                                nguoiDungCapNhat:this.props.nguoiDung.values
                            }
                            this.props.dispatch(action);
                         }} type='submit' className='btn btn-primary'>Cập Nhật</button>
                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => { 
    return{
        thongTinND: rootReducer.QLNDReducer.thongTinND,
        nguoiDung: rootReducer.QLNDReducer.nguoiDung
    }

 }
export default connect(mapStateToProps)(FormDangKy)