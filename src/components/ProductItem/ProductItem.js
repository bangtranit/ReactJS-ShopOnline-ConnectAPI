import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>iphone 6 plus</td>
                <td>8000000</td>
                <td>
                    <span className="label label-warning">Còn hàng</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success ml-10">Sửa</button>
                    <button type="button" className="btn btn-danger ml-10">Xoá</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
