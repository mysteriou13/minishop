"use client";
import From from "@/app/components/From/From";
import { databack, StateInputForm } from "@/app/type";
import { useState } from "react";

interface PageFromProps {
  initiatData: StateInputForm;
  handleSubmit: () => void | Promise<void>;
  dataBackFrom?: databack[];
}

export default function PageFrom({handleSubmit,dataBackFrom,initiatData}:PageFromProps) {
const [showLoading, setShowLoading] = useState(false);
 const [dataBack, setDataBack] = useState<databack[]>(dataBackFrom || []  );
  

  /*add new array in data back*/
  const AddHandleDataBack = (name:string, value:string) => {
    setDataBack((prev) => {
    const existingData = prev?.find((item) => item.name === name);
      if (existingData) {
        return prev?.map((item) =>
          item.name === name ? { ...item, value } : item
        );
      } else {
        return [...(prev || []), { name, value }];
      }
    });

  }

  return (
    <div>
      <div
        className="
       shadow-2xl/60 
       rounded-[20px]
        bg-white 
        min-h-[70vh]
        w-[60vw]
        relative
        left-[50%]
        translate-x-[-50%]
        p-10
        mt-10
        "
      >
        <p className="font-bold text-[24px]">Inscription</p>
          <From tapinput={initiatData} 
          onSubmit={handleSubmit} 
          Loading={showLoading} 
          handleDataBack={AddHandleDataBack} />
        databack <pre>{JSON.stringify(dataBack, null, 2)}</pre>

      </div>
    </div>
  );
}