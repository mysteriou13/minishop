"use client";
import { useState } from "react";
import { initialStateConnection } from "../Utilis"
import {useConnectionUserMutation} from "@/app/rtk/api/apiUser";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function  connection() {
  const [connectionUser] = useConnectionUserMutation();
  const { DataBackFromSelector,setLoadingSelector,loading, setTokenSelector } = selector();
  const [userToken, setUserToken] = useState<string | null>(null);
  const [errorStatus, setErrorStatus] = useState<boolean | null>(null);

  const handleSubmit = async () => {
    const reponse = await connectionUser(DataBackFromSelector).unwrap();
    setErrorStatus(reponse.connexionStatus);
    if(reponse.token && loading === false){
      localStorage.setItem('token', reponse.token);
      setTokenSelector(reponse.token);
      setUserToken(reponse.token);
    };

}

  return (
    <div> 
     { errorStatus === false && loading == false &&  (  
          <div className="
          text-red-500 text-center
           w-[80%] bg-white relative 
           p-10
           mt-10 
           rounded-full shadow-md
           left-[10%] 
           text-[2em] 
           ">
            Erreur de connexion. Veuillez vérifier vos informations.
          </div>
      )}
      <PageFrom initiatData={initialStateConnection} title="Connection" handleSubmit={handleSubmit} />
   
    </div>
  )
}
