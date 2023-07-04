"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  const imageRef = useRef(null);

  function handleDownloadImage() {
    const link = document.createElement("a");
    link.href = imageRef?.current?.src;
    link.download = "invitacion.jpg";
    link.click();
  }

  return (
    <div style={{backgroundImage: `url("https://i.postimg.cc/SRFS8tYT/fondo.jpg")`}} className="flex bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 pt-10 flex-col text-white items-center min-h-screen w-full">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold animate-pulse shadow-xl text-pink-300">
          Hola Samuel
        </h1>{" "}
        <Image
          className="animate-bounce"
          width={55}
          height={55}
          alt="Foto"
          src={"/diablo.png"}
        />
      </div>
      <div className="w-full flex mt-5 justify-center">
        {userData ? (
          <div className="w-full">
            <Image
              ref={imageRef}
              alt="Código QR"
              src={userData.urlImage}
              width={150}
              height={150}
              className="w-[calc(100%-3rem)] mx-auto rounded-3xl shadow-lg shadow-pink-400"
            />
          </div>
        ) : undefined}
      </div>

      <button
        onClick={handleDownloadImage}
        className="bg-slate-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 animate-bounce px-10 shadow-2xl shadow-green-500 text-black py-2 mt-8 text-2xl font-semibold rounded-lg"
      >
        Guardar QR
      </button>

      <section className="text-black mx-6 mb-3">
        <h1 className="font-medium text-3xl mt-8 text-center text-violet-400">
          Instrucciones
        </h1>
        <ol className="space-y-4 text-xl text-white font-medium text-justify ">
          <li>
            <span className="font-extrabold">1.-</span> Guarda tu código para la
            fiesta 💾
          </li>
          <li>
            <span className="font-extrabold">2.-</span> Al entrar a la fiesta,
            escanea tu código en la entrada 📲
          </li>
          <li>
            <span className="font-extrabold">3.-</span> Si deseas salir un
            momento a la fiesta, vuelve a escanear tu código para evitar
            duplicados 🥷🏻
          </li>
          <li>
            <span className="font-extrabold">4.-</span> Cuando tengas que irte
            de la fiesta, escanea tu código por última vez para registrar tu
            salida 👋🏻
          </li>
        </ol>

        <h1 className="font-medium text-3xl mt-8 text-center text-violet-400">
          Para pasarla chingón 😎
        </h1>
        <ol className="space-y-4 text-xl text-white font-medium text-justify ">
          <li>
            Llega de{" "}
            <span className=" font-extrabold text-rose-500">1:00 - 2:30 </span>
            ya que el acceso sólo será en esa hora{" "}
            <span className=" text-3xl">⏳</span>
          </li>
          <li>
            Lleva tu traje de baño para darte un chapuzón{" "}
            <span className=" text-3xl">💦👙🩳</span>
          </li>
          <li>
            ¡Llevar en mente que terminarás bien pedo{" "}
            <span className=" text-3xl">🍻</span>!
          </li>
        </ol>
        <div className="w-full flex justify-center">
          <Image
            width={200}
            height={200}
            alt="Foto"
            src={"/instrumentos.png"}
          />
        </div>
      </section>
    </div>
  );
}
