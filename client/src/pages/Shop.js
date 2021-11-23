import React, {useState} from 'react';
import ShopNav from '../components/ShopNav';
import Cart from '../components/Cart';
import ShopMenu from '../components/ShopMenu';
import '../css/shop.css'


function Shop() {
  return (
    <div>
        <ShopNav />
        <ShopMenu/>
        <Cart/> 
    </div>
    
  );
}

export default Shop;