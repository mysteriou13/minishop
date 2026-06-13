"use client";
import { useState,useEffect } from "react";
import { initialStateConnection } from "../Utilis"
import {useConnectionUserMutation} from "@/app/rtk/api/apiUser";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function  connection() {
  const [connectionUser] = useConnectionUserMutation();
  const { DataBackFromSelector, setTokenSelector } = selector();
  const [userToken, setUserToken] = useState<string | null>( localStorage.getItem('token'));
  const [responseStatus, setResponseStatus] = useState<boolean | null>(false);
 

  const handleSubmit = async () => {
    const reponse = await connectionUser(DataBackFromSelector).unwrap();
     setResponseStatus(reponse.connexionStatus);
     if(reponse.connexionStatus == true && reponse.token){
      localStorage.setItem('token', reponse.token);
      setTokenSelector(reponse.token);
      setUserToken(reponse.token);
    };
  
}


  return (
    <div> 
    <PageFrom initiatData={initialStateConnection} title="Connection" handleSubmit={handleSubmit} />
     {responseStatus === false && 
     <div className="MainDivPageFrom text-red-500">
     <div className="flex-col h-[55vh] font-bold text-[24px] relative top-[10vh] left-[3vw]">
      Erreur de connexion. Veuillez vérifier vos informations.
     </div>
     </div>
     }

    </div>
  )
}
