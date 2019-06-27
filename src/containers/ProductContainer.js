import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products/products';
import ProductItem from './../components/Products/productItem';
import PropTypes from 'prop-types';
import {actAddToCart, changeMessage} from './../actions/index';
import {msg} from './../constants/message';
class ProductContainer extends Component {
  render(){
    var { products } = this.props;
    return (<Products> {this.showProduct(products)} </Products>)
  }

  showProduct = (products) => {
    var result = null;
    var {onAddToCart} = this.props;
    if(products.length > 0){
      result = products.map((value, key)=> {
        return <ProductItem key={value.id} product = {value} onAddToCart = {onAddToCart}></ProductItem>;
      })
    }
    return result;
  }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddToCart: (product) => {
          dispatch(actAddToCart(product, 1))
          dispatch(changeMessage(msg.MSG_ADD_TO_CARD_SUCCESS))
      }
  }
}

// gán cho props products 1 states.
// lấy từ store
const mapStateToProps = state => {
    return {
      products : state.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
