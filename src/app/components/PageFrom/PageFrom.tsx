"use client";
import From from "@/app/components/From/From";
import selector from "@/app/rtk/selector";
import { StateInputForm } from "@/app/type";
import { useState } from "react";

interface PageFromProps {
  initiatData: StateInputForm;
  title: string;
  handleSubmit: () => void | Promise<void>;
}

export default function PageFrom({
  handleSubmit,
  title,
  initiatData,
}: PageFromProps) {
  const [showLoading, setShowLoading] = useState(false);
  const { DataBackFromSelector, setDataBackSelector } = selector();
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
  };

  return (
    <div>
      <div
        className="MainDivPageFrom">
        <p className="font-bold text-[24px]">{title}</p>
        <From
          tapinput={initiatData}
          onSubmit={handleSubmit}
          Loading={showLoading}
          handleDataBack={AddHandleDataBack}
        />
      </div>
    </div>
  );
}
