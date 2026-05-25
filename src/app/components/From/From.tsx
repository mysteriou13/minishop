"use client";
import { useState } from "react";
import LineInput from "../LineInput/LineInput";
import LoaadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { FromInscriptionProps,fromDataArray} from "../../type";

export default function From({ tapinput,Loading, onSubmit }: FromInscriptionProps) {

  const [formGroups, setFormGroups] = useState(tapinput);

  //update data input
  const UpataDatainput = (nameinput: string, data: string) => {
    setFormGroups((prev) =>
      prev.map((group) =>
        group.map((input) =>
          input.name === nameinput ? { ...input, value: data } : input,
        ),
      ),
    );
  };

  /*submit form*/
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    /*verif if input from if not empty*/
    const hasEmptyInput = formGroups.flat().some((input) => !input.value);
    
    if (!hasEmptyInput) {
      const formData = formGroups.flat().reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {} as fromDataArray);
      onSubmit(formData);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
             {
             Loading == true ? (
              <LoaadingSpinner/>
             ) : (
          formGroups.map((group, index) => (
       
              <LineInput
              key={index}
              dataInput={group}
              handleChange={UpataDatainput}
            />
             
          ))
             )
            }
          <button className="button" type="submit">
            envoyer
          </button>
        </form>
      
      </div>
    </div>
  );
}
