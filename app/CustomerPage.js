"use client";

import React, { useState } from "react";
import ProfileModal from "./ProfileModal";

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
  const [showProfile, setShowProfile] = useState(false);
  const [showData, setShowData] = useState(null);
  const openProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

  return (
    <div>
      <header>
        <h1>New Bharat Footwear</h1>
        <nav>
          <button>Cart</button>
          <button>Placed Orders</button>
          <button>Shipped Orders</button>
          <button className="profile-button" onClick={openProfile}>
            Profile
          </button>
        </nav>
      </header>

      <main>
        {/* Circles for companies */}
        <section>
          {Object.entries(companies).map(([key, value]) => {
            return (
              <div
                onClick={() => setShowData(value)}
                className="company-circle"
                data-company="Sparx"
              >
                {key}
              </div>
            );
          })}
          <section id="productDisplay">
            {showData && showData.map((product) => (
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
          {/* Add other company circles */}
        </section>

        {/* Sections for products, cart, orders, etc. */}
        {/* Add corresponding state and logic for each section */}
      </main>

      {showProfile && <ProfileModal onClose={closeProfile} />}
    </div>
  );
}

export default CustomerPage;
