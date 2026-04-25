import { StateInputForm } from "./components/type";
import { ActionInscription } from "./components/type";


export const initialStateConnection: StateInputForm = [
  [
    {
      name: "email",
      label: "email",
      type: "email",
      value: "",
    },

    {
      name: "password",
      label: "password",
      type: "password",
      value: "",
    },
  ],
];

/*data from inscription*/
export const initialStateInscription: StateInputForm = [
  [
    {
      name: "email",
      label: "email",
      type: "email",
      value: "",
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
      value: "",
    },

    {
      name: "prénom",
      label: "prénom",
      type: "text",
      value: "",
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
      name: "region",
      label: "region",
      type: "text",
      value: "",
    },
  ],
];

/*reducer function*/
export function formReducer(
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

/* Submit handler for inscription form */
 export const handleSubmitInscription = (e: React.SubmitEvent, handleSubmit: () => void) => {
    e.preventDefault();
    handleSubmit();
  };