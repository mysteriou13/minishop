"use client";
import { initialStateConnection } from "../Utilis"
import {useConnectionUserMutation} from "@/app/rtk/api/apiUser";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function  connection() {
  const [connectionUser] = useConnectionUserMutation();
  const { DataBackFromSelector } = selector();
  const handleSubmit = async () => {
    const response = await connectionUser(DataBackFromSelector).unwrap();
    console.log("connection response", response);
  };



  return (
    <div className=""> 
      <PageFrom initiatData={initialStateConnection} title="Connection" handleSubmit={handleSubmit} />

    </div>
  )
}
