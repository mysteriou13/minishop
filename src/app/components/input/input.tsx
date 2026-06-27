import { InputItem } from "@/app/type";
 import selector from "@/app/rtk/selector";

export default function Input({
  name,
  label,
  type,
  value,
  errorMessage,
}: InputItem) {

 const { UpataDatainput } = selector();
  
  return (
    <div>
      <div className="mb-4 flex flex-col gap-2">
        <label className="font-bold">{label}</label>{" "}
        <input
          className="rounded-full border border-black shadow-xl/30"
          name={name}
          type={type}
          value={value}
          onChange={(e) => UpataDatainput(name, e.currentTarget.value)}
        />
      </div>
      <div className="text-red-500 text-sm">{errorMessage}</div>
    </div>
  );
}
