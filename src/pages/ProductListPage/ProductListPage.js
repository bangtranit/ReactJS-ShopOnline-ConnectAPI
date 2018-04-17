import React, { Component } from 'react'
import ProductItem from './../../components/ProductItem/ProductItem'
import ProductList from './../../components/ProductList/ProductList'
import { connect } from 'react-redux'
import callAPI from './../../utils/ApiCaller'
import { Link } from 'react-router-dom'


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        callAPI('product', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        });
    }

    render() {
        var { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">Thêm sản phẩm</Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    showProduct = (products) => {
        var result = null;
        if (products) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index + 1}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps, null)(ProductListPage);
