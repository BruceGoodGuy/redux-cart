import React, {Component} from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Products from './components/Products/products';
import Message from './components/Message/message';
import Cart from './components/Cart/cart';
class App extends Component {
  render(){
    return (
        <div>
        <Header></Header>
        <main id="mainContainer">
            <div className="container">
                <Products></Products>
                <Message></Message>
                <Cart></Cart>
            </div>
        </main>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;
