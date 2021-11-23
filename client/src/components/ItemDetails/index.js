import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS, ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from "../../utils/actions";
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from "../../assets/spinner.gif";
import './style.css';

// Components
import ShopNav from '../ShopNav';

function ItemDetails() {
const [state, dispatch] = useStoreContext();
const { id } = useParams();

const [currentProduct, setCurrentProduct] = useState({})

const { loading, data } = useQuery(QUERY_PRODUCTS);

const { products, cart } = state;

useEffect(() => {
  if (products.length) {
    setCurrentProduct(products.find(product => product._id === id));
  } else if (data) {
    dispatch({
      type: UPDATE_PRODUCTS,
      products: data.products
    });
  }
}, [products, data, dispatch, id]);

const addToCart = () => {
  const itemInCart = cart.find((cartItem) => cartItem._id === id);

  if (itemInCart) {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: id,
      purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    });
  } else {
    dispatch({
      type: ADD_TO_CART,
      product: { ...currentProduct, purchaseQuantity: 1 }
    });
  }
};

const removeFromCart = () => {
  dispatch({
    type: REMOVE_FROM_CART,
    _id: currentProduct._id
  });
};

  return (
    <div className="details">
      <ShopNav />
      {currentProduct ? (
        <div className="product-container">
          <div className="product-img-container">
          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          </div>

          <div className="info-container">
            <h2>{currentProduct.name}</h2>
            <p><em>{currentProduct.description}</em></p>
            <p><strong>Price:</strong> ${currentProduct.price}{' '}</p>
            <div className="btn-wrapper3">
              <button onClick={addToCart}>Add to Cart</button>
              <button disabled={!cart.find(p => p._id === currentProduct._id)} onClick={removeFromCart}>Remove from Cart</button>
            </div>
            <Link to="/shop">← Back to Products</Link>

          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ItemDetails;