
import { InputProps } from "../type"

export default function Input({name,label,type,value,handleChange}:InputProps) {

  return (
    <div className="mb-4 flex flex-col gap-2">
      
      <label>{label}</label> <input className="border border-black" name={name} type = {type} value = {value} onChange={(e) => handleChange(e.target.value)}/>

   </div>
  )
}
