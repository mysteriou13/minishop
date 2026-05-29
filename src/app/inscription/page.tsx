"use client";
import { useCreateUserMutation } from "@/app/rtk/api/apiUser";
import { initialStateInscription } from "@/app/Utilis";     
import {databack } from "@/app/type";
import { useState,useEffect } from "react";
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function page() {
 const [createUser, { data, error, isLoading }] = useCreateUserMutation();
const [showLoading, setShowLoading] = useState(false);
 const [dataBack, setDataBack] = useState<databack[]>([]);
  
 useEffect(() => {
     setDataBack([]);
     setShowLoading(false);
  }, []);

  //submit form
  const handleSubmit = async () => {
    setShowLoading(true);
    await createUser(dataBack);
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  };


  return (
    <div>
  <PageFrom handleSubmit={handleSubmit} dataBackFrom={dataBack} initiatData={initialStateInscription}/>    
    </div>
  );
}
