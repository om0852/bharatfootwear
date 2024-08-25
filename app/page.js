"use client";
import React, { useEffect, useState } from "react";
import CustomerPage from "./CustomerPage";
import AdminPage from "./AdminPage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    axios
      .post("/api/loginchecker", { email: Cookies.get("email") })
      .then((res) => {
        if (!res.data.data) {
          router.push("/login");
        }
      });
    const role = Cookies.get("role");
    if (role) {
      setUser({ role });
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      {user?.role === "customer" && <CustomerPage />}
      {user?.role === "admin" && <AdminPage setUser={setUser} />}
    </div>
  );
}

export default Home;
