import React, {useState} from 'react';
import ShopNav from '../components/ShopNav';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from "../components/ProductList";
import Cart from '../components/Cart';


function Shop() {
  return (
    <div>
        <ShopNav />
        <CategoryMenu />
        <ProductList/>
        <Cart/>
    </div>
    
  );
}

export default Shop;