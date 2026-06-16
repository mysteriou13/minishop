import Input from "@/app/components/input/input";
import { LinePros } from "@/app/type"


export default function LineInput({dataInput,handleChange}:LinePros) {
  return (
    <div className="flex gap-16"> 
        {dataInput.map((data,index)=>
           <Input
                  key={index}
                  name={data.name}
                  label={data.label}
                  type={data.type}
                  value={data.value}
                  errorMessage={data.errorMessage}
                  handleChange={(name, value) => handleChange(name, value)}
                />
        )}
    </div>
  )
}
