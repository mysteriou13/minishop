"use client";
import { useMemo, useReducer } from "react";
import LineInput from "../LineInput/LineInput";

import { FromInscriptionProps,fromDataArray, formReducerAction, StateInputForm,ActionInscription } from "../type";

export default function From({  tapinput,fromdata,onSubmit}: FromInscriptionProps) {
   function formReducer(
    state: StateInputForm,
    action: ActionInscription,
  ): StateInputForm {
    switch (action.type) {
      case "CHANGE_INPUT":
        return state.map((group) =>
          group.map((input) =>
            input.name === action.payload.name
              ? { ...input, value: action.payload.value }
              : input,
          ),
        );
  
      case "RESET":
        return state.map((group) =>
          group.map((input) => ({ ...input, value: "" })),
        );
  
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(formReducer, tapinput);
  
  //flatten the state to get a single object with name-value pairs
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
   
      {state.map((group, index) => (
        <LineInput
          key={index}
          dataInput={group}
          handleChange={handleChangeInput}
        />
      ))}
      <button
        className="button"
        type="submit"
      >
        envoyer
      </button>
    </form>
    </div>
  </div>

  );
}
