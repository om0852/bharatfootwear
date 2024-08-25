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
        name: "SPARX Mens Sm 648sports Running Shoes",
        price: 824,
        img: "https://m.media-amazon.com/images/I/718bSZO8++L.SX695.jpg",
      },
      {
        name: "SPARX Mens Sm 648sports Running Shoes",
        price: 769,
        img: "https://m.media-amazon.com/images/I/718bSZO8++L.SX695.jpg",
      },
  {
        name: "SPARX mens Sx0678g Sneaker",
        price: 1100,
        img: "https://m.media-amazon.com/images/I/71iV1K42XJL",
      },  {
        name: "Sparx Men White Running Shoes by Myntra",
        price: ₹1,550,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStMMitvV9PFj3pyX9oXdapf4vLYJd3LbsyJF9Hmd13JiHMtBzIbWOZpg6ZjX0VqX3jmA7EiaiFA7J9l_-stEMkZqBrefk_O2p1APwA82RU",
      },  {
        name: "Sparx Men SM-678 Sports Shoes",
        price: ₹1,349,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMDLrVAKcsZxsXt_FIg2qagudwTJI70tV67wPCBZzp3JxKhleF-Z1KgaSsPaxFS8V7x4WqAXBP9bX2x22PPQVuP15XPX4bfcvGYMubJ7QRYh594hZVtprU_w",
      },  {
        name:"Sparx Men's Synthetic Running Shoes SM-171 ",
        price:₹1,236,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0bKzGKAKTTqy7SO3V7pgryJOSkA0ChQQ2bBmh_iclHZDOJB1AQUUzCmtY6ptQ30dpY1wj63YKNucVvNFVSVPfKFbQuCogIDdy27wbgoVtn_kCBpfl1ZgzCQ",
      }, 
        name: "Sparx Men Sx0676gRunning Shoe",
        price:₹979,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRstgzs8f8pFDtcxxlbRt50Qr40KbNzw3CIgkRZR0g5jiVsJyI3fCz5yk10uX1MDs3fTJt4CpJqxK4kPvJnyKejLMM0yC8j3fzDt2ntJptVNwxHH7412DW",
      },  {
        name: Sparx Mens Sm-438 Running Shoes",
        price:₹1,304,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0zneuUod6FeuWIA7Ce9KAqS9XHYJ5J_CNZqi2nJ9L01RrI6dgpMLBlm-dodyDCbQcu3zOKIJpUpj0Mt0Wtk2eBmj9q1qpAynPDTn5gwS9wmiffJ0COeqYsw",
      },  {
        name: "Men's Sparx Sm-680 Industrial Shoe",
        price:₹1,123
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAG0rF6l8nZxwO_-qZjM5twvZDDNNv335A0wclb2WZSMz-64wPGBh6J-dyfWo90wjVQFPPlKbeuvTPnlgLzdExSS0aD9awzmV-hpAELWDs82bVvLBXQhDl",
      },  {
        name: "Sparx Men's Synthetic Running Shoes",
        price: ₹1,566,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzk12DCtep3rkEs-8v5_8vvSzhTUsSAILpF1NB7GTX9J94kDEDCepTZ0kcXVFSMlKmfp89CGdMrGevG1SOU19qEci2CzBtpwWlPecqDGehWtDU0teAhtjEZw";
	},
    ],
    Adidas: [
      {
        name: "Adidas Mens Drogo Running Shoes",
        price: 1725,
        img: " https://m.media-amazon.com/images/I/61hGNA5utrL._SX500_.jpg",
      }
{,
      {{
        name: " Adidas Men's Clinch-X M Running Shoe”
 ",        price: 1489,
        img: " https://m.media-amazon.com/images/I/71sfbi31lhL._SX695_.jpg ",
      },
    ],
      {
        name: "Adidas Mens Runcrypt M Running Shoe",
        price: 1222,
        img: " https://m.media-amazon.com/images/I/715nErX-QPL._SY500_.jpg ",
      },
      {
        name: "adidas Mens Fuseo M Running Shoe",
        price: 1359,
        img: "https://m.media-amazon.com/images/I/71PfjtSkuuL._SY625_.jpg",
      },
      {
        name: "adidas mens Laufen Speed M Running Shoe",
        price: 2063,
        img: "https://m.media-amazon.com/images/I/71cseSM718L._SX695_.jpg",
      },
      {
        name: "adidas mens Wisefoma M Running Shoe",
        price: 2063,
        img: "https://m.media-amazon.com/images/I/81rkqKt3MLL._SX695_.jpg",
      },
      {
        name: "adidas mens Glide Stride M Running Shoe",
        price: 2649,
        img: "https://m.media-amazon.com/images/I/81Ti2GJmxpL._SX695_.jpg",
      },
      {
        name: "adidas mens Vs Pace 2.0 Sneaker",
        price: 2878,
        img: "https://m.media-amazon.com/images/I/414FfrsToBL._SY675_.jpg",
      },
      {
        name: "adidas Mens Astoundrun M Running Shoe",
        price: 1,826,
        img: "https://m.media-amazon.com/images/I/71WJ9dlnSRL._SX695_.jpg",
      },
      {
        name: "adidas mens Amalgo M Running Shoe",
        price:1977,
        img: "https://m.media-amazon.com/images/I/81ATe15IyHL._SX695_.jpg",
      },

    Nike: [
      {
        name: "Nike Mens Revolution 7 Men's Road Running ShoesRunning Shoes",
        price: 3120,
        img: "https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy.CB600086755.png",
      },
      {
        name: "Nike Mens Quest 5 Running Shoe",
        price: 2599,
        img: "https://m.media-amazon.com/images/I/71atP1wteYL",
      },
 {
        name: "Nike Mens Revolution 5 (4e) Running Shoe",
        price: 2100,
        img: "https://m.media-amazon.com/images/I/81Wy5uIFdmL",
      }, {
        name: "Nike Mens City Rep Tr Men's Workout Shoes Sneaker",
        price: 3100,
        img: "https://m.media-amazon.com/images/I/71lyQrHr74L.SX575.jpg",
      }, {
        name: "Nike mens Court Vision Lo Nn Ess Running Shoes",
        price: 2599,
        img: "https://m.media-amazon.com/images/I/71lyQrHr74L",
      }, {
        name: "Nike mens Nike Air Max Impact 4 Running Shoes",
        price: 3100,
        img: "https://m.media-amazon.com/images/I/71subBFxFLL",
      }, {
        name: "NIKE Men's Journey Run ShoesNike Free Run",
        price: 2500,
        img: "https://m.media-amazon.com/images/I/61IswKI4gEL.SY500.jpg",
      }, {
        name: "Nike Mens Air Zoom Structure Running Shoes 25Nike",
        price: 3155,
        img: "https://m.media-amazon.com/images/I/81aDGWhNpcL",
      }, {
        name: "Nike Mens M Mc Trainer 2 Running Shoe",
        price: 100,
        img: "https://m.media-amazon.com/images/I/71+qZWsDB3L",
      }, {
        name: "NIKE mens Downshifter 13 Running shoe",
        price: 3129,
        img: "https://m.media-amazon.com/images/I/71dhfPFeOtL",
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
        name: "LANCER Men's Sports & Outdoor Running Shoes",
        price: ₹944,
        img: "https://m.media-amazon.com/images/I/71HQX5LqVLL",
      },
      {
        name: "LANCER Mens Spyder-1 Running Shoe",
        price: ₹899,
        img: "https://m.media-amazon.com/images/I/71laV4kIaeL",
      },

      {
        name: "Lancer Mens INDUS-12 Black Maroon Running Shoe - 6 UK (INDUS-12BLK-MRN-6_Black Maroon_6 UK)",
        price:₹699 ,
        img: "https://m.media-amazon.com/images/I/71oQXRtEV1S",
      },
      {
        name: "LANCER Men's Running Sports Shoes ACTIVE-47",
        price: ₹574,
        img: "https://m.media-amazon.com/images/I/61lFdCdRYAL",
      },
      {
        name: "Lancer Men's Sports Running Shoes Indus-251",
        price: ₹564,
        img: "https://m.media-amazon.com/images/I/61hwBsknJSL",
      },
      {
        name: "LANCER mens Indus-215 Sports Shoes",
        price: ₹564,
        img: "https://m.media-amazon.com/images/I/71Uqcsss4lL",
      },
      {
        name: "LANCER Mens Active-115 Platform",
        price: ₹694,
        img: "https://m.media-amazon.com/images/I/71UtKYmAMlL",
      },
      {
        name: "LANCER Men's Lace Up Sports Running Outdoor Shoes",
        price: ₹749,
        img: "https://m.media-amazon.com/images/I/71CJIlTo5FL",
      },
      {
        name: "Lancer mens Wonder-10nbl-wht Running Shoes",
        price: ₹564,
        img: "https://m.media-amazon.com/images/I/71Lo1Ywt16L",
      },
      {
        name: "LANCER Men La-107 Tan Suede Sneakers",
        price:₹569,
        img: "https://m.media-amazon.com/images/I/71E6zhtrrcL",
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
        name: "Campus Men's Tyson PRO Running Shoes",
        price: ₹844,
        img: "https://www.amazon.in/Campus-Crysta-PRO-T-BLU-Running/dp/B09RBFQ74N?ref_=ast_sto_dp&th=1&psc=1",
      },
      {
        name: "Campus Men's S-Cross PRO Walking Shoes",
        price:₹899,
        img: "https://www.amazon.in/Campus-S-CROSS-PRO-walking-shoes/dp/B09RBFXKKQ?ref_=ast_sto_dp&th=1&psc=1",
      },
  {
        name: "Campus Mens Ignite ProRunning Shoes",
        price:₹802,
        img: "https://www.amazon.in/Campus-Ignite-PRO-Running-Shoes/dp/B09VH86YT6?ref_=ast_sto_dp&th=1&psc=1",
      },
      {
        name: "Campus Men's MAGNITE Running Shoes",
        price: ₹699,
        img: "https://m.media-amazon.com/images/I/71XV8y4A8tL",
      },  {
        name: "Campus mens Bull Pro Running Shoes",
        price: ₹797,
        img: "https://www.amazon.in/Campus-PRO-Running-Shoes-India/dp/B09RBFLCKT?ref_=ast_sto_dp&th=1&psc=1",
      },
      {
        name: "Campus Men's XING Running Shoes",
        price:₹ 789,
        img: "https://m.media-amazon.com/images/I/71z8ncBFrhL",
      },  {
        name: "Campus Men's DREAMPLEX Walking Shoes",
        price:₹1109,
        img: "https://www.amazon.in/Campus-DREAMPLEX-D-Gry-Running-Shoes/dp/B09QXFT5QQ?ref_=ast_sto_dp&th=1&psc=1,
      },
      {
        name: "Campus Mens Rodeo ProRunning Shoe",
        price:₹897,
        img: "https://m.media-amazon.com/images/I/61tdxAZiO2L",
      },  {
        name: "Campus Men's Camp Smart Walking Shoes",
        price:₹1190,
        img: "https://m.media-amazon.com/images/I/51W00IBurOL",
      },
      {
        name: "Campus Men's Costa PRO Walking Shoes",
        price:₹688,
        img: "https://m.media-amazon.com/images/I/615ztiLDXkL",
      },
    ],
    Paragon: [
      {
        name: "Paragon K11241G Men Formal Shoes Smart & Sleek Design",
        price: ₹639,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKSRWKZ1wHtujqx9lrL_OdKHd58ohY_G2FL4PQpK3TTL4yzPDNSWwxQo7qWpLLj8aiuwh58G3cRifCnoF0MoOpH8BLyTeKJMaub7c-v7u4LKtq7z30fiZrgmM,
      },
      {
        name: "Paragon K11237G Men Loafers Stylish Walking Outdoor Shoes Daily & Occasion Wear",
        price: ₹911,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcr_GttKjiLuUUJpddDlRDAi4roeD_n38b2YB8gV5ozeQ5b1hHdVXZPhlLX_0sN6inh3JhlJPrFR7xEnuBsMMUrEAYzbCWSCzN-IRKOQ_QYvqogRfmc37IDA",
      },
  {
        name: "Paragon Men Mesh Walking Sports Shoes by Myntra",
        price: ₹749,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSumVu9-NHRRjZXfKqghgN5bn-PY-IEnM15i7_wldw1TkoiNb5dTlAhKTF7ozCLH9wwtdmgYerAIwitTy7RXvcaqorCStIwiA7BcAtdlL3vfk5HgGBlCHqsBA",
      },
      {
        name: "Paragon Eeken KE1216G Comfortable Daily Outdoor Walking Shoes for Men",
        price: ₹929,
        img: "src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxdfXDXqxZIazd_0PFqQfoGvonP0KyWPwKU5nNAKurwPCuivR5bmNkpx4_Ax64c9vMJMZo3UYJmjuT-6Yuct3K9hYF7DI8LQovUQyzXZFSE54fiJTsWt-ZcJM";
      },  
{
        name: "Men's Paragon K1214G Casual Shoes Stylish Walking Outdoor Shoes for Everyday Wear";
        price:₹699,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQCdj-eO043nad73vS6EhzSF8y6POVkFbDm3dwjXmFlxh-U7FSYdFGX07IYEdhZn8wb9fz88AFsN1QVS5uo3wPBrTRMtbte8Jg8GeLfg-aWwCzq7vH-XYzAPBA",
      },
      {
        name: "Paragon K1020g Casual Shoes Stylish Walking Outdoor Shoes for Men Everyday Wear",
        price:₹682,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwOQrxTHBoRarjwF-JC_nPmyMJVURRJCYZPoEZVtM5QryXCkVsPvBXGHdOC9GC0unHRcbwgA4EIVWUqJThiuQp_ylZIQgBsRyOf1J_2w8uT1APu_ChEXkDqA",
      },  {
        name: "Paragon PUK3502GS Men Sports Shoes Walking Running Training Cricket Gym Shoes",
        price:₹779,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRbwcRkF5BQBBGGu1GqSg34aplWtyMpC5flx0l7XiNC0mxLrLVVJu_7oDb2b3BZWY6S0mHK7vYukw6Tj5gmuzO6Kt3Ay_RpS3H3y-Nnh-I24xCXU2CnHja6g",
      },
      {
        name: "Paragon K1221G Men Walking Running Training Cricket Gym Sports Shoes",
        price: ₹942,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnq8ljDGsVfMOrBwo3JeFSoBhVPFoiCciZFYUYDs7lC_On5uYgJ-IBXjQZGs534GA7Kf3WQNJfVYgMFJagmBTGFX4srjmiSBcD2I7hgibD7qImL0voZwuL_w",
      },  {
        name: "Paragon PUK1230G Men Casual Shoes Stylish Walking Outdoor Shoes",
        price: ₹1,023,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvpQZVRioD1aJX6DrlyvqhnXteEwJ3LxSncRN7DjK9EPmvo_oWFkkc6ZqMyv7W4fsO0KrbyxSivG1VBPwKvoeKmXk8HvSAjvlTcvhV6p35xljRyJTsE_9A",
      },
      {
        name: "Paragon Men's Casual Shoes | Latest Style with Cushioned Insole & Sturdy Construction",
        price: ₹973,
        img: "https://images.meesho.com/images/products/345563812/ovqut_512.webp",
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
