export type StateInputForm = InputItem[][];

  export interface databack{
  name: string;
  value: string;
  }

export type  LinePros = {
    dataInput:InputItem[],
    handleChange: (name:string, value:string) =>void
}

export type fromDataArray = databack[];

export interface InscriptionResponse {
  inscriptionStatus: boolean;
}

export interface ConnexionResponse {
  connexionStatus: boolean;
  token?: string;
}

export interface Fromdata{
  nameData: string;
  valueData: string;
}

export interface FromProps  {
  tapinput: StateInputForm;
   handleDataBack: (name:string, value:string) => void;
  onSubmit: () => void;
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