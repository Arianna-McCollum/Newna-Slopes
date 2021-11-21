import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ShopMenu() {

    //for category functionality

    const [state, dispatch] = useStoreContext();

    const { categories } = state;
    
    const { data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
          dispatch({
            type: UPDATE_CATEGORIES,
            categories: categoryData.categories
          });
}
        
      }, [categoryData, dispatch]);

    // const handleClick = id => {
    //     dispatch({
    //       type: UPDATE_CURRENT_CATEGORY,
    //       currentCategory: id
    //     });
    //   };

  return (
    <div className="shop-page">
        <div className="shop-hero">
            <h1>The Wax Room</h1>
        </div>
        <h2>Get your favorite gear at the best price! Whether you are experienced or new to the slopes, browse our shop below to find a product that will suit your needs.</h2>
        <div className="shop-container">
            <h1>Products</h1>
            <div className="shop-wrap">
                {categories.map(item => (
                    <div className="shop-left">
                        <button className="product-btn">{item.name}</button>
                    </div>
                ))}
                <div className="shop-right">
                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>

                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>

                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>

                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>

                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>

                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default ShopMenu;