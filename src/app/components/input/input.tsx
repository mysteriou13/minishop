import { InputProps } from "../type";

export default function Input({
  name,
  label,
  type,
  value,
  handleChange,
}: InputProps) {
  const autoCompleteValue = type === "password" ? "new-password" : "off";

  return (
    <div className="mb-4 flex flex-col gap-2">
      <label>{label}</label>{" "}
      <input
        className="border border-black"
        name={name}
        type={type}
        value={value}
        autoComplete={autoCompleteValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
