"use client";
import Link from "next/link";
import { useCreateUserMutation } from "@/app/rtk/api/apiUser";
import { initialStateInscription } from "@/app/Utilis";
import PageFrom from "@/app/components/PageFrom/PageFrom";
import selector from "@/app/rtk/selector";
import { useState } from "react";

export default function InscriptionPage() {
  /*data from */
  const [createUser] = useCreateUserMutation();
  const { DataBackFromSelector } = selector();
  const [response, setResponse] = useState<boolean >(false);
  //submit form
  const handleSubmit = async () => {
  let response = await createUser(DataBackFromSelector).unwrap();
    setResponse(response.inscriptionStatus);
  
  };


  return (
    <div>
      
      {response === false && (
      <PageFrom
        handleSubmit={handleSubmit}
        title="Inscription"
        initiatData={initialStateInscription}
      />
      )}

      {
        response === true && (
          <div className="
          MainDivPageFrom
           text-green-800 
           ">
            <div className="
            flex-col h-[55vh] font-bold text-[24px] 
            relative top-[10vh] left-[20vw] ">
            
            <p className="font-bold text-[24px]">Inscription réussie</p>          
            <Link href="/connection" className="text-blue-500 underline cursor-pointer">se connecter</Link>
            </div>

          </div>
        )
      }
    </div>
  );
}
