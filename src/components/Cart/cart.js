import React, {Component} from 'react';
import CartItem from './cartItem';
import CartResult from './cartResult';
class Cart extends Component {
  render(){
    return (<section className="section">
    <div className="table-responsive">
        <table className="table product-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <CartItem></CartItem>
                <CartResult></CartResult>
            </tbody>
        </table>
    </div>
</section>)
  }
}

export default Cart;