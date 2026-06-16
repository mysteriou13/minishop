import { InputProps } from "@/app/type";

export default function Input({
  name,
  label,
  type,
  value,
  errorMessage,
  handleChange,
}: InputProps) {
  const autoCompleteValue = type === "password" ? "new-password" : "off";

  return (
    <div>
    <div className="mb-4 flex flex-col gap-2">
      <label className="font-bold">{label}</label>{" "}
      <input
        className="rounded-full border border-black shadow-xl/30"
        name={name}
        type={type}
        value={value}
        autoComplete={autoCompleteValue}
        onChange={(e) => handleChange(name,e.currentTarget.value)}
      />
    </div>
    <div className="text-red-500 text-sm">{errorMessage}</div>
    </div>
  );
}
