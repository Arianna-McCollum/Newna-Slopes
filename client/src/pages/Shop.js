import React from 'react';
import ShopNav from '../components/ShopNav';
import ShopMenu from '../components/ShopMenu';
import '../css/shop.css'


function Shop() {
  return (
    <div>
        <ShopNav />
        <ShopMenu/>
    </div>
    
  );
}

export default Shop;