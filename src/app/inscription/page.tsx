"use client";
import Link from "next/link";
import { useCreateUserMutation } from "@/app/rtk/api/apiUser";
import { initialStateInscription } from "@/app/Utilis";
import PageFrom from "@/app/components/PageFrom/PageFrom";
import selector from "@/app/rtk/selector";
import { useState, useEffect} from "react";

export default function InscriptionPage() {
  /*data from */
  const [createUser] = useCreateUserMutation();
  const { DataBackFromSelector } = selector();
  const [response, setResponse] = useState<any>(null);
const { setInitialDataInputSelector } = selector();
  useEffect(() => {
    setInitialDataInputSelector(initialStateInscription);
  }, []);

  //submit form inscription
  const handleSubmit = async () => {
    try {
      const response = await createUser(DataBackFromSelector).unwrap();
      if (response.inscriptionStatus === false) {
        initialStateInscription.forEach((line) => {
          line.forEach((item) => {
            if (item.name === "email") {
              item.errorMessage = response.errorEmail || "error email invalide";
            }
          });
        });
      }
      setResponse(response.inscriptionStatus);
    } catch {
      setResponse(false);
    }

  };


  return (
    <div>
      
      {response !== true && (
      <PageFrom
        handleSubmit={handleSubmit}
        title="Inscription"
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
