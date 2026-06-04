"use client";
import { useCreateUserMutation } from "@/app/rtk/api/apiUser";
import { initialStateInscription } from "@/app/Utilis";
import { useState, useEffect } from "react";
import PageFrom from "@/app/components/PageFrom/PageFrom";
import selector from "@/app/rtk/selector";

export default function page() {
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();

  const { DataBackFromSelector, setDataBackSelector } = selector();

  //submit form
  const handleSubmit = async () => {
  
    await createUser(DataBackFromSelector);
    
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
