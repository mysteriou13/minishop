"use client";
import { useMemo, useReducer } from "react";
import LineInput from "../LineInput/LineInput";
import { formReducer } from "../../Utilis";
import { FromInscriptionProps,fromDataArray, formReducerAction } from "../type";
export default function From({
  tapinput,
  title,
  fromdata,
  onSubmit,
}: FromInscriptionProps) {
  const [state, dispatch] = useReducer(formReducer, tapinput);

  const flatState = useMemo<fromDataArray>(() => {
    const newFlatState: fromDataArray = {};
    state.forEach((group) => {
      group.forEach((input) => {
        newFlatState[input.name] = input.value;
      });
    });
    return newFlatState;
  }, [state]);

  /*change data input*/
  const handleChangeInput = (name: string, value: string) => {
    const action: formReducerAction = {
      type: "CHANGE_INPUT",
      payload: { name, value },
    };
    dispatch(action);
  };

  /*submit form*/
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasAnyValue = Object.values(flatState).some(
      (value) => value.trim() !== "",
    );

    if (!hasAnyValue) {
      return;
    }

    fromdata?.(flatState);
    onSubmit?.(flatState);
  };

  return (
    <div>
    <div>
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {state.map((group, index) => (
        <LineInput
          key={index}
          dataInput={group}
          handleChange={handleChangeInput}
        />
      ))}
      <button
        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        type="submit"
      >
        envoyer
      </button>
    </form>
    </div>
  </div>

  );
}
