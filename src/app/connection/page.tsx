"use client";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { useConnectionUserMutation } from "@/app/rtk/api/apiUser";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
import { InputItem } from "@/app/type";
import { initialStateConnection } from "@/app/Utilis";
export default function connection() {

  const [connectionUser] = useConnectionUserMutation();
  const { setDataBackSelector, DataBackFromSelector, setTokenSelector, setInitialDataInputSelector, initialDataInput } = selector();
  const [initialData, setInitialData] = useState(initialStateConnection);

  useEffect(() => {
    setInitialDataInputSelector(initialStateConnection);
    const token = localStorage.getItem("token");
    if (token) {
      redirect("/"); // Redirection vers la page d'accueil
    }
    /*auto completion data input in databackfrom*/
    setDataBackSelector(initialStateConnection.flat().map((item: InputItem) => ({ name: item.name, value: item.value })));

  }, []);

  const handleSubmit = async () => {
    const reponse = await connectionUser(DataBackFromSelector).unwrap();

    // Update error messages in the form based on the response
    setInitialData(
      initialData.map((line: InputItem[]) =>
        line.map((item: InputItem) =>
          item.name === "email" && reponse.StatusUser === false
            ? { ...item, errorMessage: "email invalide" }
            : item.name === "password" && reponse.StatusPassword === false
              ? { ...item, errorMessage: "password invalide" }
              : { ...item, errorMessage: "" },
        ),
      ),
    );

    if (reponse.StatusUser === true && reponse.StatusPassword === true && reponse.token) {
      localStorage.setItem("token", reponse.token);
      setTokenSelector(reponse.token);
      redirect("/"); // Redirection vers la page d'accueil
    }
  }



  return (
    <div>

      <PageFrom  title="Connection" handleSubmit={() => handleSubmit()} />

    </div>
  )
}
