import { InputProps } from "@/app/type";
import {useMemo} from "react"
import selector from "@/app/rtk/selector";

export default function Input({
  name,
  label,
  type,
  value,
  errorMessage,
  handleChange,
}: InputProps) {
  const { DataBackFromSelector, setDataBackSelector } = selector();

  /*sava data auto complete*/
  useMemo(() => {
    setDataBackSelector(
      [...(DataBackFromSelector || [])]
        .map((item) => (item.name === name ? { ...item, value } : item))
        .concat(
          DataBackFromSelector?.find((item) => item.name === name)
            ? []
            : [{ name, value }],
        ),
    );

  }, [value]);
  
  
  return (
    <div>
    <div className="mb-4 flex flex-col gap-2">
      <label className="font-bold">{label}</label>{" "}
      <input
        className="rounded-full border border-black shadow-xl/30"
        name={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(name,e.currentTarget.value)}
      />
    </div>
    <div className="text-red-500 text-sm">{errorMessage}</div>
    </div>
  );
}
