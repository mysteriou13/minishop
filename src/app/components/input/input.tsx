
import { InputProps } from "../type"

export default function Input({label,type,value,handleChange}:InputProps) {

  return (
    <div className="mb-4">
      
      <label>{label}</label> <input className="border border-black" type = {type} value = {value} onChange={(e) => handleChange(e.target.value)}/>

   </div>
  )
}
