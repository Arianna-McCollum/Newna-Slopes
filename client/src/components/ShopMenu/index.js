import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";
import './style.css';
import { idbPromise } from "../../utils/helpers"

// components
import CategoryMenu from "../CategoryMenu";
import ProductItem from "../ProductItem";


function ShopMenu() {
    const [state, dispatch] = useStoreContext();
    console.log(state)

    const { currentCategory } = state;
    
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    console.log(data)

    useEffect(() => {
        if(data){
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
        }
    }, [data, loading, dispatch])

    function filterProducts(){
        if(!currentCategory){
            return state.products;
        }

        return state.products.filter(product => product.category._id === currentCategory);
    }

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <h1>The Wax Room</h1>
      </div>
      
      <h2>
        Get your favorite gear at the best price! Whether you are experienced or
        new to the slopes, browse our shop below to find a product that will
        suit your needs.
      </h2>
      <div className="shop-container">
        <h1>Products</h1>
        <div className="shop-wrap">
            <CategoryMenu />
          {state.products.length ? (
            <div className="shop-right">
                {filterProducts().map(product => (
                    <ProductItem 
                        key = {product._id}
                        _id = {product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
          ) : (
            <h3>No products found</h3>
          )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
      </div>
    </div>
  );
}

export default ShopMenu;
