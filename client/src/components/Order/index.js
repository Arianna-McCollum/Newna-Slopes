import React from "react";
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../../utils/queries";

function Order() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    
    <div>
      {user ? (
        <>
          <h2>Order History for {user.firstName} {user.lastName}</h2>
          {user.orders.map((order) => (
            <div key={order._id} className="order">
              <h3>Order Placed{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
              <div className="flex-row">
                {order.products.map(({ _id, image, name, price }, index) => (
                  <div key={index} className="card px-1 py-1">
                    <Link to={`/products/${_id}`}>
                      <img
                        alt={name}
                        src={`/images/${image}`}
                      />
                      <p>{name}</p>
                    </Link>
                    <div>
                      <span>${price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : null}
    <Link to="/shop">
        ← Back to Products
    </Link>
    </div>
  )
};

export default Order;
