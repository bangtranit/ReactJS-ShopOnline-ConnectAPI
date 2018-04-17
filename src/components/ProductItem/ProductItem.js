import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                    <Link 
                        to={`/product/${product.id}/edit`}
                        className='btn btn-success ml-10'
                    >Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger ml-10"
                        onClick={() => this.onClickToDelete(product.id)}
                    >Xoá</button>
                </td>
            </tr>
        );
    }
    onClickToDelete = (id) =>{
        if(confirm('Ban co muon xoa san pham nay khong')){//eslint-disable-line
            this.props.onDelete(id);
        }
    }
}

export default ProductItem;
