"use client";
import From from "../components/From/From";
import { initialStateInscription } from "../Utilis";
import { useCreateUserMutation } from "../rtk/api/apiUser";
import { fromDataArray } from "../type";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
export default function page() {
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();
  const [showLoading, setShowLoading] = useState(false);
  //submit form
  const handleSubmit = async (data: fromDataArray) => {
    setShowLoading(true);
    await createUser(data);
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div
        className="
       shadow-2xl/60 
       rounded-[20px]
        bg-white 
        min-h-[70vh]
        w-[60vw]
        relative
        left-[50%]
        translate-x-[-50%]
        p-10
        mt-10
        "
      >
        <p className="font-bold text-[24px]">Inscription</p>

          <From tapinput={initialStateInscription} onSubmit={handleSubmit} Loading={showLoading}/>
        
      </div>
    </div>
  );
}
