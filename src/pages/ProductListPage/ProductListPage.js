import React, { Component } from 'react'
import ProductItem from './../../components/ProductItem/ProductItem'
import ProductList from './../../components/ProductList/ProductList'

class ProductListPage extends Component {
    render() {
        var products = null;
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
                    index={index}
                />
            })
        }
        return result;
    }
}

export default ProductListPage;
