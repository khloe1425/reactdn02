import React, { Component } from 'react'

export default class ChiTiet extends Component {
    render() {
        console.log(this.props.proObj);
        let { tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.props.proObj;
        return (

            <div className="row">
                <div className="col-4">
                    <h3>{tenSP}</h3>
                    <img className='img-fluid' src={hinhAnh} alt="..." />
                </div>
                <div className="col-8">
                    <h2>Thông số kỹ thuật</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Thành phần</th>
                                <th scope="col">Thông tin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{manHinh}</td>

                            </tr>
                            <tr>
                                <td>HDH</td>
                                <td>{heDieuHanh}</td>

                            </tr>
                            <tr>
                                <td>Camera truoc</td>
                                <td>{cameraTruoc}</td>

                            </tr>
                            <tr>
                                <td>Camera Sau</td>
                                <td>{cameraSau}</td>

                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{ram}</td>

                            </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{rom}</td>

                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        )
    }
}
