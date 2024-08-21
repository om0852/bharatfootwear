"use client";
import React, { useEffect, useState } from "react";

function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [shippedOrders, setShippedOrders] = useState([]);
  const [placeOrder, setPlaceOrder] = useState([]);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order")) || [];
    setPlaceOrder(storedOrder);
    let loadedShippedOrders = JSON.parse(localStorage.getItem("shipped")) || [];
    setShippedOrders(loadedShippedOrders);
  }, []);

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("adminOrders");
  };

  const clearShippedOrders = () => {
    setShippedOrders([]);
    localStorage.removeItem("adminShippedOrders");
  };

  function handleShipped(index) {
    const update = [...placeOrder];
    const update1 = [...shippedOrders];
    update1.push(placeOrder[index]);
    update.splice(index, 1);
    setPlaceOrder(update);
    setShippedOrders(update1);
    localStorage.setItem("order", JSON.stringify(update));
    localStorage.setItem("shipped", JSON.stringify(update1));
  }

  return (
    <div>
      <header>
        <h1>Admin Panel</h1>
      </header>
      <main id="adminContent">
        <h2>Orders</h2>
        <ul id="adminOrderList">
          <section id="placedOrders">
            <h1>Placed Orders</h1>
            {placeOrder.length > 0 ? (
              placeOrder.map((order, index) => (
                <div key={index} className="order-details">
                  <h2>Order #{index + 1}</h2>
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
                  <button onClick={() => handleShipped(index)}>
                    Shipped Order
                  </button>
                </div>
              ))
            ) : (
              <p>No placed orders found.</p>
            )}
          </section>
        </ul>
        <button id="adminClearOrdersBtn" onClick={clearOrders}>
          Clear All Orders
        </button>

        <h2>Shipped Orders</h2>
        <ul id="adminShippedOrderList">
          {shippedOrders.length > 0 ? (
            shippedOrders.map((order, index) => (
              <div key={index} className="order-details">
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
        </ul>
        <button id="adminClearShippedOrdersBtn" onClick={clearShippedOrders}>
          Clear All Shipped Orders
        </button>
      </main>
    </div>
  );
}

export default AdminPage;
