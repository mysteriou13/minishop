"use client";
import From from "../components/From/From";
import { initialStateInscription } from "../Utilis";
import { useCreateUserMutation } from "../rtk/api/apiUser";
import { fromDataArray } from "../components/type";

export default function page() {
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();

  //submit form
  const handleSubmit = async (data: fromDataArray) => {
    await createUser(data);
  };

  return (
    <div>
      page inscription
      <From
        tapinput={initialStateInscription}
        title={"Formulaire d'inscription"}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
