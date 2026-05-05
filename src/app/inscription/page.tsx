"use client";
import From from "../components/From/From";
import { initialStateInscription } from "../Utilis";
import { useCreateUserMutation } from "../rtk/api/apiUser";
import { fromDataArray } from "../components/type";
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
      <div className="shadow-xl/30 
       rounded-[20px]
        bg-white 
        w-[60%]
        relative
        left-[50%]
        translate-x-[-50%]
        p-10
        mt-10
        ">
      <p className="font-bold text-[24px]">Inscription</p>

      { 
        showLoading == true && !isLoading? (
          <LoadingSpinner />
        ) :(
      <From
        tapinput={initialStateInscription}
        onSubmit={handleSubmit}
      />
        )

      }
      </div>

    </div>
  );
}
