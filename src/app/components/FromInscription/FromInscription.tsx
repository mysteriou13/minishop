"use client"
import { useReducer } from "react";
import LineInput from "../LineInput/LineInput";
import  { InputItem } from "../type";

type State = InputItem[][];

type Action =
  | { type: "CHANGE_INPUT"; payload: { name: string; value: string } }
  | { type: "RESET" };

const initialState:State = [
[
   {
    name: "email",
    label: "email",
    type: "email",
    value: ""
  },

  {
    name: "password",
    label: "password",
    type: "password",
    value: "",
  },
],

[
  {
    name: "nom",
    label: "nom",
    type: "text",
    value: ""
  },

  {
    name: "prénom",
    label: "prénom",
    type: "text",
    value: ""
  },
],

[
  {
    name: "adress",
    label: "adress",
    type: "text",
    value: "",
  },

  {
    name: "complement adress",
    label: "complement adress",
    type: "text",
    value: "",
  },
],
[
   {
    name: "ville",
    label: "ville",
    type: "text",
    value: "",
   },
  {
    name: "code postal",
    label: "code postal",
    type: "text",
    value: "",
  },

  {
    name: "pays",
    label: "pays",
    type: "text",
    value: "",
  },
 
],

[
{
  name:"region"
  ,label:"region"
  ,type:"text"
  ,value:""
}
]
];

function formReducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_INPUT":
      return state.map((group) =>
        group.map((input) =>
          input.name === action.payload.name
            ? { ...input, value: action.payload.value }
            : input
        )
      );

    case "RESET":
      return state.map((group) =>
        group.map((input) => ({ ...input, value: "" }))
      );

    default:
      return state;
  }
}

export default function FromInscription() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (name: string, value: string) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name, value },
    });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Form values:", state);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Formulaire d'inscription</h2>
      {state.map((group,index) => (
       <LineInput key={index} dataInput={group} handleChange={handleChange}/>
      ))}
      <button
       className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        type="submit"
      >
      envoyer
      </button>
    </form>
  );
}