import { StateInputForm } from "./type";

export const initialStateConnection: StateInputForm = [
  [
    {
      name: "email",
      label: "email",
      type: "email",
      value: "",
      errorMessage: ""
    },

    {
      name: "password",
      label: "password",
      type: "password",
      value: "",
      errorMessage: ""
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
      errorMessage: ""
    },

    {
      name: "password",
      label: "password",
      type: "password",
      value: "",
      errorMessage: ""
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
      name: "prenom",
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
      errorMessage: ""
    },
  ],
];


/* Submit handler for inscription form */
 export const handleSubmitInscription = (e: React.SubmitEvent, handleSubmit: () => void) => {
    e.preventDefault();
    handleSubmit();
  };