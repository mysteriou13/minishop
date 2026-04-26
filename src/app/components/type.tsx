export type StateInputForm = InputItem[][];

export interface Fromdata{
  nameData: any;
  valueData: any;
}

export interface FromInscriptionProps  {
  title:string;
  tapinput: StateInputForm;

   fromdata: (data:any) => void;
   onSubmit: () => void;
}

export interface InputItem  {
  name: string;
  label: string;
  value: string;
  type: string;
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