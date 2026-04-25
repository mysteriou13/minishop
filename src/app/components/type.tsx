export type StateInputForm = InputItem[][];

export interface FromInscriptionProps  {
  title:string;
  tapinput: StateInputForm;
 
}

export interface InputItem  {
  name: string;
  label: string;
  type: string;
  value: string;
 
};

export  interface InputProps extends InputItem {
  handleChange: (value: string) => void;
};


 export interface formReducerAction {
    type: "CHANGE_INPUT";
    payload: {
      name: string;
      value: string;
    };
  }



export type ActionInscription =
  | { type: "CHANGE_INPUT"; payload: { name: string; value: string } }
  | { type: "RESET" };