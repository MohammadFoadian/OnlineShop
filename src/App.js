import React from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';

// Components
import Store from './components/Store';
import ProductsDetail from './components/ProductsDetail';
import Navbar from './components/Shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';



const App = () => {
  return (
    <div >
      <ProductContextProvider> {/* 14 */}
        <CartContextProvider> {/* 39 */}
        <Navbar /> {/* 48 */}
      <Switch> {/* 24 */}


        <Route path='/products/:id' component={ProductsDetail} /> {/* 27 */}
        <Route path='/products' component={Store} /> {/* 25 */}
        {/* <Store />  16 */}
        <Route path='/cart' component={ShopCart} /> {/* 50 */}
        <Redirect to='/products' /> {/* 26 */}

      </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;