"use client";
import React, { useEffect, useState } from "react";
import CustomerPage from "./CustomerPage";
import AdminPage from "./AdminPage";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const role = Cookies.get("role");
    if (role) {
      setUser({ role });
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      {user?.role === "customer" && <CustomerPage  />}
      {user?.role === "admin" && <AdminPage setUser={setUser} />}
    </div>
  );
}

export default Home;
