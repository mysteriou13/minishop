"use client";
import {redirect} from "next/navigation";
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
    setLoadingSelector(true);
    try {
      const reponse = await connectionUser(DataBackFromSelector).unwrap();
      setErrorStatus(reponse.connexionStatus);
      if(reponse.token){
        localStorage.setItem('token', reponse.token);
        setTokenSelector(reponse.token);
        setUserToken(reponse.token);
        redirect("/");
      }
    } catch {
      setErrorStatus(false);
    } finally {
      setLoadingSelector(false);
    }

}

  return (
    <div> 
      <PageFrom initiatData={initialStateConnection} title="Connection" handleSubmit={handleSubmit} />
    </div>
  )
}
