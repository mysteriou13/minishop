export type StateInputForm = InputItem[][];

export type  LinePros = {
    dataInput:InputItem[],
    handleChange: (name:string, value:string) =>void
}

export interface fromDataArray {
  [key: string]: string;
}

export interface Fromdata{
  nameData: string;
  valueData: string;
}

export interface FromInscriptionProps  {
  tapinput: StateInputForm;
  fromdata?: (data: fromDataArray) => void;
  onSubmit?: (data: fromDataArray) => void;
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