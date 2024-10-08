"use client";

import axios from "axios";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Page({ onLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const handleSubmit = () => {
    axios
      .post("/api/login", { email, password, role })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message != "Login Failed") {
          Cookie.set("role", res.data.role);
          Cookie.set("email", email);
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <img
        className="mx-auto"
        width={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZP-fS3vscpaIWZYdvmnNpf3iHfEJpoU3K7IdwQJVM1zrzv-OYXWV0wxNwmiK0MXH3oig&usqp=CAU"
      />

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
      <br />
      <Link href={"/signup"}>Create a new account?</Link>
      <section class="video-section">
        <video controls>
          <source
            src="https://videos.pexels.com/video-files/853958/853958-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}

export default Page;
