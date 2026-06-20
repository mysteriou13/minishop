"use client";
import { useEffect, useState } from "react";
import LineInput from "@/app/components/LineInput/LineInput";
import LoaadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { FromProps} from "@/app/type";
import selector from "@/app/rtk/selector";

export default function From({ tapinput, onSubmit, handleDataBack }: FromProps) {
  const { loading, setLoadingSelector } = selector(); 
   const [formGroups, setFormGroups] = useState(tapinput);

  useEffect(() => {
    setFormGroups(tapinput);
  }, [tapinput]);

  //update data input
  const UpataDatainput = (nameinput: string, data: string) => {
    setFormGroups((prev) =>
      prev.map((group) =>
        group.map((input) =>
          input.name === nameinput ? { ...input, value: data } : input,     
        ),
      ),
    );
    handleDataBack(nameinput, data);
  };

  /*submit form*/
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingSelector(true);  
    /*verif if input from if not empty*/
    const hasEmptyInput = formGroups.flat().some((input) => !input.value);    
    if (!hasEmptyInput) {
      onSubmit(); 
      setTimeout(() => {
     setLoadingSelector(false);
    }, 2000);
  }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
             {
             loading == true ? (
              <LoaadingSpinner/>
             ) : (
          <>
          {formGroups.map((group, index) => (
              <LineInput
              key={index}
              dataInput={group}
              handleChange={UpataDatainput}
            />
          ))}
         <button className="button" type="submit">
            envoyer
          </button>
          </>
             )
            }
             
        </form>
    
      </div>
    </div>
  );
}
