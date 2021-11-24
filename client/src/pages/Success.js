import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import '../css/success.css'


function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map(item => item._id);
      
      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
    
        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        
      setTimeout(() => {
        window.location.assign('/shop');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="shop-hero">
      <h1>Success!</h1>
      <h2>Thank you for your purchase</h2>
      <h2>You will be redirected back to the Shop page</h2>
    </div>
  );
};

export default Success;
