"use client";
import { useState } from "react";
import From from "../components/From/From";
import { initialStateInscription } from "../Utilis";
import { useCreateUserMutation } from "../rtk/api/apiUser";

export default function page() {
const [formDataInscription, setFormDataInscription] = useState<any>([]);

 const [createUser, { data, error, isLoading }] = useCreateUserMutation();

  const DataFrom = (data: any) => {
    setFormDataInscription(data);


  }

 const handleSubmit = async () => { 
await createUser(formDataInscription);

 }

  return (
    <div>
      page inscription
      
      <From
        tapinput={initialStateInscription}
        title={"Formulaire d'inscription"}
        fromdata={DataFrom}
        onSubmit={handleSubmit}
      />

    </div>
  );
}
