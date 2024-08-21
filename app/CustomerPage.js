"use client";

import React, { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import axios from "axios";

function CustomerPage() {
  const companies = {
    Sparx: [
      {
        name: "Sparx Model A",
        price: 50,
        img: "https://via.placeholder.com/200?text=Sparx+Model+A",
      },
      {
        name: "Sparx Model B",
        price: 60,
        img: "https://via.placeholder.com/200?text=Sparx+Model+B",
      },
    ],
    // Other companies...
  };

  const [showProfile, setShowProfile] = useState(false);
  const [showData, setShowData] = useState(null);
  const [cart, setCart] = useState([]);
  const [placeOrder, setPlaceOrder] = useState([]);
  const [select, setSelect] = useState(null);
  // Form state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null); // To store the generated OTP for verification

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedOrder = JSON.parse(localStorage.getItem("order")) || [];
    setCart(storedCart);
    setPlaceOrder(storedOrder);
  }, []);

  const openProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

  function addToCart(name, price) {
    const newItem = { name, price };
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // Function to handle OTP generation and sending
  function handleOtp() {
    axios.post("/api/sendotp", { email }).then((res) => {
      setGeneratedOtp(res.data.otp);
    });
    alert(`OTP sent`);
  }

  // Function to handle placing the order
  function handlePlaceOrder() {
    if (otp === generatedOtp?.toString()) {
      const orderDetails = {
        name,
        email,
        address,
        cart,
      };
      const updatedOrders = [...placeOrder, orderDetails];
      setPlaceOrder(updatedOrders);
      localStorage.setItem("order", JSON.stringify(updatedOrders));
      alert("Order placed successfully!");
      setCart([]);
      setEmail("");
      setName("");
      setAddress("");
      setOtp("");
      setGeneratedOtp(null);
      localStorage.removeItem("cart");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }

  return (
    <div>
      <header>
        <h1>New Bharat Footwear</h1>
        <nav>
          <button onClick={() => setSelect("cart")}>Cart</button>
          <button onClick={() => setSelect("placed")}>Placed Orders</button>
          <button onClick={() => setSelect("shipped")}>Shipped Orders</button>
          <button className="profile-button" onClick={openProfile}>
            Profile
          </button>
        </nav>
      </header>

      <main>
        <section>
          {Object.entries(companies).map(([key, value]) => (
            <div
              key={key}
              onClick={() => setShowData(value)}
              className="company-circle"
            >
              {key}
            </div>
          ))}
        </section>

        <section id="productDisplay">
          {showData &&
            showData.map((product) => (
              <div className="product" key={product.name}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product.name, product.price)}>
                  Add to Cart
                </button>
              </div>
            ))}
        </section>

        {select == "cart" && (
          <section id="cart">
            <h1>Cart</h1>
            {cart.map((data, index) => (
              <p key={index}>
                {data.name} - ₹{data.price}
              </p>
            ))}

            <div className="login-container">
              <h2>Place Order</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button onClick={handleOtp}>Send OTP</button>
              {generatedOtp && (
                <button onClick={handlePlaceOrder}>Place Order</button>
              )}{" "}
            </div>
          </section>
        )}
        {select === "placed" && (
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
                </div>
              ))
            ) : (
              <p>No placed orders found.</p>
            )}
          </section>
        )}
      </main>

      {showProfile && <ProfileModal onClose={closeProfile} />}
    </div>
  );
}

export default CustomerPage;
