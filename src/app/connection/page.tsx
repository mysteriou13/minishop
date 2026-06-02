"use client";
import { initialStateConnection } from "../Utilis"
import {useEffect} from "react";
import selector from "@/app/rtk/selector";
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function  connection() {
  const {setDataBackSelector} = selector();
  const handleSubmit = () => {
    // TODO: implement connection submit behavior
  };

  useEffect(() => { 
    setDataBackSelector([]);
  }, [])

  return (
    <div className=""> 
      <PageFrom initiatData={initialStateConnection} title="Connection" handleSubmit={handleSubmit} />

    </div>
  )
}
