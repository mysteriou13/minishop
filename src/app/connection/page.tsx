"use client";
import {  useEffect } from "react";
import { redirect } from "next/navigation";
import { useConnectionUserMutation } from "@/app/rtk/api/apiUser";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
import { initialStateConnection } from "@/app/Utilis";
export default function connection() {

  const [connectionUser] = useConnectionUserMutation();
  const { setDataBackSelector, 
    DataBackFromSelector, 
    setTokenSelector, 
    setInitialDataInputSelector,
    token,
   } = selector();
 

  useEffect(() => {
    setInitialDataInputSelector(initialStateConnection);
    if (token) {
      redirect("/"); // Redirection vers la page d'accueil
    }

  }, []);

  const handleSubmit = async () => {
    const reponse = await connectionUser(DataBackFromSelector).unwrap();
    setDataBackSelector(reponse.databack);
    if (reponse.StatusUser === true && reponse.StatusPassword === true && reponse.token) {
      localStorage.setItem("token", reponse.token);
      setTokenSelector(reponse.token);
      redirect("/"); 
    }
  }

  return (
    <div>

      <PageFrom title="Connection" handleSubmit={() => handleSubmit()} />

    </div>
  )
}
