import React, { Component } from 'react'
import ProductItem from './../../components/ProductItem/ProductItem'
import ProductList from './../../components/ProductList/ProductList'
import { connect } from 'react-redux'

class ProductListPage extends Component {
    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>
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
                    index={index+1}
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
