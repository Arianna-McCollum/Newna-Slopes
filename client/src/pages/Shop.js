import React, {useState} from 'react';
import ShopNav from '../components/ShopNav';
import ShopMenu from '../components/ShopMenu';

import ProductList from "../components/ProductList";
import Cart from '../components/Cart';


function Shop() {
  return (
    <div>
        <ShopNav />
        <ShopMenu />
        <ProductList/>
        <Cart/>
    </div>
    
  );
}

export default Shop;