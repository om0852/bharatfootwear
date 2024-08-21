"use client"
import React, { useEffect, useState } from 'react';

function AdminPage() {
    const [orders, setOrders] = useState([]);
    const [shippedOrders, setShippedOrders] = useState([]);

    useEffect(() => {
        // Fetch or load orders from localStorage
        const loadedOrders = JSON.parse(localStorage.getItem('adminOrders')) || [];
        const loadedShippedOrders = JSON.parse(localStorage.getItem('adminShippedOrders')) || [];
        setOrders(loadedOrders);
        setShippedOrders(loadedShippedOrders);
    }, []);

    const clearOrders = () => {
        setOrders([]);
        localStorage.removeItem('adminOrders');
    };

    const clearShippedOrders = () => {
        setShippedOrders([]);
        localStorage.removeItem('adminShippedOrders');
    };

    return (
        <div>
            <header>
                <h1>Admin Panel</h1>
            </header>
            <main id="adminContent">
                <h2>Orders</h2>
                <ul id="adminOrderList">
                    {orders.map((order, index) => (
                        <li key={index}>{order}</li>
                    ))}
                </ul>
                <button id="adminClearOrdersBtn" onClick={clearOrders}>Clear All Orders</button>

                <h2>Shipped Orders</h2>
                <ul id="adminShippedOrderList">
                    {shippedOrders.map((order, index) => (
                        <li key={index}>{order}</li>
                    ))}
                </ul>
                <button id="adminClearShippedOrdersBtn" onClick={clearShippedOrders}>Clear All Shipped Orders</button>
            </main>
        </div>
    );
}

export default AdminPage;
