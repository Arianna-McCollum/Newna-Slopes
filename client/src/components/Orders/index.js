import React from "react";
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";
import './style.css';

function Order() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    
    <div className="order-page">
      {user ? (
        <>
          <div className="order-hero">
            <h1>Order History for <br/>{user.firstName} {user.lastName}</h1>
          </div>
          {user.orders.map((order) => (
            <div key={order._id} className="order">
              <h2>Order Placed - {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h2>
              <div className="container">
                {order.products.map(({ _id, image, name, price }, index) => (
                  <div key={index} className="product">
                    <Link to={`/products/${_id}`}>
                      <img
                        alt={name}
                        src={`/images/${image}`}
                      />
                      
                    </Link>
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : null}
    <div className="back-btn">
      <Link to="/shop">
          ← Back to Products
      </Link>
    </div>
    </div>
  )
};

export default Order;
