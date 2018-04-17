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
    onChange = e =>{
        var {target} = e;
        var {name} = target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        })
    }

    onSave = e =>{
        e.preventDefault();
        console.log(this.state);
        var {txtName,txtPrice,chkbStatus} = this.state;
        var {history} = this.props;
        callAPI('product','POST',{
            name:txtName,
            price:txtPrice,
            status:chkbStatus
        }).then(res =>{
            console.log(res);
            var {status}=res;
            if(status === Config.CODE_CREATE_OK){
                history.goBack();
            }else{
                alert('Create product has failed');
            }
        })
    }
    render() {
        var { txtName, txtPrice, chkbStatus} = this.state;
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
                                onChange={this.onChange} />
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
