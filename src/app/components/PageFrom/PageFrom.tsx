"use client";
import From from "@/app/components/From/From";
import selector from "@/app/rtk/selector";
import { StateInputForm } from "@/app/type";
import { useEffect } from "react";

interface PageFromProps {  
  title: string;
  handleSubmit: (data: StateInputForm) => void | Promise<void>;
}

export default function PageFrom({
  handleSubmit,
  title,
 
}: PageFromProps) {

  const { setDataBackSelector,initialDataInput} = selector();
  useEffect(() => {
    setDataBackSelector([]);
  }, []);

  /*add new array in data back*/

  
 

  return (
    <div>
      <div
        className="MainDivPageFrom">
        <p className="font-bold text-[24px]">{title}</p>
       
        <From
          onSubmit={() => handleSubmit(initialDataInput)}
        />
      </div>
    </div>
  );
}
