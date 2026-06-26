"use client"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import selector from "../rtk/selector";

export default function page() {
  const { setTokenSelector } = selector();
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Clear token from localStorage and Redux store
    localStorage.removeItem("token");
    setTokenSelector(null);
    setLoading(false);
  }, []);

  useEffect(() => {
    /*decrement countdown*/
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown == 1) {
        
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
