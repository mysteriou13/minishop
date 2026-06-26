"use client";
import { useEffect, useState } from "react";
import LineInput from "@/app/components/LineInput/LineInput";
import LoaadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { FromProps} from "@/app/type";
import selector from "@/app/rtk/selector";

export default function From({onSubmit}: FromProps) {
  const { loading, setLoadingSelector, initialDataInput,setDataBackSelector,DataBackFromSelector } = selector(); 
   const [formGroups, setFormGroups] = useState(
    initialDataInput.map((line) => line.map((item) => ({ ...item }))),
  );

  useEffect(() => {
    setFormGroups(initialDataInput.map((line) => line.map((item) => ({ ...item }))));
  }, [initialDataInput]);

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

  //update data input
  const UpataDatainput = (nameinput: string, data: string) => {
    setFormGroups((prev) =>
      prev.map((group) =>
        group.map((input) =>
          input.name === nameinput ? { ...input, value: data } : input,     
        ),
      ),
    );
    AddHandleDataBack(nameinput, data);
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
