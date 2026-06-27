export type StateInputForm = InputItem[][];

  export interface databack{
  name: string;
  value: string;
  }

export type  LinePros = {
    dataInput:InputItem[],
    
}

export type fromDataArray = databack[];

export interface InscriptionResponse {
  inscriptionStatus: boolean;
  errorEmail: string;
}

export interface ConnexionResponse {
  StatusUser: boolean;
  StatusPassword: boolean;
  token?: string;
}

export interface Fromdata{
  nameData: string;
  valueData: string;
}

export interface FromProps  {
  onSubmit: () => void;
}

export interface InputItem  {
  name: string;
  label: string;
  value: string;
  errorMessage?: string;
  type: string;
};




export type ActionInscription =
  | { type: "CHANGE_INPUT"; payload: { name: string; value: string } }
  | { type: "RESET" };