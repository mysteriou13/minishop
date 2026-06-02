"use client";
import { useCreateUserMutation } from "@/app/rtk/api/apiUser";
import { initialStateInscription } from "@/app/Utilis";
import { useState, useEffect } from "react";

import PageFrom from "@/app/components/PageFrom/PageFrom";
import selector from "@/app/rtk/selector";
export default function page() {
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();
  const [showLoading, setShowLoading] = useState(false);
  const { DataBackFromSelector, setDataBackSelector } = selector();

  useEffect(() => {
    setDataBackSelector([]);
    setShowLoading(false);
  }, []);

  //submit form
  const handleSubmit = async () => {
    setShowLoading(true);
    await createUser(DataBackFromSelector);
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  };

  return (
    <div>
      <PageFrom
        handleSubmit={handleSubmit}
        title="Inscription"
        initiatData={initialStateInscription}
      />
    </div>
  );
}
