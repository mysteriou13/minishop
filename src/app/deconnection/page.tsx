"use client"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import selector from "../rtk/selector";

export default function page() {
  const { setTokenSelector } = selector();
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {

    /*decrement countdown*/
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown == 1) {
        setTokenSelector(null);
        localStorage.removeItem("token");
        setLoading(false);
        redirect("/");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="MainDivPageFrom text-green-800">


      <div>Déconnexion réussie retour a l'acceuil dans {countdown} secondes</div>


    </div>
  )
}
