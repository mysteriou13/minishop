"use client";
import From from "@/app/components/From/From";
import selector from "@/app/rtk/selector";
import { StateInputForm } from "@/app/type";
import { useEffect } from "react";

interface PageFromProps {
  initiatData: StateInputForm;
  title: string;
  handleSubmit: (data: StateInputForm) => void | Promise<void>;
}

export default function PageFrom({
  handleSubmit,
  title,
  initiatData,
}: PageFromProps) {

  const { DataBackFromSelector, setDataBackSelector } = selector();
  useEffect(() => {
    setDataBackSelector([]);
  }, []);

  /*add new array in data back*/

  
  const AddHandleDataBack = (name: string, value: string) => {
    setDataBackSelector(
      [...(DataBackFromSelector || [])]
        .map((item) => (item.name === name ? { ...item, value } : item))
        .concat(
          DataBackFromSelector?.find((item) => item.name === name)
            ? []
            : [{ name, value }],
        ),
    );
    

    /*keep in input after submit*/
     initiatData.map((line) =>
      line.map((item) => {
        if (item.name === name && item.value !== value && item.name !== "password") {
          item.value = value;
        }
      }),
    );
  };

  return (
    <div>
      <div
        className="MainDivPageFrom">
        <p className="font-bold text-[24px]">{title}</p>
        <From
          tapinput={initiatData}
          onSubmit={() => handleSubmit(initiatData)}
          handleDataBack={AddHandleDataBack}
        />
      </div>
    </div>
  );
}
