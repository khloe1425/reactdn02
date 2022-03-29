import React, { Component } from 'react'

export default class ChiTiet extends Component {
    render() {
        return (
            <div>
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
                            <td>AMOLED</td>

                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}
