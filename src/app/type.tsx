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
   Loading: boolean;
  onSubmit: (data: fromDataArray) => void;
}

export interface InputItem  {
  name: string;
  label: string;
  value: string;
  type: string;
};

export  interface InputProps extends InputItem {
  handleChange: (name:any,value: any) => void;
};


export type ActionInscription =
  | { type: "CHANGE_INPUT"; payload: { name: string; value: string } }
  | { type: "RESET" };