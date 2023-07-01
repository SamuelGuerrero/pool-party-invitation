"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any>();

  const router = useRouter()

  useEffect(() => {
    fetch("https://aled-server.onrender.com/api/invitados")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response abovex
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
    </div>
  );
}