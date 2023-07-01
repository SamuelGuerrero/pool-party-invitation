"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState<string>("");
  const [userData, setUserData] = useState({
    id: "",
    status: "",
    urlImage: "",
  });

  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];
    fetch(`http://localhost:8080/api/invitados/${id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="w-full flex justify-center items-center mt-24">
        {userData ? (
          <div className="w-11/12">
            <Image
              alt="Código QR"
              src={userData.urlImage}
              width={297}
              height={297}
              className="w-[calc(100%-2rem)]"
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
}
