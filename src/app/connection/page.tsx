"use client";

import { useState,useEffect } from "react";
import { redirect } from "next/navigation";
import { initialStateConnection } from "../Utilis"
import {useConnectionUserMutation} from "@/app/rtk/api/apiUser";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function  connection() {
  const [connectionUser] = useConnectionUserMutation();
  const { setDataBackSelector, DataBackFromSelector,setTokenSelector ,initialDataConnection} = selector();
  const [initialData, setInitialData] = useState(initialDataConnection);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        redirect("/"); // Redirection vers la page d'accueil
      }
      /*auto completion data input in databackfrom*/   
      setDataBackSelector(initialData.flat().map((item) => ({ name: item.name, value: item.value })));

    }, []);

  const handleSubmit = async () => {
      const reponse = await connectionUser(DataBackFromSelector).unwrap();

      setInitialData((prev) =>
          prev.map((line) =>
            line.map((item) =>
              item.name === "email" && reponse.StatusUser === false
                ? { ...item, errorMessage: "email invalide" }
                : item.name === "password" && reponse.StatusPassword === false
                ? { ...item, errorMessage: "password invalide" }
                : { ...item, errorMessage: "" },
            ),
          ),
      );

      if(reponse.StatusUser === true && reponse.StatusPassword === true && reponse.token){
        localStorage.setItem("token", reponse.token);
        setTokenSelector(reponse.token);
        redirect("/"); // Redirection vers la page d'accueil
      }
   
}


  return (
    <div> 
    
      <PageFrom initiatData={initialData} title="Connection" handleSubmit={() => handleSubmit()} />

    </div>
  )
}
