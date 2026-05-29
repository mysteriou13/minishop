"use client";
import { initialStateConnection } from "../Utilis"
import PageFrom from "@/app/components/PageFrom/PageFrom";
export default function  connection() {
  const handleSubmit = () => {
    // TODO: implement connection submit behavior
  };

  return (
    <div className="From"> page connection
      <PageFrom initiatData={initialStateConnection} handleSubmit={handleSubmit} />

    </div>
  )
}
