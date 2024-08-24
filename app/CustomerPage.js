"use client";

import React, { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import axios from "axios";
import Cookies from "js-cookie";

function CustomerPage() {
  const [inp, setInp] = useState("");
  const companiesList = {
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
    Adidas: [
      {
        name: "Adidas Model X",
        price: 70,
        img: "https://via.placeholder.com/200?text=Adidas+Model+X",
      },
      {
        name: "Adidas Model Y",
        price: 80,
        img: "https://via.placeholder.com/200?text=Adidas+Model+Y",
      },
    ],
    Nike: [
      {
        name: "Nike Air Max",
        price: 90,
        img: "https://via.placeholder.com/200?text=Nike+Air+Max",
      },
      {
        name: "Nike Free Run",
        price: 100,
        img: "https://via.placeholder.com/200?text=Nike+Free+Run",
      },
    ],
    Van: [
      {
        name: "Van Classic",
        price: 45,
        img: "https://via.placeholder.com/200?text=Van+Classic",
      },
      {
        name: "Van Old Skool",
        price: 55,
        img: "https://via.placeholder.com/200?text=Van+Old+Skool",
      },
    ],
    Bata: [
      {
        name: "Bata Trendy",
        price: 40,
        img: "https://via.placeholder.com/200?text=Bata+Trendy",
      },
      {
        name: "Bata Comfort",
        price: 50,
        img: "https://via.placeholder.com/200?text=Bata+Comfort",
      },
    ],
    Lancer: [
      {
        name: "Lancer Trendy",
        price: 40,
        img: "https://via.placeholder.com/200?text=Bata+Trendy",
      },
      {
        name: "Lancer Comfort",
        price: 50,
        img: "https://via.placeholder.com/200?text=Bata+Comfort",
      },
    ],
    Acolight: [
      {
        name: "Bata Trendy",
        price: 40,
        img: "https://via.placeholder.com/200?text=Bata+Trendy",
      },
      {
        name: "Bata Comfort",
        price: 50,
        img: "https://via.placeholder.com/200?text=Bata+Comfort",
      },
    ],
    Flite: [
      {
        name: "Bata Trendy",
        price: 40,
        img: "https://via.placeholder.com/200?text=Bata+Trendy",
      },
      {
        name: "Bata Comfort",
        price: 50,
        img: "https://via.placeholder.com/200?text=Bata+Comfort",
      },
    ],
    Campus: [
      {
        name: "Bata Trendy",
        price: 40,
        img: "https://via.placeholder.com/200?text=Bata+Trendy",
      },
      {
        name: "Bata Comfort",
        price: 50,
        img: "https://via.placeholder.com/200?text=Bata+Comfort",
      },
    ],
    Paragon: [
      {
        name: "Bata Trendy",
        price: 40,
        img: "https://via.placeholder.com/200?text=Bata+Trendy",
      },
      {
        name: "Bata Comfort",
        price: 50,
        img: "https://via.placeholder.com/200?text=Bata+Comfort",
      },
    ],
  };
const [companies,setCompaines]=useState(companiesList)
  useEffect(() => {
     const companiesList1 = Object.entries(companiesList)
      .filter(([key]) => key.toLowerCase().startsWith(inp.toLowerCase()))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
      setCompaines(companiesList1)
  }, [inp]);

  const [showProfile, setShowProfile] = useState(false);
  const [showData, setShowData] = useState(null);
  const [cart, setCart] = useState([]);
  const [placeOrder, setPlaceOrder] = useState([]);
  const [select, setSelect] = useState("ss");
  // Form state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null); // To store the generated OTP for verification
  const [shippedOrders, setShippedOrders] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedOrder = JSON.parse(localStorage.getItem("order")) || [];
    setCart(storedCart);
    setPlaceOrder(storedOrder);
    let loadedShippedOrders = JSON.parse(localStorage.getItem("shipped")) || [];
    setShippedOrders(loadedShippedOrders);

    const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};
    setEmail(storedProfile.email || "");
    setName(storedProfile.name || "");
    setAddress(storedProfile.address || "");
  }, []);

  const openProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

  const handleCancel = () => {
    setShowProfile(false);
  };
  const saveData = () => {
    const profileData = {
      email,
      name,
      address,
    };
    localStorage.setItem("profile", JSON.stringify(profileData));
  };
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
      <header className="mb-[20vh]">
        <h1>New Bharat Footwear</h1>
        <nav>
          <button onClick={() => setSelect("cart")}>Cart</button>
          <button onClick={() => setSelect("placed")}>Placed Orders</button>
          <button onClick={() => setSelect("shipped")}>Shipped Orders</button>
          <button
            className="profile-button"
            onClick={() => setShowProfile(true)}
          >
            Profile
          </button>
          {Cookies.get("role") == "customer" && (
            <button
              className="profile-button"
              onClick={() => Cookies.remove("role")}
            >
              Logout
            </button>
          )}
        </nav>
        Address:-Infront of bus stand shrirampur, Tal-shrirampur Dist-Nagar
        <div className=" ">
          <input
            onChange={(e) => setInp(e.target.value)}
            type="text"
            className="w-[40vh] h-10 bg-black"
            placeholder="serach company"
          />
        </div>
      </header>

      <main>
        <section style={{ display: showProfile == true ? "block" : "none" }}>
          <div className="mt-[30vh] login-container">
            <h2>Edit Profile</h2>
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
            <button className="my-2" onClick={saveData}>
              Save
            </button>
            <br />
            {/* Adding onClick event handler to close the modal */}
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </section>

        <section className="mt-[30vh]">
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
        {select == "shipped" && (
          <section>
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
          </section>
        )}
      </main>
    </div>
  );
}

export default CustomerPage;
