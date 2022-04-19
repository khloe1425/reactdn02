import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'

export default class QLND extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Quản lý người dùng</h2>

                <FormDangKy />

                <TableNguoiDung />



            </div>
        )
    }
}
