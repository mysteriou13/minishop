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
      <div>
      page inscription
      { 
        showLoading == true && !isLoading? (
          <LoadingSpinner />
        ) :(
      <From
        tapinput={initialStateInscription}
        title={"Formulaire d'inscription"}
        onSubmit={handleSubmit}
      />
        )

      }
      </div>

    </div>
  );
}
