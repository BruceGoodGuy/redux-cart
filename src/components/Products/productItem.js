import React, {Component} from 'react';
const cryptoRandomString = require('crypto-random-string');
class ProductItem extends Component {
  render(){
      var {product} = this.props
    return (<div className="col-lg-4 col-md-6 mb-r">
    <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                className="img-fluid" alt="" />
            <a>
                <div className="mask waves-light waves-effect waves-light"></div>
            </a>
        </div>
        <div className="card-body">
            <h4 className="card-title">
                <strong>
                    <a>{product.name}</a>
                </strong>
            </h4>
            <ul className="rating">
                <li>
                    {this.showRating(product.rating)}
                </li>
                
            </ul>
            <p className="card-text">
                {product.description}
            </p>
            <div className="card-footer">
                <span className="left">{product.price}$</span>
                <span className="right">
                    <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={()=>{this.addToCart(product)}}>
                        <i className="fa fa-shopping-cart"></i>
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>)
  }

  addToCart = (product) => {
      this.props.onAddToCart(product)
  }
  showRating = (star) => {
      var result = [];
      if(star>0){
          for(var i = 1; i<= star; i ++){
              result.push(<i className="fa fa-star" key={cryptoRandomString({length: 10})}></i>)
          }
          for(var j = 1; j<= ( 5 - star); j++){
              result.push(<i className="fa fa-star-o" key={cryptoRandomString({length: 10})}></i>)
          }
      }
      return result;
   
  }
}

export default ProductItem;