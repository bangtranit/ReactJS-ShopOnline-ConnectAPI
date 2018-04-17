import React, { Component } from 'react'
import * as Config from './../../constants/Config'
import callAPI from './../../utils/ApiCaller'
import { Link } from 'react-router-dom'

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var { id } = match.params;
            callAPI(`product/${id}`, 'GET', null).then(res => {
                console.log(res);
                var { data } = res;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            })
        }
    }

    onChange = e => {
        var { target } = e;
        var { name } = target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = e => {
        e.preventDefault();
        console.log(this.state);
        var {id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        if(id){
            console.log('updating....')
            callAPI(`product/${id}`,'PUT',{
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res=>{
                history.goBack();
            })
        }else{
            callAPI('product', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                console.log(res);
                var { status } = res;
                if (status === Config.CODE_CREATE_OK) {
                    history.goBack();
                } else {
                    alert('Create product has failed');
                }
            })
        }
        
    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm:</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Giá:</label>
                        <input
                            type="number"
                            className="form-control"
                            id=""
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange} 
                                checked={chkbStatus}/>
                            Còn hàng
                        </label>
                    </div>
                    {/* <Link to='/product-list' className='btn btn-danger'> Trở lại </Link> */}
                    <Link to='/product-list' className='btn btn-danger mr-10' >
                        Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
