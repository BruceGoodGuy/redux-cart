import React, {Component} from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Message from './components/Message/message';
import Cart from './components/Cart/cart';
import MessageContainer from './containers/MessageContainer';
import ProductsContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
class App extends Component {
  render(){
    return (
        <div>
        <Header></Header>
        <main id="mainContainer">
            <div className="container">
                <ProductsContainer />
                <MessageContainer></MessageContainer>
                <CartContainer></CartContainer>
            </div>
        </main>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;
