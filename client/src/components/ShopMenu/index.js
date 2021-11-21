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
    
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
          dispatch({
            type: UPDATE_CATEGORIES,
            categories: categoryData.categories
          });
          categoryData.categories.forEach(category => {
            idbPromise('categories', 'put', category);
          });
        } else if (!loading) {
          idbPromise('categories', 'get').then(categories => {
            dispatch({
              type: UPDATE_CATEGORIES,
              categories: categories
            });
          });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
          type: UPDATE_CURRENT_CATEGORY,
          currentCategory: id
        });
    }; 

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);
    useEffect(() => {
        if(data) {
          dispatch({
               type: UPDATE_PRODUCTS,
              products: data.products
            });
            data.products.forEach((product) => {
              idbPromise('products', 'put', product);
            });
        } else if (!loading) {
          idbPromise('products', 'get').then((products) => {
            dispatch({
              type: UPDATE_PRODUCTS,
             products: products
           });
          });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
          return state.products;
        }
    
        return state.products.filter(product => product.category._id === currentCategory);
    }

    return (
    <div className="shop-page">
        <div className="shop-hero">
            <h1>The Wax Room</h1>
        </div>
        <h2>Get your favorite gear at the best price! Whether you are experienced or new to the slopes, browse our shop below to find a product that will suit your needs.</h2>
        <div className="shop-container">
            <h1>Products</h1>
            <div className="shop-wrap">
                <div className="shop-left">
                    {categories.map(item => (
                        <button 
                        className="product-btn" 
                        key={item._id}
                        onClick={() => {handleClick(item._id);}}>
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="shop-right">
                    {state.products.length ? (

                    <div className="product">
                        <img src="https://dunkinanytime.coca-cola.com/content/dam/nagbrands/us/dunkin/en/products/iced-coffee/13-7-fl-oz/dunkin_PLP_thinMints.jpg" alt=""></img>
                        <h3>Iced Coffee</h3>
                        <h4>Price: $4</h4>
                        <div className="btn-wrapper">
                            <button>View</button>
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                    ) : (
                        <h3>You haven't added any products yet!</h3>
                    )}
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