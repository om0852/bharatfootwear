"use client";

import axios from "axios";
import React, { useState } from "react";
import Cookie from "cookies";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uotp, setUotp] = useState("");
  const [gotp, setGotp] = useState(Infinity);
  const router = useRouter();
  const handleSubmit = () => {
    if (uotp == gotp) {
      axios
        .post("/api/signup", { email, password, role: "customer" })
        .then((res) => {
          alert(res.data.message);
          Cookie.set("role", res.data.role);
          router.push("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Invalid Otp");
    }
  };
  const handleOtp = () => {
    axios
      .post("/api/sendotp", { email })
      .then((res) => {
        setGotp(res.data.otp);
        alert("Otp Send Successfully");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {gotp != Infinity && (
        <input
          type="number"
          placeholder="Otp"
          value={uotp}
          onChange={(e) => setUotp(e.target.value)}
          required
        />
      )}
      {gotp != Infinity && <button onClick={handleSubmit}>Create</button>}{" "}
      {gotp == Infinity && <button onClick={handleOtp}>Send Otp</button>}{" "}
      <Link href={"/login"}>Have a account?</Link>
    </div>
  );
}

export default Page;
