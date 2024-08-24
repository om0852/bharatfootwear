"use client"
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [shippedOrders, setShippedOrders] = useState([]);
    useEffect(() => {
        let loadedShippedOrders = JSON.parse(localStorage.getItem("history")) || [];
        setShippedOrders(loadedShippedOrders);
      }, []);
  return (
    <div className='container'>
      {shippedOrders.length > 0 ? (
            shippedOrders.map((order, index) => (
              <div key={index} className="order-details container">
                <h2>Shipped Order #{index + 1}</h2>
                <p>
                  <strong>Name:</strong> {order.name}
                </p>
                <p>
                  <strong>Email:</strong> {order.email}
                </p>
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
                <h3>Cart Items:</h3>
                <ul>
                  {order.cart.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.name} - ₹{item.price}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No shipped orders found.</p>
          )}
    </div>
  )
}

export default Page
