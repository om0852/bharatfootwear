"use client";

import axios from "axios";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
function Page({ onLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const handleSubmit = () => {
    axios
      .post("/api/login", { email, password,role })
      .then((res) => {
        alert(res.data.message);
        Cookie.set("role", res.data.role);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
      <select onChange={(e) => setRole(e.target.value)}>
        <option value={"customer"}>customer</option>
        <option value={"admin"}>admin</option>
      </select>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Page;
