export  type InputProps = {
  label: string;
  type: string;
  value: string;
  handleChange: (value: string) => void;
};

export type InputItem = {
  name: string;
  label: string;
  type: string;
  value: string;
};