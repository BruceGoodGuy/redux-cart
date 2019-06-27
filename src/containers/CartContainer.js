import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart/cart';
import CartItem from './../components/Cart/cartItem';
import CartResult from './../components/Cart/cartResult';
import MSG from './../constants/message';
class CartContainer extends Component {
  render(){
      var {carts} = this.props;
    return (
    <Cart>
        {this.showCartItem(carts)}
        {this.showTotalAmount(carts)}
    </Cart>)
  }

  showCartItem = (carts) => {
      console.log("Cart: ", carts)
    var {onAddToCart} = this.props;
    var result = MSG.MSG_CART_IS_EMPTY;
    if(carts.length > 0){
          result = carts.map((cart, key) => {
              return <CartItem key={key} product={cart}></CartItem>
          })
      }
      return result;
  }

  showTotalAmount = (carts) => {
    let money = 0;
    let result = null;
    if(carts.length > 0){
        carts.map((cart, key) => {
            money += cart.product.price*cart.quantity;
        })
        result =  <CartResult money={money}></CartResult>
    }
    return result;
  }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}


// gán cho props products 1 states.
// lấy từ store
const mapStateToProps = state => {
    return {
        carts : state.carts
    }
}

export default connect(mapStateToProps)(CartContainer);
