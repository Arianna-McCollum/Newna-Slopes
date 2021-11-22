import React, {useState} from 'react';
import ShopNav from '../components/ShopNav';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from "../components/ProductList";
import Cart from '../components/Cart';
import ShopMenu from '../components/ShopMenu';
import '../css/shop.css'


function Shop() {
  return (
    <div>
        <ShopNav />
        {/* <CategoryMenu /> */}
        <ShopMenu/>
        {/* <Cart/> */}
    </div>
    
  );
}

export default Shop;