import Input from "@/app/components/input/input";
import { LinePros } from "@/app/type"


export default function LineInput({dataInput}:LinePros) {
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
      
                />
        )}
    </div>
  )
}
