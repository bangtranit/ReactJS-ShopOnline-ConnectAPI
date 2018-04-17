import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status === true ? 'con hang' : 'het hang';
        var statusClass = product.status === true ? 'success' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
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
