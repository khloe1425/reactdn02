import React, { Component } from 'react'

export default class DemoState extends Component {

    // Khai báo thuộc tính
    // isLogin = false;

    /*  State , setState
     state: thuộc tính có sẵn của class component, lưu biến cần thay đổi giá trị
     setState: phương thức giúp gán giá trị mới cho state (biến chứa tring state), tự động gọi lại phương thức render() để load lại UI */
    state = {
        isLogin: false
    }



    renderLogin = () => {

        if (this.state.isLogin) {
            return <span className='text-white'>
                User123</span>;
            // return (
            //     <span className='text-white'>User123</span>;
            // )
        } else {
            return <button className='btn btn-success' onClick={() => {
                // this.isLogin = true;
                //sau khi click
                // console.log("sau khi click " + this.isLogin);
                // this.render();

                // Không gán trực tiếp giá trị cho state vì sẽ không render lại UI
                // this.state.isLogin = true;

                // this.setState(nhận vào giá trị mới của state)
                // let newState ={
                //     isLogin: true
                // }
                // this.setState(newState);

                // => rút gọn nếu chỉ có 1 giá trị trong state

                //setState(): là hàm bất đồng bộ
                //console.log Không thay đổi giá trị, do dòng console.log chạy trước khi setState chạy xong
                // this.setState({isLogin: true});
                // console.log(this.state.isLogin);
                this.setState({isLogin: true}, () => { 
                    //chạy sau khi setState chạy xong
                    console.log(this.state.isLogin);
                 })


            }}>Login</button>
        }
    }


    //Render(tạo UI) UI khi ứng dụng React được load
    //Chỉ chạy 1 lần không thể chạy lại (Reactjs quy định)
    render() {
        // trước khi click
        // console.log("trước khi click " + this.isLogin);

        return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        {/* { this.isLogin === true ? <span className='text-white'>User123</span>:<button className='btn btn-success'>Login</button>} */}

                        {this.renderLogin()}

                    </div>
                </nav>

            </div>
        )
    }
}
