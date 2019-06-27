import React, {Component} from 'react';
import ProductItem from './productItem';
import {connect} from 'react-redux';
class Product extends Component {
  render(){
    var { products } = this.props;
    return (<section className="section">
    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
    <div className="row">
        {this.showProduct(products)}

    </div>
</section>)
  }

  showProduct = (products) => {
    var result = null;
    if(products.length > 0){
      result = products.map((value, key)=> {
        return <ProductItem key={value.id} product = {value}></ProductItem>;
      })
    }
    return result;
  }
}

// gán cho props products 1 states.
// lấy từ store
const mapStateToProps = state => {
  return {
    products : state.products
  }
}

export default connect(mapStateToProps, null)(Product);